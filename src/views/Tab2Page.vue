<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Contact list</ion-card-subtitle>
          <ion-card-title>My contact list</ion-card-title>
        </ion-card-header>







        <ion-accordion-group>
          <div v-if="contacts.length > 0">
            <div v-for="(contact, index) in contacts" :key="index">
              <ion-accordion value="">

                <ion-item slot="header">
                  <ion-label>{{ contact.firstName }} {{ contact.name }}</ion-label>
                </ion-item>

                <ion-list slot="content">
                  <ion-item>
                    <ion-label>Company: {{ contact.company }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Phone number: {{ contact.phoneNumber }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Adress: {{ contact.address }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Email: {{ contact.email }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Note: {{ contact.note }}</ion-label>
                  </ion-item>
                  <ion-item>

                      <ion-button type="submit" expand="block" @click="deleteContact(index)">Delete </ion-button>

                  </ion-item>
                  <ion-item>

                      <ion-button type="submit" expand="block" @click="addFavoriteContact(index)">Add to favorite </ion-button>

                  </ion-item>
                  <ion-item>
                    <ion-button id="trigger-button">Update</ion-button>
                      <ion-modal trigger="trigger-button">
                        <ion-content>


                          <ion-card>
                            <form @submit.prevent="updateContact(index)">
                                <ion-input type="text" placeholder="name" name="name" v-model="formData.name"> </ion-input>
                                <ion-input type="text" placeholder="firstName" name="firstName" v-model="formData.firstName"> </ion-input>
                                <ion-input type="file" placeholder="photo" name="photo" v-model="formData.photo"> </ion-input>
                                <ion-input type="text" placeholder="company" name="company" v-model="formData.company"> </ion-input>
                                <ion-input type="tel" placeholder="phone" name="phone" v-model="formData.phone"> </ion-input>
                                <ion-input type="text" placeholder="address" name="address" v-model="formData.address"> </ion-input>
                                <ion-input type="email" placeholder="email" name="email" v-model="formData.email"> </ion-input>
                                <ion-input type="text" placeholder="note" name="note" v-model="formData.note"> </ion-input>
                                <ion-button type="submit" expand="block">Submit</ion-button>
                            </form>

                          </ion-card>
                      </ion-content>
                      </ion-modal>
                  </ion-item>
                </ion-list>
              </ion-accordion>
            </div>
          </div>
          <div v-if="contacts.length === 0">
            <p style="color: red;">You don't have any contacts</p>
          </div>





        </ion-accordion-group>











        <ion-card-content>
        </ion-card-content>
      </ion-card>


    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { IonModal, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/vue';
import { Contact } from '@/domains/contact.interface';
import contactCommand from '@/commands/contact.command';
import contactQuery from '@/query/contact.query';

export default defineComponent({
  name: 'Tab2Page',
  components: {IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput },
  data() {
    return {
      formData: {
        name: '',
        firstName: '',
        photo: '',
        company: '',
        phoneNumber: 0,
        address: '',
        email: '',
        note: ''
      } as Contact,
      contacts: [] as Array<Contact>
    }
  },
  mounted() {
    this.getContacts();
  },
  methods: {
    getContacts() {
      this.contacts = contactQuery.getContacts();
    },
    deleteContact(index:number) {
      return contactCommand.deleteContact(index);
    },
    updateContact(index:number) {
      const contact:Contact = this.formData;
      console.log(contact, index);
      return contactCommand.updateContact(index, contact);
    },
    addFavoriteContact(index:number, contact:Contact) {
      return contactCommand.addFavoriteContact(index,contact);
    }
  }
});
</script>
