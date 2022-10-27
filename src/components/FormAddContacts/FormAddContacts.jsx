import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import 'yup-phone';
import { Form, Field, Button } from './FormAddContacts.styled';
import PropTypes from 'prop-types';
const initialValues = {
    name: '',
    phoneNumber: '',
};
export class FormAddContacts extends Component {
    validationSchema = Yup.object({
        name: Yup.string().required().max(40).trim(),
        phoneNumber: Yup.string().phone('UA', true).required(),
    });

    handleSubmit = (values, actions) => {
        setTimeout(() => actions.setSubmitting(false), 800);
        const { name, phoneNumber } = values;

        const newContact = {
            id: nanoid(),
            name: name,
            number: phoneNumber,
        };
        this.props.addContacts(newContact);
        actions.resetForm();
    };

    render() {
        return (
            <Formik
                initialValues={initialValues}
                validationSchema={this.validationSchema}
                onSubmit={this.handleSubmit}
            >
                {({ isSubmitting }) => {
                    return (
                        <Form>
                            <label>
                                <span>Name</span>
                                <Field name="name" placeholder="your name" />
                                <ErrorMessage name="name" component="div" />
                            </label>
                            <label>
                                <span>Phone Number</span>
                                <Field
                                    name="phoneNumber"
                                    placeholder="+38 0** *** ** **"
                                />
                                <ErrorMessage
                                    name="phoneNumber"
                                    component="div"
                                />
                            </label>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting
                                    ? 'adding to contacts...'
                                    : 'Add contact'}
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        );
    }
}
FormAddContacts.propTypes = {
    addContacts: PropTypes.func.isRequired,
};
