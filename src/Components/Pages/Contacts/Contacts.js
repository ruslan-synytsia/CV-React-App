import React from 'react';
import style from './Contacts.module.css';
import Form from "../../Common/Form/Form";

function Contacts() {
    const contacts = {
        viber: '+380992612850',
        mail: 'synytsiaruslan@gmail.com',
        phone: '+48574502923',
        linkedIn: 'https://www.linkedin.com/in/ruslan-synytsia/',
        github: 'https://github.com/ruslan-synytsia'
    };
    return (
        <section className={style.Contacts}>
            <div className={style.Contacts_sidebar}>
                <div className={style.Contacts_sidebar_item}>
                    <h3>Write to me</h3>
                    {contacts.viber && <><div className={style.Contacts_sidebar_item_el}>
                        <span>My viber number</span>
                        <a href={`viber://add?number=${contacts.viber}`}>{contacts.viber}</a>
                    </div>
                        <span>or</span></>}
                    <div className={style.Contacts_sidebar_item_el}>
                        <span>My email</span>
                        <a href={`mailto:${contacts.mail}`}>{contacts.mail}</a>
                    </div>
                </div>
                <div className={style.Contacts_sidebar_item}>
                    <h3>Call to me</h3>
                    <div className={style.Contacts_sidebar_item_el}>
                        <span>My phone number</span>
                        <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
                    </div>
                </div>
                {contacts.linkedIn && <div className={style.Contacts_sidebar_item}>
                    <h3>Visit me</h3>
                    <div className={style.Contacts_sidebar_item_el}>
                        <span>LinkedIn</span>
                        <a href={contacts.linkedIn} target={'_blank'}>{contacts.linkedIn}</a>
                    </div>
                </div>}
                {contacts.github && <div className={style.Contacts_sidebar_item}>
                    <h3>See my code</h3>
                    <div className={style.Contacts_sidebar_item_el}>
                        <span>GitHub</span>
                        <a href={contacts.github} target={'_blank'}>{contacts.github}</a>
                    </div>
                </div>}
            </div>
            <div className={style.Contacts_Form}>
                <Form />
            </div>
        </section>
    )
};

export default Contacts;