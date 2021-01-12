<template>
  <div class="dick">
    <a href="/ContactsPage">Назад к контактам</a>
    <!-- {{ this.a }} -->
    <div class="params">
      <div v-for="field in fields" :key="field.fieldName" class="oneParam">
        {{ field.fieldName }}
        <input
          type="text"
          v-bind:value="field.fieldValue"
          v-bind:id="field.fieldName"
          disabled
        />

        <button
          v-if="!field.isRedactMode"
          class="tgglredactButton"
          @click="openRedactMode(field)"
        >
          Редактировать
        </button>
        <!-- hidden buttons -->
        <button
          @click="confirmChange(field)"
          v-if="field.isRedactMode"
          class="completeRedact"
        >
          Подтвердить изменения
        </button>
        <button
          v-if="field.isRedactMode"
          @click="cancelChange(field)"
          class="cancelRedact"
        >
          Отменить изменения
        </button>
        <button @click="deleteField(field)" class="delField">
          Удалить поле
        </button>
      </div>
      <button class="cancelLastAction" @click="cancelLastChange()">
        Отменить последнее действие
      </button>
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
      lastChangedIndex: -1,
      lastAction: "none",
      changedField: {},
    };
  },
  watch: {
    contacts() {
      this.contact = this.contacts[this.getIdOfCurrentContact()];
      this.fields = [];
      let index = 0;
      for (const propertyName in this.contact) {
        this.fields.push({
          fieldName: propertyName,
          fieldValue: this.contact[propertyName],
          isRedactMode: false,
          fieldIndex: index,
        });
        index += 1;
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
        this.rememberLastAction(null, "add", add[0], add[1]);
        this.$emit("addField", this.getIdOfCurrentContact(), add[0], add[1]);
      }
    },
    deleteField(field) {
      if (field.fieldName === "id") {
        alert("Данное поле зарезервировано и его нельзя удалить");
      } else if (field.fieldName === "id") {
        alert("Поле Имя нельзя удалить");
      } else {
        this.rememberLastAction(
          field.fieldIndex,
          "delete",
          field.fieldName,
          field.fieldValue
        );
        this.$emit(
          "deleteField",
          this.getIdOfCurrentContact(),
          field.fieldName
        );
      }
      // this.$emit("deleteField", this.getIdOfCurrentContact(), add);
    },
    getIdOfCurrentContact() {
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].id == this.id) {
          return [i];
        }
      }
    },
    openRedactMode(field) {
      document.getElementById(field.fieldName).disabled = false;
      field.isRedactMode = true;
    },
    cancelChange(field) {
      document.getElementById(field.fieldName).disabled = true;
      field.isRedactMode = false;
    },
    rememberLastAction(
      fieldIndex,
      action,
      changedFieldName,
      changedFieldValue
    ) {
      this.lastChangedIndex = fieldIndex;
      this.lastAction = action;
      this.changedField.value = changedFieldValue;
      this.changedField.name = changedFieldName;
    },
    confirmChange(field) {
      if (console.log(document.getElementById(field.fieldName).value) !== "") {
        this.rememberLastAction(
          field.fieldIndex,
          "edit",
          field.fieldName,
          field.fieldValue
        );
        field.fieldValue = document.getElementById(field.fieldName).value;
        document.getElementById(field.fieldName).isRedactMode = false;

        this.$emit(
          "changeField",
          this.getIdOfCurrentContact(),
          field.fieldName,
          field.fieldValue
        );
      }
    },
    cancelLastChange() {
      // edit cancel
      if (this.lastAction === "edit") {
        this.$emit(
          "changeField",
          this.getIdOfCurrentContact(),
          this.changedField.name,
          this.changedField.value
        );
      }
      if (this.lastAction === "delete") {
        this.$emit(
          "addField",
          this.getIdOfCurrentContact(),
          this.changedField.name,
          this.changedField.value
        );
      }
      if (this.lastAction === "add") {
        this.$emit(
          "deleteField",
          this.getIdOfCurrentContact(),
          this.changedField.name
        );
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
