<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
          <ion-header collapse="condense">
            <ion-toolbar>
              <ion-title size="large">Tab 1</ion-title>
            </ion-toolbar>

          </ion-header>

          <ion-card>
                          <form @submit.prevent="createContact">
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
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/vue';
import { Contact } from '@/domains/contact.interface';
import contactCommand from "@/commands/contact.command";

export default  defineComponent({
  name: 'AddContact',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput },
  data(){
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
      } as Contact
    }
  },

  methods: {
    createContact() {
      const contact: Contact = this.formData;
      return contactCommand.createContact(contact);
    }
  }


});
</script>
