<template>
  <div class="contactListContainer">
    <Contact
      v-for="contact in contacts"
      v-bind:contact="contact"
      v-bind:id="contact.id"
      @deleteContact="deleteContact"
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
  methods: {
    deleteContact(id) {
      this.$emit("deleteContact", id);
    },
  },
};
</script>

<style lang="scss"></style>
