<template>
  <div class="welcomeContainer">
    <span>Книга контактов с использованием local storage</span>
    <img src="../assets/pika.png" />
    <span
      >При переходе на данную страницу в sessionStorage записывается базовый
      список контактов</span
    >
    <br />
    <br />
    <span
      >Если у вас что-то не запустилось или вылезла какая-то ошибка, будьте
      добры, напишите мне на почту: geroy1219@gmail.com</span
    >
    <a href="/ContactsPage">К заданию! </a>
  </div>
</template>

<script>
export default {
  mounted() {
    // Данная страница выполняет функции начальной настройки приложения
    // и записывает начальный список контактов в localStorage
    sessionStorage.setItem(
      "contacts",
      JSON.stringify([
        { id: 0, name: "Валентин Тарасов", phone: "+74950219729" },
        { id: 1, name: "Михаил Трифонов", phone: "+74955736241" },
        { id: 2, name: "Василий Карпов", phone: "+74953287248" },
        { id: 3, name: "Константин Власов", phone: "+74958698377" },
        { id: 4, name: "Георгий Костин", phone: "+74959927121" },
        { id: 5, name: "Карл Ковалёв", phone: "+74959432956" },
        { id: 6, name: "Харитон Сафонов", phone: "+74959432956" },
        { id: 7, name: "Макс Жириновский", phone: "+74955058831" },
        { id: 8, name: "Лев Логунов", phone: "+74952453660" },
        { id: 9, name: "Пётр Якушев", phone: "+74951481954" },
        { id: 10, name: "Дональт Беляков", phone: "+74958698377" },
        { id: 11, name: "Харитон Юдин", phone: "+74959927121" },
        { id: 12, name: "Влад Алексеев", phone: "+74959927121" },
        { id: 13, name: "Антон Николаев", phone: "+74959927121" },
      ])
    );
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  background: #32363e;
}
.welcomeContainer {
  width: 90%;
  height: 100%;
  display: flex;
  flex: 1 0 auto;
  padding-top: 20px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  justify-content: space-around;
  font-family: "Roboto", sans-serif;
  span {
    margin-left: auto;
    margin-right: auto;
    font-size: 28px;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
  }
  img {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 15px 20px;
    font-size: 45px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    transition: 0.4s ease-in-out;
  }
}
</style>
