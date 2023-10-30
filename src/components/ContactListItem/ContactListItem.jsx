import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContacts, fetchContacts } from 'api/api';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  console.log(contacts)

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
