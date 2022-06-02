import { Contact } from '@/domains/contact.interface';


export default {
    getContacts(): Array<Contact>{
        const contacts = localStorage.getItem('contact') as string;
        const parsedContacts = JSON.parse(contacts);
        if(this.isContactListEmpty(parsedContacts)){
            return [];
        }
        return parsedContacts;
    },

    isContactListEmpty(contactList: Array<Contact>):boolean {
        if (contactList) {
            return false;
        }
        return true;

    },
    getFavoriteContacts(): Array<Contact> {
        const favoriteContacts = localStorage.getItem('favoriteContact') as string;
        const parsedFavoriteContacts = JSON.parse(favoriteContacts);
        if(this.isFavoriteContactListEmpty(parsedFavoriteContacts)){
            return [];
        }
        return parsedFavoriteContacts;
    },
    isFavoriteContactListEmpty(favoriteContacts: Array<Contact>):boolean {
        if (favoriteContacts) {
            return false;
        }
        return true;

    },
}