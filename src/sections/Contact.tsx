import React, { useState } from 'react';
import { Text } from '@chakra-ui/react';
import ContactForm from '@/components/ContactForm';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';

interface ContactProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  const [formSubmitted, toggleFormSubmitted] = useState(false);

  return (
    <Section sectionRef={sectionRef}>
      <SectionHeading>Contact Me</SectionHeading>

      {formSubmitted ? (
        <Text>
          Thanks for reaching out! I'll email you back as soon as I can. Unless
          you're a bot and/or spam. In which case I probably won't.
        </Text>
      ) : (
        <ContactForm setSent={toggleFormSubmitted} />
      )}
    </Section>
  );
};

export default Contact;
