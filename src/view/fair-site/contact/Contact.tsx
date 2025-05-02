import './contact.scss';
import Input from '../../../components/shared/input/Input';
import { useState } from 'react';
import TextArea from '../../../components/shared/textarea/Textarea';
import Button from '../../../components/shared/button/Button';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = () => {};

    return (
        <div className="contact">
            <h1>Lass uns Dein Projekt besprechen</h1>
            <div className="contact__grid">
                <Input
                    placeholder="Vorname"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <Input
                    placeholder="Nachname"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
                <Input
                    placeholder="E-Mail"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <TextArea
                placeholder="Deine Nachricht"
                value={message}
                minHeight={120}
                onChange={(event) => setMessage(event.target.value)}
            />
            <div className="contact__button">
                <Button onClick={handleSend}>Senden</Button>
            </div>
        </div>
    );
};

Contact.displayName = 'Contact';

export default Contact;
