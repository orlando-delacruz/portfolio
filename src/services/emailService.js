import emailjs from '@emailjs/browser';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

/**
 * Sends a contact email using EmailJS
 * @param {Object} formData - The form data
 * @param {string} formData.name - Sender's full name
 * @param {string} formData.email - Sender's email address
 * @param {string} formData.company - Sender's company (optional)
 * @param {string} formData.subject - Email subject
 * @param {string} formData.budget - Project budget range (optional)
 * @param {string} formData.message - The message content
 * @returns {Promise} EmailJS send promise
 */
export const sendContactEmail = async (formData) => {
  // Initialize EmailJS with public key
  emailjs.init(PUBLIC_KEY);

  const templateParams = {
    sender_name: formData.name.trim(),
    sender_email: formData.email.trim(),
    sender_company: formData.company?.trim() || '',
    subject: formData.subject.trim(),
    budget: formData.budget || '',
    message: formData.message.trim(),
    submitted_at: new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'medium',
    }),
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    return response;
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('Failed to send message. Please try again later.', {
      cause: error,
    });
  }
};