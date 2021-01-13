<template>
  <div class="contactDetailWrapper">
    <div class="contactDetailConatainer">
      <div class="topButtonsContainer">
        <a href="/ContactsPage">
          <button class="backToButton">Назад к контактам</button></a
        >
        <button class="cancelLastAction" @click="cancelLastChange()">
          Отменить последнее действие
        </button>
      </div>
      <!-- {{ this.a }} -->

      <div v-for="field in fields" :key="field.fieldName">
        <div v-if="field.fieldName != `id`" class="paramsWrapper">
          <div class="parameters">
            <span v-if="field.fieldName !== `name`" class="parName">
              {{ field.fieldName }}
            </span>
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
            <button
              v-if="field.fieldName != `name`"
              @click="deleteField(field)"
              class="delField"
            >
              Удалить поле
            </button>
          </div>
        </div>
      </div>
      <div class="addingCont">
        <input id="fieldToAdd" class="addField" type="text" />
        <button @click="addField()">Добавить поле</button>
      </div>
    </div>
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
        document.getElementById(field.fieldName).disabled = true;
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
.contactDetailWrapper {
  width: 90%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border: solid 2px;
  border-radius: 5px;
  background: #fff;
  flex-direction: column;
}
.backToButton {
  background-color: rgb(21, 163, 0);
}
.contactDetailConatainer {
  padding: 30px;
}
.cancelLastAction {
  background: red;
}
.topButtonsContainer {
  display: flex;
  height: 30px;
  margin-bottom: 10px;
}
#name {
  font-size: 40px;
  color: black;
  font-weight: 600;
  border: 0;
}
.parameters {
  .parName {
    font-size: 24px;
  }

  padding: 2px;
  button {
    height: 100%;
    padding: 5px;
  }
  input {
    width: 250px;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.3);
    background: rgb(255, 191, 0);
    border-radius: 5px;
  }
  input:disabled {
    padding: 0;
    margin: 0;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.3);
    background: none;
    border-radius: 5px;
  }
}
.addingCont {
  height: 30px;
  button {
    background: #15a300;
  }
}
.delField {
  background: red;
}
</style>
