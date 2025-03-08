import React, { useState } from 'react';
import {
  Stack,
  Heading,
  Text,
  Field,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

const ContactForm: React.FC = () => {
  const proxyUrl = import.meta.env.VITE_CLOUDFLARE_PROXY;
  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
    sent: false,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormDetails({
      ...formDetails,
      [event.target.name]: event.target.value,
    });
  };

  const notifyEli = async () => {
    try {
      await fetch(`${proxyUrl}?url=${encodeURIComponent(webhookUrl)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formDetails.name,
          email: formDetails.email,
          message: formDetails.message,
        }),
      });

      setFormDetails({
        name: '',
        email: '',
        message: '',
        sent: true,
      });
    } catch (error) {
      console.error('Failed to send message', error);
    }
  };

  return (
    <Stack as="section" paddingX={6} gap={6} fontSize="lg">
      <Heading as="h2" size="5xl" textTransform="uppercase" color="yellow.600">
        Contact Me
      </Heading>
      {formDetails.sent ? (
        <Text>
          Thanks for reaching out! I'll email you back as soon as I can. Unless
          you're a bot and/or spam. In which case I probably won't.
        </Text>
      ) : (
        <Stack gap={4}>
          <Field.Root>
            <Field.Label>Your name</Field.Label>
            <Input
              colorPalette="red"
              name="name"
              onChange={handleInputChange}
              value={formDetails.name}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Your email</Field.Label>
            <Input
              colorPalette="red"
              name="email"
              onChange={handleInputChange}
              value={formDetails.email}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Message</Field.Label>
            <Textarea
              placeholder="What's up, Eli?"
              name="message"
              colorPalette="red"
              onChange={handleInputChange}
              value={formDetails.message}
            />
          </Field.Root>
          <Button
            alignSelf="start"
            size="xl"
            colorPalette="red"
            onClick={notifyEli}
          >
            Send message
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default ContactForm;
