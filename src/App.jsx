import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Layout } from './Layout/Layout.styled';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'api/api';

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Layout>
  );
};
