import React, { useState } from 'react';
import { Stack, Field, Input, Textarea, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Toaster, toaster } from '@/components/ui/toaster';

const contactFormSchema = yup.object({
  name: yup.string().required('I need to know who you are!'),
  email: yup.string().email('Please enter a valid email address').required(),
  message: yup.string().min(5, 'I need to know what you want!').required(),
});

const ContactForm: React.FC = () => {
  const proxyUrl = import.meta.env.VITE_CLOUDFLARE_PROXY;
  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const notifyEli = async (
    formData: yup.InferType<typeof contactFormSchema>
  ) => {
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
        throw new Error();
      }

      toaster.create({
        title: 'Success!',
        description:
          "Thanks for reaching out! I'll email you back as soon as I can. Unless you\'re a bot and/or spam. In which case I probably won\'t.",
        type: 'success',
        duration: 5000,
      });
    } catch (error) {
      toaster.create({
        title: 'Error',
        description: 'Failed to send your message. Sorry!',
        type: 'error',
        duration: 5000,
      });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(contactFormSchema) });

  return (
    <form onSubmit={handleSubmit(notifyEli)}>
      <Stack gap={4}>
        <Field.Root invalid={!!errors.name}>
          <Field.Label>Your name</Field.Label>
          <Input
            colorPalette="red"
            placeholder="Super Cool Person"
            {...register('name')}
          />
          {errors.name && (
            <Field.ErrorText>{errors.name.message}</Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={!!errors.email}>
          <Field.Label>Your email</Field.Label>
          <Input
            colorPalette="red"
            type="email"
            {...register('email')}
            placeholder="you@email.com"
          />
          {errors.email && (
            <Field.ErrorText>{errors.email.message}</Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={!!errors.message}>
          <Field.Label>Message</Field.Label>
          <Textarea
            placeholder="What's up, Eli?"
            colorPalette="red"
            {...register('message')}
          />
          {errors.message && (
            <Field.ErrorText>{errors.message.message}</Field.ErrorText>
          )}
        </Field.Root>
        <Button
          alignSelf="start"
          size="xl"
          colorPalette="red"
          type="submit"
          loading={isSubmitting}
        >
          Send message
        </Button>
      </Stack>
      <Toaster />
    </form>
  );
};

export default ContactForm;
