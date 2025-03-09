import React from 'react';
import {
  Stack,
  Field,
  Input,
  Textarea,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useForm } from '@/hooks/useForm';

interface ContactFormProps {
  setSent: (sent: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ setSent }) => {
  const proxyUrl = import.meta.env.VITE_CLOUDFLARE_PROXY;
  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const notifyEli = async (formData: typeof initialValues) => {
    try {
      const response = await fetch(
        `${proxyUrl}?url=${encodeURIComponent(webhookUrl)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send your message. Please try again later.');
      }

      setSent(true);
    } catch (error) {
      throw new Error(
        'Network error. Please check your connection and try again.'
      );
    }
  };

  const { values, handleChange, handleSubmit, isSubmitting, submitError } =
    useForm({
      initialValues,
      onSubmit: notifyEli,
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

      <Field.Root>
        <Field.Label>Your name</Field.Label>
        <Input
          colorPalette="red"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Your email</Field.Label>
        <Input
          colorPalette="red"
          name="email"
          onChange={handleChange}
          value={values.email}
          type="email"
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Message</Field.Label>
        <Textarea
          placeholder="What's up, Eli?"
          name="message"
          colorPalette="red"
          onChange={handleChange}
          value={values.message}
        />
      </Field.Root>

      <Button
        alignSelf="start"
        size="xl"
        colorPalette="red"
        onClick={handleSubmit}
        isLoading={isSubmitting}
        loadingText="Sending..."
      >
        Send message
      </Button>
    </Stack>
  );
};

export default ContactForm;
