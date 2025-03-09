import React, { useState } from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';
import ContactForm from '@/components/ContactForm';

interface ContactProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  const [formSubmitted, toggleFormSubmitted] = useState(false);

  return (
    <Stack ref={sectionRef} as="section" paddingX={6} gap={6} fontSize="lg">
      <Heading as="h2" size="5xl" textTransform="uppercase" color="yellow.600">
        Contact Me
      </Heading>

      {formSubmitted ? (
        <Text>
          Thanks for reaching out! I'll email you back as soon as I can. Unless
          you're a bot and/or spam. In which case I probably won't.
        </Text>
      ) : (
        <ContactForm setSent={toggleFormSubmitted} />
      )}
    </Stack>
  );
};

export default Contact;
