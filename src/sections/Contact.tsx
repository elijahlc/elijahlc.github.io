import React from 'react';
import ContactForm from '@/components/ContactForm';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';

interface ContactProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  return (
    <Section sectionRef={sectionRef}>
      <SectionHeading>Contact Me</SectionHeading>
      <ContactForm />
    </Section>
  );
};

export default Contact;
