import { useState, type FormEvent, type ReactNode } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { profile } from '@/data/portfolio';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyValues: FormValues = { name: '', email: '', message: '' };

function validateContact(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormValues, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    setSubmitted(false);
    if (errors[field]) setErrors(validateContact(next));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = `Portfolio enquiry from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\nFrom: ${values.name.trim()} <${values.email.trim()}>`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setValues(emptyValues);
  };

  const inputClass = (field: keyof FormValues) =>
    `w-full rounded-lg border bg-[#FFFEFC] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 transition-colors duration-200 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 ${
      errors[field] ? 'border-[#A33F34]' : 'border-[#E5DED6]'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name} htmlFor="contact-name">
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder="Your name"
            className={inputClass('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
        </Field>
        <Field label="Email" error={errors.email} htmlFor="contact-email">
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="you@example.com"
            className={inputClass('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
        </Field>
      </div>

      <Field label="Message" error={errors.message} htmlFor="contact-message">
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Tell me about the role or project you have in mind."
          className={`${inputClass('message')} resize-y`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-slate-500">
          This form opens your email app with your message ready to send. It does not send from the website.
        </p>
        <button
          type="submit"
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-electric-500 px-6 py-3 font-dm text-sm font-medium text-[#FFFEFC] shadow-sm shadow-[#2C2420]/10 transition-colors duration-200 hover:bg-electric-600 active:scale-[0.98]"
        >
          Send Message
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>

      {submitted && (
        <p role="status" className="flex items-center gap-2 rounded-xl border border-[#D2BBA9] bg-navy-900 px-4 py-3 text-sm text-[#5E3425]">
          <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          Your email app should now be open with the message ready to send.
        </p>
      )}
    </form>
  );
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}

function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-2 text-xs text-[#8F362E]">
          {error}
        </p>
      )}
    </div>
  );
}
