<template>
  <div class="pageContainer">
    <div class="addContactContainer">
      <AddAContact @addContact="addContact"></AddAContact>
    </div>

    <div class="contactListContainer">
      <div class="labelBlock">
        <span>Список контактов</span>
        <button class="sortButton" @click="alphabetSort">
          Сортировать по алфавиту
        </button>
      </div>
      <ContactList
        v-bind:contacts="contacts"
        @deleteContact="deleteContact"
        @addContact="addContact"
      ></ContactList>
    </div>
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
    alphabetSort() {
      this.$emit("alphabetSort");
    },
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
<style lang="scss" scoped>
html,
body {
  margin: 0;
}
.labelBlock {
  display: flex;
  span {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
  }
}
.pageContainer {
  display: flex;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  background: #ffffff;
}
.contactListContainer {
  width: 100%;

  height: 500px;
  padding-left: 5px;

  font-weight: 500;
  font-size: 20px;
}
</style>
