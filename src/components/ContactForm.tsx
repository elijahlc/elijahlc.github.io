import React from 'react';
import { Stack, Field, Input, Textarea, Button, Alert } from '@chakra-ui/react';
import { useForm } from '@/hooks/useForm';
import { z } from 'zod';

interface ContactFormProps {
  setSent: (sent: boolean) => void;
}

const contactFormSchema = z.object({
  name: z.string().min(1, 'I need to know who you are!'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(5, 'I need to know what you want!'),
});

const ContactForm: React.FC<ContactFormProps> = ({ setSent }) => {
  const proxyUrl = import.meta.env.VITE_CLOUDFLARE_PROXY;
  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

  const initialValues = { name: '', email: '', message: '' };

  const notifyEli = async (formData: typeof initialValues) => {
    try {
      const response = await fetch(
        `${proxyUrl}?url=${encodeURIComponent(webhookUrl)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send your message. Please try again later.');
      }

      setSent(true);
    } catch (error) {
      throw new Error('Failed to send your message. Sorry!');
    }
  };

  const {
    values,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitError,
    errors,
  } = useForm({
    initialValues,
    onSubmit: notifyEli,
    validationSchema: contactFormSchema,
  });

  return (
    <Stack gap={4}>
      {submitError && (
        <Alert.Root
          status="error"
          variant="subtle"
          colorScheme="red"
          borderRadius="md"
        >
          <Alert.Indicator />
          <Alert.Title>{submitError}</Alert.Title>
        </Alert.Root>
      )}

      <Field.Root invalid={!!errors.name}>
        <Field.Label>Your name</Field.Label>
        <Input
          colorPalette="red"
          name="name"
          onChange={handleChange}
          value={values.name}
          placeholder="Super Cool Person"
        />
        {errors.name && <Field.ErrorText>{errors.name}</Field.ErrorText>}
      </Field.Root>

      <Field.Root invalid={!!errors.email}>
        <Field.Label>Your email</Field.Label>
        <Input
          colorPalette="red"
          name="email"
          onChange={handleChange}
          value={values.email}
          type="email"
          placeholder="you@email.com"
        />
        {errors.email && <Field.ErrorText>{errors.email}</Field.ErrorText>}
      </Field.Root>

      <Field.Root invalid={!!errors.message}>
        <Field.Label>Message</Field.Label>
        <Textarea
          placeholder="What's up, Eli?"
          name="message"
          colorPalette="red"
          onChange={handleChange}
          value={values.message}
        />
        {errors.message && <Field.ErrorText>{errors.message}</Field.ErrorText>}
      </Field.Root>

      <Button
        alignSelf="start"
        size="xl"
        colorPalette="red"
        onClick={handleSubmit}
        loading={isSubmitting}
      >
        Send message
      </Button>
    </Stack>
  );
};

export default ContactForm;
