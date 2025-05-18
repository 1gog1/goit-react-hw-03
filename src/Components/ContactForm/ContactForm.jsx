import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('This field is required'),
  number: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('This field is required'),
});




export default function ContactForm({ onAdd }) {
    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                onAdd(values);
                actions.resetForm();
            }}
        >
            <Form className={css.Form}>
                <label className={css.label}>
                    Name
                    <Field name="name" className={css.input}/>
                        <ErrorMessage name="name" component="div" className={css.error} />
                </label>
                
                 <label className={css.label}>
          Number
          <Field name="number" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>
                
              
                <button type="submit" className={css.button}>Add Contact</button>
            </Form>
        </Formik>
    );
}

