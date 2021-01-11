<template>
  <div class="contactContainer">
    {{ contact }}
    <a :href="`/ContactsPage/` + id"
      ><button>Переход на контактную информацию</button></a
    >
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    id: Number,
    contact: Object,
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
