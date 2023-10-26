import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContacts, fetchContacts } from 'api/api';

export const ContactListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    useEffect(() => {
    dispatch(fetchContacts())
    }, [dispatch])

  return (
    <>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button onClick={() => dispatch(deleteContacts(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
