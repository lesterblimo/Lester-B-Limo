// Runs automatically on every verified (non-spam) Netlify Forms submission
// and emails it through Resend with a "Type - Client Name" subject.

const FORM_TITLES = {
	reservation: 'Reservation',
	'home-quote': 'Quote Request',
	contact: 'Contact',
};

const FIELD_LABELS = {
	name: 'Name',
	email: 'Email',
	phone: 'Phone',
	topic: 'Topic',
	service: 'Service',
	tripType: 'Trip Type',
	vehicle: 'Vehicle',
	pickup: 'Pickup',
	dropoff: 'Drop-off',
	pickupDate: 'Pickup Date',
	pickupTime: 'Pickup Time',
	passengers: 'Passengers',
	bags: 'Bags',
	returnDetails: 'Return Details',
	notes: 'Notes',
	message: 'Message',
	cardName: 'Name on Card',
	cardNumber: 'Card Number',
	cardExpiry: 'Expiry',
	cardCvv: 'CVV',
	billingStreet: 'Billing Street',
	billingCity: 'City',
	billingProvince: 'Province',
	billingPostal: 'Postal Code',
};

const SKIPPED_FIELDS = new Set(['form-name', 'bot-field', 'ip', 'user_agent', 'referrer']);

const escapeHtml = (value) =>
	String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

const labelFor = (key) => FIELD_LABELS[key] ?? key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (c) => c.toUpperCase());

export default async (req) => {
	const { payload } = await req.json();
	const data = payload.data ?? {};
	const formTitle = FORM_TITLES[payload.form_name] ?? payload.form_name;
	const clientName = String(data.name ?? '').trim() || 'Unknown';

	const rows = Object.entries(data).filter(([key, value]) => !SKIPPED_FIELDS.has(key) && String(value ?? '').trim() !== '');

	const html = `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;line-height:1.35;color:#171815;">
${rows
	.map(
		([key, value]) =>
			`<tr><td style="padding:3px 12px 3px 0;color:#5f625e;font-weight:bold;white-space:nowrap;vertical-align:top;">${escapeHtml(labelFor(key))}</td><td style="padding:3px 0;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`,
	)
	.join('\n')}
</table>`;

	const text = rows.map(([key, value]) => `${labelFor(key)}: ${value}`).join('\n');

	const response = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			from: process.env.RESEND_FROM ?? 'Lester B Limo Website <onboarding@resend.dev>',
			to: (process.env.NOTIFY_EMAIL ?? 'lesterb.limo@gmail.com').split(',').map((address) => address.trim()),
			reply_to: data.email || undefined,
			subject: `${formTitle} - ${clientName}`,
			html,
			text,
		}),
	});

	if (!response.ok) {
		console.error('Resend request failed', response.status, await response.text());
		return new Response('Email failed', { status: 500 });
	}

	return new Response('OK');
};
