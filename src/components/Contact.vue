<template>
  <div class="contactContainer">
    {{ contact }}
    <a :href="`/ContactsPage/` + id"
      ><button>Переход на контактную информацию</button></a
    >
    <div class="deleteButton" @click="deleteContact()">Удалить</div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    id: Number,
    contact: Object,
  },
  methods: {
    deleteContact() {
      const name = this.contact.name;
      this.$emit("deleteContact", this.id, name);
    },
  },
};
</script>

<style lang="scss">
.contactContainer {
  width: 700px;
  height: 200px;
  border: solid 2px;
  border-radius: 5px;
}
</style>
