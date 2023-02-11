import { useState } from 'react';
import axios from 'axios';
import { Section, Heading, Form, Icon, Button } from 'react-bulma-components';

const Contact = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: [e.target.value] });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post('https://hooks.zapier.com/hooks/catch/13153405/3yqyl4w/', JSON.stringify(formData));
	};

	return (
		<Section>
			<Heading renderAs="h2" textFamily="secondary" textTransform="uppercase" textSize={1} textColor="primary">
				Contact me
			</Heading>

			<form onSubmit={onSubmit}>
				<Form.Field>
					<Form.Label htmlFor="name">Name</Form.Label>
					<Form.Input id="name" name="name" value={formData.name} onChange={onChange} />
				</Form.Field>

				<Form.Field>
					<Form.Label htmlFor="email">Email</Form.Label>
					<Form.Input id="email" type="email" name="email" value={formData.email} onChange={onChange} />
				</Form.Field>

				<Form.Field>
					<Form.Label htmlFor="message">Message</Form.Label>
					<Form.Textarea id="message" name="message" value={formData.message} onChange={onChange} />
				</Form.Field>

				<Button color="link" size="medium">
					Send message
				</Button>
			</form>
		</Section>
	);
};

export default Contact;
