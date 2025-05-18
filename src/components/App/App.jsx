import { useState, useEffect } from "react";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import contactsData from "../../contacts.json";
import { nanoid } from "nanoid";

const STORAGE_KEY = "saved-contacts";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const sevedStored = localStorage.getItem(STORAGE_KEY);
    if (sevedStored !== null) {
      return JSON.parse(sevedStored);
    }
    return contactsData;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    const contactWithId = { ...newContact, id: nanoid() };
    setContacts((prev) => [...prev, contactWithId]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}
