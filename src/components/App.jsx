import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { SearchForm } from './SearchForm/SearchForm';
import { Section } from './Section/Section';

const STORAGE_KEY = 'contactList';

export function App() {
    const [contacts, setContacts] = useState(
        JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
    );
    const [filter, setFilter] = useState('');
    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    const addContacts = newContact => {
        contacts.find(
            contact =>
                contact.name.toLowerCase() === newContact.name.toLowerCase()
        )
            ? Notiflix.Notify.failure(
                  `${newContact.name} is already in contacts.`
              )
            : setContacts(prev => [newContact, ...prev]);
    };

    const removeContacts = id => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const onSearch = e => {
        setFilter(e.target.value);
    };

    const getvisiableTodos = () => {
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    const visiableTodos = getvisiableTodos();
    return (
        <div>
            <Section title="Phonebook">
                <FormAddContacts addContacts={addContacts} />
            </Section>
            <Section title="Contacts">
                <SearchForm onSearch={onSearch} />
                <ListContacts
                    visiableTodos={visiableTodos}
                    removeContacts={removeContacts}
                />
            </Section>
        </div>
    );
}
