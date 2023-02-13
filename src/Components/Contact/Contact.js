import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Section, Heading, Container, Content, Form, Button } from 'react-bulma-components';

const Contact = () => {
	const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
	const [submitted, setSubmitted] = useState(false);
	const [valid, setValid] = useState({ from_name: null, from_email: null, message: null });

	const form = useRef();

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		if (
			!form.current.elements[0].validity.valid ||
			!form.current.elements[1].validity.valid ||
			!form.current.elements[2].validity.valid
		) {
			setValid({
				...valid,
				from_name: form.current.elements[0].validity.valid,
				from_email: form.current.elements[1].validity.valid,
				message: form.current.elements[2].validity.valid,
			});
		} else {
			await emailjs.sendForm('service_7jrjsub', 'template_19oz1uk', form.current, 'XmSLo5VWW3S45GhgA');
			setFormData({ from_name: '', from_email: '', message: '' });
			setSubmitted(true);
		}
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
				<form onSubmit={onSubmit} ref={form} noValidate>
					<Form.Field>
						<Form.Label htmlFor="from_name">Name</Form.Label>
						<Form.Input required id="from_name" name="from_name" value={formData.name} onChange={onChange} />
						{valid.from_name === false && <Form.Help color="link">I need to know who you are!</Form.Help>}
					</Form.Field>

					<Form.Field>
						<Form.Label htmlFor="from_email">Email</Form.Label>
						<Form.Input
							required
							id="from_email"
							type="email"
							name="from_email"
							value={formData.email}
							onChange={onChange}
						/>
						{valid.from_email === false && <Form.Help color="link">Please enter a valid email</Form.Help>}
					</Form.Field>

					<Form.Field>
						<Form.Label htmlFor="message">Message</Form.Label>
						<Form.Textarea required id="message" name="message" value={formData.message} onChange={onChange} />
						{valid.message === false && <Form.Help color="link">I need to know what you want!</Form.Help>}
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
