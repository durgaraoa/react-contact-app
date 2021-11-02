import React from 'react';

const ContactCard = (props) => {
    const {id, name} = props.contact;
    return (
        <div>
            <span>{id}</span> - 
            <span>{name}</span>
            <span><button onClick={(e) => props.clickHandlder(id)}>Delete</button></span>
        </div>
    );
}

export default ContactCard;