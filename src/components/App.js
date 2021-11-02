
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AddContact from './AddContact/AddContact';
import ContactList from './ContactList/ContactList';
import { useEffect, useState } from 'react';
import { v4 as uuid_v4 } from "uuid";

function App() {

  const [contacts, setContacts] = useState([]); 

  const addContactHandler = (contact) => {
    console.log(contact)
    console.log(uuid_v4());
    const v = {id: uuid_v4(), name: contact.name}
    setContacts([...contacts, v]);
  }

  const removeContact = (id) => {
    const newList = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newList);
  }

  useEffect(() => {
    const retivedData = JSON.parse(localStorage.getItem("contacts"));
    setContacts(retivedData);
  }, [])

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])


  return (
    <div>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContact}/>
      <Footer/>
    </div>
  );
}

export default App;
