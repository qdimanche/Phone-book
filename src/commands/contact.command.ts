import { Contact } from '@/domains/contact.interface';
import contactQuery from "@/query/contact.query";


export default {
    createContact(contact:Contact): void {
        try {
            const contacts:Array<Contact> = contactQuery.getContacts();
            contacts.push(contact);
            localStorage.setItem('contact', JSON.stringify(contacts))
        }
        catch (e) {
            throw new TypeError(`An error happened during the save of the contact ${e}`)
        }
    },
    deleteContact(index:number): void {
        try {
            const contacts:Array<Contact> = contactQuery.getContacts();
            contacts.splice(index, 1);
            localStorage.setItem('contact', JSON.stringify(contacts))
        }

        catch (e) {
            throw new TypeError(`An error happened during the remove of the contact deletion ${e}`)
        }

    },
    updateContact(index:number, contact:Contact): void {
        try {
            const contacts:Array<Contact> = contactQuery.getContacts();
            contacts[index] = contact;
            localStorage.setItem('contact', JSON.stringify(contacts))
        }
        catch (e) {
            throw new TypeError(`An error happened during the update of the contact ${e}`)
        }
    },
    addFavoriteContact(index:number, contact:Contact){
        try {
            const favoriteContacts:Array<Contact> = contactQuery.getFavoriteContacts();
            favoriteContacts.push(contact);
            localStorage.setItem('contact', JSON.stringify(favoriteContacts))
        }
        catch  (e) {
            throw new TypeError(`An error happened during add to favorite the contact ${e}`)
        }

    }
}