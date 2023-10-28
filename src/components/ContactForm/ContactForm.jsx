// import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';

import { addContacts } from 'api/api';

import { Button, FormStyled } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';

// const FormValidSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .matches(
//       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//       "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     )
//     .required('Required'),
//   number: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .matches(
//       /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
//       'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//     )
//     .required('Required'),
// });

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, phone }) => {
    const newContact = {
      id: nanoid(),
      name,
      phone,
    };
    const isDublicate = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDublicate) {
      alert('This name already exists. Please enter a different name.');
      return;
    }

    dispatch(addContacts(newContact));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      // validationSchema={FormValidSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <label htmlFor="phone">Number</label>
        <Field type="tel" name="phone" />
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};
