import React from 'react';
import ContactCard from '../ContactCard/ContactCard';

const ContactList = (props) => {
    if(props.contacts){

        const deleteContactHandler = (id) => {
            props.getContactId(id);
        }

        const renderList  = props.contacts.map(item => {
            
                return (
                    <ContactCard contact={item} clickHandlder={deleteContactHandler} key={item.id}></ContactCard>
                );
            
        });
        return (
            <div>
                <div>Contact List</div>
                <div>{renderList}</div>
            </div>
        );
    }
}

export default ContactList;