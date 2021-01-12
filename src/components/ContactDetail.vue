<template>
  <div class="dick">
    <a href="/ContactsPage">Назад к контактам</a>
    {{ this.contacts[getIdOfCurrentContact()] }}

    <div @click="deleteContact()">Delete Contact</div>

    <input id="fieldToAdd" class="addField" type="text" />
    <div @click="addField()">Добавить поле</div>
  </div>
</template>

<script>
export default {
  name: "ContactDetail",
  props: {
    id: String,
    contacts: Array,
  },
  methods: {
    deleteContact() {
      console.log("This ID ", this.id);
      this.$emit("deleteContact", this.id);
    },
    addField() {
      // const textToAdd = document.getElementById("fieldToAdd").value;
      // this.$emit("addField");
    },
    getIdOfCurrentContact() {
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].id == this.id) {
          return [i];
        }
      }
      // console.log(this.contacts[0].id);
    },
  },
};
</script>

<style lang="scss">
.dick {
  width: 700px;
  height: 200px;
  border: solid 2px;
  border-radius: 5px;
}
</style>
