<template>
  <div class="dick">
    {{ contacts[a] }}
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      a: 0,
    };
  },
  props: {
    id: String,
    contacts: Array,
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
