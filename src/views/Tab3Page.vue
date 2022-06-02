<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      
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
                </ion-list>
              </ion-accordion>
            </div>
          </div>
          <div v-if="contacts.length === 0">
            <p style="color: red;">You don't have any contacts</p>
          </div>





        </ion-accordion-group>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import {Contact} from "@/domains/contact.interface";
import contactQuery from "@/query/contact.query";
import contactCommand from "@/commands/contact.command";

export default defineComponent({
  name: 'Tab3Page',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage},
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
    this.getFavoriteContacts();
  },
  methods: {
    getFavoriteContacts() {
      this.contacts = contactQuery.getFavoriteContacts();
    }
  }
});
</script>
