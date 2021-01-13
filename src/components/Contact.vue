<template>
  <div class="contactContainer">
    <div class="basicInformation">
      <span class="cindex">{{ index + 1 }}</span>
      Имя: <span class="cname">{{ contact.name }}</span> Контактный
      телефон:<span class="cphone">{{ contact.phone }}</span>
    </div>
    <div class="contactMenu">
      <a :href="`/ContactsPage/` + id"><button>Подробная информация</button></a>
      <button class="deleteButton" @click="deleteContact()">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    id: Number,
    contact: Object,
    index: Number,
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
  display: flex;
  height: 40px;
  border: solid 1px;
  border-color: rgba($color: #000000, $alpha: 0.5);
  border-radius: 5px;
  margin-bottom: 2px;
  font-size: 16px;
  align-items: center;
  font-family: "Roboto";
  font-weight: 400;
  padding-left: 5px;
  padding-right: 5px;
}
button {
  display: inline-block;
  border: none;
  height: 100%;
  border-radius: 5px;
  margin: 3px;
  margin-top: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
}
button:hover,
button:focus {
  background: #0053ba;
}

button:active {
  transform: scale(0.99);
}
.deleteButton {
  background: red;
}
.basicInformation {
  display: flex;
  width: 60%;
  .cindex {
    width: 30px;
    color: #0069ed;
    font-weight: 500;
  }
  .cname {
    width: 30%;
    font-weight: 600;
    padding-left: 5px;
  }
  .cname::first-letter {
    color: rgb(255, 0, 0);
  }
  .cphone {
    width: 10%;
    font-weight: 600;
    padding-left: 5px;
  }
}
.contactMenu {
  margin-left: auto;
  height: 35px;
}
</style>
