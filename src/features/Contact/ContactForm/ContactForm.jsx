import { useState, useCallback, useRef, useEffect } from 'react';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { sendContactEmail } from '../../../services/emailService';
import * as S from './ContactForm.styled';

const BUDGET_OPTIONS = [
  { value: '', label: 'Select a budget range (optional)' },
  { value: 'Less than $500', label: 'Less than $500' },
  { value: '$500 - $1,000', label: '$500 - $1,000' },
  { value: '$1,000 - $5,000', label: '$1,000 - $5,000' },
  { value: '$5,000+', label: '$5,000+' },
  { value: 'Not sure', label: 'Not sure' },
];

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  company: '',
  subject: '',
  budget: '',
  message: '',
};

const INITIAL_ERRORS_STATE = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState(INITIAL_ERRORS_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const successRef = useRef(null);

  // Scroll to success message when it appears
  useEffect(() => {
    if (submitStatus.type === 'success' && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [submitStatus.type]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    // Clear submit status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: '', message: '' });
    }
  }, [errors, submitStatus.type]);

  const validateField = useCallback((name, value) => {
    const trimmed = value.trim();

    switch (name) {
      case 'name':
        if (!trimmed) return 'Full name is required.';
        if (trimmed.length < 2) return 'Name must be at least 2 characters.';
        if (trimmed.length > 50) return 'Name must be less than 50 characters.';
        return '';

      case 'email': {
        if (!trimmed) return 'Email address is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmed)) return 'Please enter a valid email address.';
        return '';
      }

      case 'subject':
        if (!trimmed) return 'Subject is required.';
        if (trimmed.length < 5) return 'Subject must be at least 5 characters.';
        if (trimmed.length > 100) return 'Subject must be less than 100 characters.';
        return '';

      case 'company':
        if (trimmed && trimmed.length > 50) return 'Company must be less than 50 characters.';
        return '';

      case 'message':
        if (!trimmed) return 'Message is required.';
        if (trimmed.length < 10) return 'Message must be at least 10 characters.';
        if (trimmed.length > 1000) return 'Message must be less than 1000 characters.';
        return '';

      default:
        return '';
    }
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    ['name', 'email', 'subject', 'message'].forEach((field) => {
      const error = validateField(field, formData[field]);
      newErrors[field] = error;
      if (error) isValid = false;
    });

    // Optional: validate company if present
    const companyError = validateField('company', formData.company);
    if (companyError) newErrors.company = companyError;

    setErrors(newErrors);
    return isValid;
  }, [formData, validateField]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, [validateField]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (isSubmitting) return;

    // Validate form
    if (!validateForm()) {
      // Focus the first field with an error
      const firstErrorField = document.querySelector('[aria-invalid="true"]');
      if (firstErrorField) {
        firstErrorField.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      await sendContactEmail(formData);

      setSubmitStatus({
        type: 'success',
        message: 'Your message has been sent successfully! I\'ll get back to you within 24 hours.',
      });

      // Reset form
      setFormData(INITIAL_FORM_STATE);
      setErrors(INITIAL_ERRORS_STATE);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, isSubmitting, validateForm]);

  const hasError = (field) => !!errors[field];

  return (
    <S.Section id="contact-form" aria-labelledby="contact-form-heading">
      <S.FormContainer>
        <S.FormHeading>
          <S.FormPretitle>Send a Message</S.FormPretitle>
          <S.FormTitle id="contact-form-heading">
            Let's Start a <S.FormHighlight>Conversation</S.FormHighlight>
          </S.FormTitle>
          <S.FormDescription>
            Fill out the form below and I'll get back to you as soon as possible.
          </S.FormDescription>
        </S.FormHeading>

        {submitStatus.type === 'success' && (
          <S.SuccessMessage ref={successRef} role="status" aria-live="polite">
            <FiCheckCircle aria-hidden="true" />
            <span>{submitStatus.message}</span>
          </S.SuccessMessage>
        )}

        {submitStatus.type === 'error' && (
          <S.ErrorMessage role="alert" aria-live="assertive">
            <FiAlertCircle aria-hidden="true" />
            <span>{submitStatus.message}</span>
          </S.ErrorMessage>
        )}

        <S.Form onSubmit={handleSubmit} noValidate>
          <S.FormRow>
            <S.FieldGroup>
              <S.Label htmlFor="contact-name">
                Full Name <S.RequiredStar aria-hidden="true">*</S.RequiredStar>
              </S.Label>
              <S.Input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="John Doe"
                $hasError={hasError('name')}
                aria-invalid={hasError('name')}
                aria-describedby={hasError('name') ? 'name-error' : undefined}
                disabled={isSubmitting}
                autoComplete="name"
                maxLength={50}
                required
              />
              {hasError('name') && (
                <S.ErrorText id="name-error" role="alert">
                  {errors.name}
                </S.ErrorText>
              )}
            </S.FieldGroup>

            <S.FieldGroup>
              <S.Label htmlFor="contact-email">
                Email Address <S.RequiredStar aria-hidden="true">*</S.RequiredStar>
              </S.Label>
              <S.Input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="john@example.com"
                $hasError={hasError('email')}
                aria-invalid={hasError('email')}
                aria-describedby={hasError('email') ? 'email-error' : undefined}
                disabled={isSubmitting}
                autoComplete="email"
                required
              />
              {hasError('email') && (
                <S.ErrorText id="email-error" role="alert">
                  {errors.email}
                </S.ErrorText>
              )}
            </S.FieldGroup>
          </S.FormRow>

          <S.FormRow>
            <S.FieldGroup>
              <S.Label htmlFor="contact-company">Company (Optional)</S.Label>
              <S.Input
                id="contact-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Company"
                $hasError={hasError('company')}
                aria-invalid={hasError('company')}
                aria-describedby={hasError('company') ? 'company-error' : undefined}
                disabled={isSubmitting}
                autoComplete="organization"
                maxLength={50}
              />
              {hasError('company') && (
                <S.ErrorText id="company-error" role="alert">
                  {errors.company}
                </S.ErrorText>
              )}
            </S.FieldGroup>

            <S.FieldGroup>
              <S.Label htmlFor="contact-subject">
                Subject <S.RequiredStar aria-hidden="true">*</S.RequiredStar>
              </S.Label>
              <S.Input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Project Inquiry"
                $hasError={hasError('subject')}
                aria-invalid={hasError('subject')}
                aria-describedby={hasError('subject') ? 'subject-error' : undefined}
                disabled={isSubmitting}
                maxLength={100}
                required
              />
              {hasError('subject') && (
                <S.ErrorText id="subject-error" role="alert">
                  {errors.subject}
                </S.ErrorText>
              )}
            </S.FieldGroup>
          </S.FormRow>

          <S.FormRow>
            <S.FieldGroup>
              <S.Label htmlFor="contact-budget">Project Budget (Optional)</S.Label>
              <S.Select
                id="contact-budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                disabled={isSubmitting}
              >
                {BUDGET_OPTIONS.map(({ value, label }) => (
                  <option key={value || 'default'} value={value}>
                    {label}
                  </option>
                ))}
              </S.Select>
            </S.FieldGroup>
          </S.FormRow>

          <S.FieldGroup>
            <S.Label htmlFor="contact-message">
              Message <S.RequiredStar aria-hidden="true">*</S.RequiredStar>
            </S.Label>
            <S.Textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tell me about your project, goals, or any questions you have..."
              $hasError={hasError('message')}
              aria-invalid={hasError('message')}
              aria-describedby={hasError('message') ? 'message-error' : undefined}
              disabled={isSubmitting}
              rows={5}
              maxLength={1000}
              required
            />
            <S.CharacterCount>
              {formData.message.length} / 1000 characters
            </S.CharacterCount>
            {hasError('message') && (
              <S.ErrorText id="message-error" role="alert">
                {errors.message}
              </S.ErrorText>
            )}
          </S.FieldGroup>

          <S.SubmitWrapper>
            <S.SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <S.Spinner aria-hidden="true" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend aria-hidden="true" />
                  Send Message
                </>
              )}
            </S.SubmitButton>
          </S.SubmitWrapper>
        </S.Form>
      </S.FormContainer>
    </S.Section>
  );
};

export default ContactForm;