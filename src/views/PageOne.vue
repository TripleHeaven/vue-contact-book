<template>
  <div>
    <AddContact></AddContact>
    <ContactList v-bind:contacts="contacts"></ContactList>
  </div>
</template>

<script>
import AddContact from "../components/AddContact.vue";
import ContactList from "../components/ContactList.vue";
export default {
  name: "PageOne",
  components: { AddContact, ContactList },
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
}
</style>
