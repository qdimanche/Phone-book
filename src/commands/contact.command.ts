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
            const deletecontacts = contacts.splice(index, 1);
            console.log(contacts);
            localStorage.setItem('contact', JSON.stringify(contacts))
        }

        catch (e) {
            throw new TypeError(`An error happened during the remove of the contact deletion ${e}`)
        }

    }
}