import React, { useState } from 'react';

export const SubmitPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'Name is required.';
    if (!email.trim()) e.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'Email is invalid.';
    if (!message.trim() || message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
    if (!agree) e.agree = 'You must agree to the terms.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSuccess(null);
    // Mock API call
    await new Promise((res) => setTimeout(res, 900));
    setSubmitting(false);
    setSuccess('Thanks — your submission has been received. We will reply to the email you provided.');
    setName(''); setEmail(''); setMessage(''); setAgree(false);
    setErrors({});
  };

  return (
    <div className="submit max-w-[900px] mx-auto py-20 px-6 md:px-12">
      <h1 className="text-4xl font-bold mb-6 text-center">SUBMIT</h1>
      <p className="mb-6 text-[#555] text-center">Send us your ideas, brand pitches, or product proposals.</p>

      <form onSubmit={onSubmit} noValidate className="max-w-[600px] mx-auto text-left border border-brand-border bg-white p-6 rounded">
        {success && <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800">{success}</div>}

        <label className="block mb-3"><span className="text-sm font-semibold">Name</span>
          <input value={name} onChange={(ev) => setName(ev.target.value)} type="text" className={`w-full mt-2 p-2 border rounded ${errors.name ? 'border-red-400' : 'border-brand-border'}`} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined} />
          {errors.name && <div id="err-name" className="text-red-600 text-sm mt-1">{errors.name}</div>}
        </label>

        <label className="block mb-3"><span className="text-sm font-semibold">Email</span>
          <input value={email} onChange={(ev) => setEmail(ev.target.value)} type="email" className={`w-full mt-2 p-2 border rounded ${errors.email ? 'border-red-400' : 'border-brand-border'}`} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined} />
          {errors.email && <div id="err-email" className="text-red-600 text-sm mt-1">{errors.email}</div>}
        </label>

        <label className="block mb-3"><span className="text-sm font-semibold">Message</span>
          <textarea value={message} onChange={(ev) => setMessage(ev.target.value)} className={`w-full mt-2 p-2 border rounded ${errors.message ? 'border-red-400' : 'border-brand-border'}`} rows={6} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-message' : undefined}></textarea>
          {errors.message && <div id="err-message" className="text-red-600 text-sm mt-1">{errors.message}</div>}
        </label>

        <label className="flex items-start gap-3 mb-4">
          <input checked={agree} onChange={(ev) => setAgree(ev.target.checked)} type="checkbox" className="mt-1" aria-invalid={!!errors.agree} aria-describedby={errors.agree ? 'err-agree' : undefined} />
          <div className="text-sm">I agree to the terms and consent to be contacted regarding this submission.</div>
        </label>
        {errors.agree && <div id="err-agree" className="text-red-600 text-sm mb-4">{errors.agree}</div>}

        <div className="text-right">
          <button type="submit" disabled={submitting} className="px-6 py-3 bg-brand-neon text-black font-bold rounded disabled:opacity-60">{submitting ? 'Submitting…' : 'Submit'}</button>
        </div>
      </form>
    </div>
  );
};
