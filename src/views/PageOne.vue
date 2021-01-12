<template>
  <div>
    <AddAContact @addContact="addContact"></AddAContact>
    <ContactList
      v-bind:contacts="contacts"
      @deleteContact="deleteContact"
      @addContact="addContact"
    ></ContactList>
  </div>
</template>

<script>
import AddAContact from "../components/AddAContact.vue";
import ContactList from "../components/ContactList.vue";
export default {
  name: "PageOne",
  components: { AddAContact, ContactList },
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteContact(id, name) {
      if (confirm(`Вы действительно хотите удалить контакт? ${name}`)) {
        this.$emit("deleteContact", id);
      }
    },
    addContact() {
      this.$emit(
        "addContact",
        document.getElementById("name").value.length,
        document.getElementById("phone").value.length
      );
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
