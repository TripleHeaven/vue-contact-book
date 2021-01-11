<template>
  <div class="contactListContainer">
    <Contact
      v-for="contact in contacts"
      v-bind:contact="contact"
      v-bind:id="contact.id"
      :key="contact.id"
    />
  </div>
</template>

<script>
import Contact from "./Contact";
export default {
  name: "ContactList",
  components: { Contact },
  props: {
    contacts: Array,
  },
};
</script>

<style lang="scss"></style>
