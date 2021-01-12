<template>
  <div class="dick">
    <a href="/ContactsPage">Назад к контактам</a>
    <!-- {{ this.a }} -->
    <div class="params">
      <input
        type="text"
        v-for="field in fields"
        :key="field.fieldName"
        v-bind:value="field.fieldValue"
      />
    </div>
    <input id="fieldToAdd" class="addField" type="text" />
    <div @click="addField()">Добавить поле</div>
    <input id="fieldtoDelete" class="deleteField" type="text" />
    <div @click="deleteField()">Удалить поле</div>
  </div>
</template>

<script>
export default {
  name: "ContactDetail",
  props: {
    id: String,
    contacts: Array,
  },
  data() {
    return {
      contact: [],
      fields: [],
    };
  },
  watch: {
    contacts() {
      this.contact = this.contacts[this.getIdOfCurrentContact()];
      for (const propertyName in this.contact) {
        this.fields.push({
          fieldName: propertyName,
          fieldValue: this.contact[propertyName],
        });
      }
    },
  },
  methods: {
    addField() {
      const add = document
        .getElementById("fieldToAdd")
        .value.replace(/ /g, "")
        .split(":");
      if (add.length !== 2) {
        alert("Поле заполнено неверно!");
      } else if (add[0] === "id") {
        alert("Данное поле зарезервировано");
      } else if (
        Object.prototype.hasOwnProperty.call(
          this.contacts[this.getIdOfCurrentContact()],
          add
        )
      ) {
        alert("Данное поле уже присутствует у данного контакта!");
      } else {
        this.$emit("addField", this.getIdOfCurrentContact(), add[0], add[1]);
      }
    },
    deleteField() {
      const add = document
        .getElementById("fieldtoDelete")
        .value.replace(/ /g, "");
      if (add.length === 0) {
        alert("Вы ввели пустое поле");
      } else if (add === "id") {
        alert("Данное поле зарезервировано и его нельзя удалить");
      } else if (add === "id") {
        alert("Поле Имя нельзя удалить");
      } else {
        if (
          Object.prototype.hasOwnProperty.call(
            this.contacts[this.getIdOfCurrentContact()],
            add
          )
        ) {
          this.$emit("deleteField", this.getIdOfCurrentContact(), add);
        } else {
          console.log("it doesnt exist");
        }
      }
      console.log(add);
      // this.$emit("deleteField", this.getIdOfCurrentContact(), add);
    },
    getIdOfCurrentContact() {
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].id == this.id) {
          return [i];
        }
      }
    },
  },
};
</script>

<style lang="scss">
.params {
  display: flex;
  flex-direction: column;
}
.dick {
  width: 700px;
  height: 200px;
  border: solid 2px;
  border-radius: 5px;
}
</style>
