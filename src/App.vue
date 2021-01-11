<template>
  <div>
    <header>
      <div class="container">
        <p>Книга контактов</p>
      </div>
    </header>
    <router-view v-bind:contacts="contacts" />
  </div>
</template>
<script>
export default {
  name: "PageOne",
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "Michael Bay",
          email: "test@gmail.com",
          phone: "+79155515912",
        },
        {
          id: 2,
          name: "Test Testovich",
          email: "test@gmail.com",
          phone: "+79155511234",
        },
      ],
    };
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
