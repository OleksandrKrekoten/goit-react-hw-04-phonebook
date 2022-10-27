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
export function FormAddContacts({ addContacts }) {
    const validationSchema = Yup.object({
        name: Yup.string().required().max(40).trim(),
        phoneNumber: Yup.string().phone('UA', true).required(),
    });

    const handleSubmit = (values, actions) => {
        setTimeout(() => actions.setSubmitting(false), 500);
        const { name, phoneNumber } = values;
        const newContact = {
            id: nanoid(),
            name: name,
            number: phoneNumber,
        };

        addContacts(newContact);
        actions.resetForm();
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
                            <ErrorMessage name="phoneNumber" component="div" />
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

FormAddContacts.propTypes = {
    addContacts: PropTypes.func.isRequired,
};
