<template>
  <div>
    <header>
      <div class="container">
        <p>Книга контактов</p>
      </div>
    </header>
    <router-view
      @addField="addField"
      @deleteContact="deleteContact"
      @deleteField="deleteField"
      @changeField="changeField"
      v-bind:contacts="contacts"
    />
  </div>
</template>
<script>
export default {
  name: "Main",
  data() {
    return {
      contacts: [],
    };
  },
  mounted() {
    console.log("IM MOUNTED", Date.now());
    this.contacts = JSON.parse(localStorage.contacts);
  },
  methods: {
    deleteContact(id) {
      console.log("Returned id: ", id);
      this.contacts = this.contacts.filter((contact) => {
        return contact.id !== Number(id);
      });
    },
    addField(index, fieldToAdd, valueOfNewField) {
      this.contacts[index[0]][fieldToAdd] = valueOfNewField;
      this.contacts = this.contacts.slice(0, this.contacts.length);
    },
    deleteField(index, fieldToDelete) {
      console.log(index, fieldToDelete);
      delete this.contacts[index[0]][fieldToDelete];
      this.contacts = this.contacts.slice(0, this.contacts.length);
    },
    changeField(index, changedField, newValue) {
      this.contacts[index][changedField] = newValue;
      this.contacts = this.contacts.slice(0, this.contacts.length);
    },
  },
  watch: {
    contacts: function(b) {
      localStorage["contacts"] = JSON.stringify(b);
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
header {
  width: 100%;
  background: #282c34;
}
body {
  background: #282c34;
}
.container {
  width: 90%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background: #32363e;
  color: #61dafb;
  font-size: 5em;
  font-family: "Roboto", sans-serif;
  p {
    margin: 0;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
  }
}
</style>
