import emailjs from '@emailjs/browser';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export const sendContactEmail = async (formData) => {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    throw new Error('EmailJS configuration is missing. Check your environment variables.');
  }

  const templateParams = {
    from_name: formData.name.trim(),
    from_email: formData.email.trim(),
    company: formData.company?.trim() || '',
    subject: formData.subject.trim(),
    budget: formData.budget || '',
    submitted_at: new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'medium',
    }),
    message: formData.message.trim(),
  };

  emailjs.init(PUBLIC_KEY);

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    return response;
  } catch (error) {
    console.error('EmailJS Error:', {
      status: error.status,
      text: error.text,
      message: error.message,
    });
    // Preserve the original error as cause
    throw new Error('Failed to send message. Please try again later.', {
      cause: error,
    });
  }
};