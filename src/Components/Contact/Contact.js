import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Section, Heading, Container, Content, Form, Button } from 'react-bulma-components';

const Contact = () => {
	const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
	const [submitted, setSubmitted] = useState(false);

	const form = useRef();

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: [e.target.value] });
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		await emailjs.sendForm('service_7jrjsub', 'template_19oz1uk', form.current, 'XmSLo5VWW3S45GhgA');
		setFormData({ from_name: '', from_email: '', message: '' });
		setSubmitted(true);
	};

	return (
		<Section id="contact">
			<Heading renderAs="h2" textFamily="secondary" textTransform="uppercase" textSize={1} textColor="primary">
				Contact me
			</Heading>

			{submitted ? (
				<Container>
					<Heading textFamily="secondary" textTransform="uppercase" textSize={4} textColor="link" renderAs="p">
						Thanks for reaching out!
					</Heading>
					<Content renderAs="p" textSize={5}>
						I'll email you back as soon as I can. Unless you're a bot and/or spam. In which case I probably won't.
					</Content>
				</Container>
			) : (
				<form onSubmit={onSubmit} ref={form}>
					<Form.Field>
						<Form.Label htmlFor="from_name">Name</Form.Label>
						<Form.Input id="from_name" name="from_name" value={formData.name} onChange={onChange} />
					</Form.Field>

					<Form.Field>
						<Form.Label htmlFor="from_email">Email</Form.Label>
						<Form.Input id="from_email" type="email" name="from_email" value={formData.email} onChange={onChange} />
					</Form.Field>

					<Form.Field>
						<Form.Label htmlFor="message">Message</Form.Label>
						<Form.Textarea id="message" name="message" value={formData.message} onChange={onChange} />
					</Form.Field>

					<Button color="link" size="medium">
						Send message
					</Button>
				</form>
			)}
		</Section>
	);
};

export default Contact;
