<template>
  <div>
    <header>
      <div class="container">
        <p>Книга контактов</p>
      </div>
    </header>
    <router-view @deleteContact="deleteContact" v-bind:contacts="contacts" />
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
      console.log(id);
      this.contacts = this.contacts.filter((c) => c.id !== 1);
    },
  },
  watch: {
    contacts: function(b) {
      console.log(b);
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
