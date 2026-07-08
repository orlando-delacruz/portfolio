import styled, { keyframes } from 'styled-components';
import theme from '../../../styles/theme';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

/* ─── Section ─────────────────────────────────────────────── */
export const Section = styled.section`
  background-color: ${theme.colors.sectionBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  max-width: 820px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  animation: ${fadeUp} 0.6s ease both;
`;

/* ─── Form Heading ────────────────────────────────────────── */
export const FormHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`;

export const FormPretitle = styled.p`
  font-size: ${theme.typography.size.xs};
  font-weight: ${theme.typography.weight.semibold};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 10px;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 20px;
    background-color: ${theme.colors.primary};
    border-radius: 50px;
  }
`;

export const FormTitle = styled.h2`
  font-size: ${theme.typography.heading.h2};
  font-weight: ${theme.typography.weight.semibold};
  line-height: 1.2;
`;

export const FormHighlight = styled.span`
  color: ${theme.colors.primary};
`;

export const FormDescription = styled.p`
  font-size: ${theme.typography.size.body};
  color: rgba(255, 255, 255, 0.55);
  max-width: 520px;
`;

/* ─── Form ────────────────────────────────────────────────── */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`;

export const Label = styled.label`
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.medium};
  color: rgba(255, 255, 255, 0.75);
`;

export const RequiredStar = styled.span`
  color: ${theme.colors.primary};
  font-weight: ${theme.typography.weight.semibold};
`;

export const Input = styled.input`
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid
    ${({ $hasError }) =>
    $hasError ? theme.colors.primary : 'rgba(255, 255, 255, 0.12)'};
  background: rgba(255, 255, 255, 0.05);
  color: ${theme.colors.white};
  font-family: inherit;
  font-size: ${theme.typography.size.body};
  transition: border-color 0.2s ease, background 0.2s ease;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  &:focus {
    border-color: ${theme.colors.primary};
    background: rgba(37, 98, 234, 0.06);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &[aria-invalid='true'] {
    border-color: ${theme.colors.primary};
  }
`;

export const Select = styled.select`
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: ${theme.colors.white};
  font-family: inherit;
  font-size: ${theme.typography.size.body};
  transition: border-color 0.2s ease, background 0.2s ease;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
  cursor: pointer;

  option {
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
  }

  &:focus {
    border-color: ${theme.colors.primary};
    background: rgba(37, 98, 234, 0.06);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Textarea = styled.textarea`
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid
    ${({ $hasError }) =>
    $hasError ? theme.colors.primary : 'rgba(255, 255, 255, 0.12)'};
  background: rgba(255, 255, 255, 0.05);
  color: ${theme.colors.white};
  font-family: inherit;
  font-size: ${theme.typography.size.body};
  transition: border-color 0.2s ease, background 0.2s ease;
  outline: none;
  resize: vertical;
  min-height: 120px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  &:focus {
    border-color: ${theme.colors.primary};
    background: rgba(37, 98, 234, 0.06);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &[aria-invalid='true'] {
    border-color: ${theme.colors.primary};
  }
`;

export const CharacterCount = styled.span`
  font-size: ${theme.typography.size.xs};
  color: rgba(255, 255, 255, 0.3);
  text-align: right;
  margin-top: 4px;
`;

export const ErrorText = styled.span`
  font-size: ${theme.typography.size.sm};
  color: ${theme.colors.primary};
  margin-top: 4px;
  animation: ${fadeUp} 0.25s ease both;
`;

/* ─── Submit ───────────────────────────────────────────────── */
export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 40px;
  border-radius: 50px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-family: inherit;
  font-size: ${theme.typography.size.body};
  font-weight: ${theme.typography.weight.medium};
  border: 1px solid ${theme.colors.primary};
  transition: transform 0.2s ease, background 0.2s ease, opacity 0.2s ease;
  cursor: pointer;
  min-width: 180px;

  svg {
    font-size: 1.1rem;
  }

  &:hover:not(:disabled) {
    background: ${theme.colors.primaryLight};
    transform: scale(1.03);
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 3px;
  }

  @media ${theme.media.mobile} {
    padding: 12px 28px;
    min-width: 150px;
    font-size: ${theme.typography.size.sm};
  }
`;

export const Spinner = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: ${theme.colors.white};
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
  flex-shrink: 0;
`;

/* ─── Status Messages ──────────────────────────────────────── */
export const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-radius: 12px;
  background: rgba(37, 98, 234, 0.12);
  border: 1px solid rgba(37, 98, 234, 0.25);
  color: ${theme.colors.white};
  font-size: ${theme.typography.size.body};
  animation: ${fadeUp} 0.4s ease both;

  svg {
    color: ${theme.colors.primary};
    font-size: 24px;
    flex-shrink: 0;
  }
`;

export const ErrorMessage = styled(SuccessMessage)`
  background: rgba(255, 82, 82, 0.12);
  border-color: rgba(255, 82, 82, 0.25);

  svg {
    color: #ff5252;
  }
`;