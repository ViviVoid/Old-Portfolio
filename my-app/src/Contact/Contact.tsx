import React, { useState } from 'react';
import "./Contact.css";
import daoLogo from "../DaoLogo.png";
import 'bootstrap/dist/css/bootstrap.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row} from "react-bootstrap";


//Framework?

interface FormState {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);
            const errors = {name: '', email: '', message: ''};

            if (formState.name === '') {
                errors.name = 'Name is required';
            }

            if (formState.email === '' || !validateEmail(formState.email)) {
                errors.email = 'Valid email is required';
            }

            if (formState.message === '') {
                errors.message = 'Message is required';
            }

            setErrors(errors);

            if (!errors.name && !errors.email && !errors.message) {
                await fetch('/api/email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formState),
                });
                setFormState({name: '', email: '', message: ''});
            }
        } catch (error) {
            // handle error here
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id={"mainFlexBody"}>
            <div id={"contentPage"}>
                <h1>
                    Looking to connect?
                </h1>
                <div id={"connections"} className={"connections"}>
                    <div id={"email"} className={"connectionsPane"}>

                        <h4>
                            Fill the form below and I'll get in touch with you through email!
                        </h4>

                        <form
                            className="needs-validation" noValidate={true}
                            onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                />
                                {errors.name && <p className="text-sm text-red-400">{errors.name}</p>}
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                />
                                {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
                            </div>

                            <div className="form-group">
                            <textarea
                                className="form-control"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows={6}
                            />
                                {errors.message && (
                                    <p className="text-sm text-red-400">{errors.message}</p>
                                )}
                            </div>

                            <button
                                disabled={isSubmitting}
                                className="btn btn-primary"
                                type="submit"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>

                        <Form>
                            <Row>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last Name" />
                            </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" placeholder="Message" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>

                    <div id={"socialConnect"} className={"connectionsPane"}>
                        <h4>
                            Connect here through my socials!
                        </h4>
                        <div className={"socialEntryList"}>
                            <div className={"socialEntry"}>
                                <img className={"socialEntryImage"} src={daoLogo}  alt={"Linked In Logo"}/>
                                <p className={"socialEntryTitle"}>LinkedIn</p>
                            </div>
                            <div className={"socialEntry"}>
                                <img className={"socialEntryImage"} src={daoLogo}  alt={"Linked In Logo"}/>
                                <p className={"socialEntryTitle"}>Handshake</p>
                            </div>
                            <div className={"socialEntry"}>
                                <img className={"socialEntryImage"} src={daoLogo}  alt={"Linked In Logo"}/>
                                <p className={"socialEntryTitle"}>Github</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <App />
    );
}

export default Contact