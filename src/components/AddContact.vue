<template>
  <div class="addUserContainer">
    <form>
      <div class="formTbs">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" class="inputInfo" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" class="inputInfo" />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" class="inputInfo" />
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" class="inputInfo" />
      </div>
    </form>
    <div class="errorBlock">
      <div class="errorStatus">{errorText}</div>
    </div>
    <button class="buttonitselfonClick">
      Add user
    </button>
  </div>
</template>

<script>
export default {
  name: "AddContact",
};
</script>

<style lang="scss">
.addUserContainer {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  height: 300px;
  min-width: 150px;
  font-family: "Roboto";
  font-size: 16px;
  .radiobuttonsCont {
    background-color: white;
  }
  .invisible {
    display: none;
  }
  .errorRb {
    background-color: rgba(255, 0, 0, 0.4);
    border-radius: 10px;
  }
  .formTbs {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
    flex-direction: column;
  }
  input[type="text"] {
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 0;

    height: 25px;
    position: relative;
    left: 0;
    outline: none;
    border: 1px solid #cdcdcd;
    border-color: rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
  }
  .error {
    background-color: rgba(255, 0, 0, 0.4);
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
  .errorBlock {
    display: block;
    font-size: 12px;
    margin-top: 5px;
    margin-left: 10px;
    min-height: 20px;
    .visible {
      display: block;
      color: red;
    }
  }
  .statusChoose {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 2px;
    p {
      margin: 0;
    }

    input {
      width: 15px;
      height: 15px;
    }
    label {
      margin-left: 5px;
      margin-top: 1px;
    }
    .rbInputEl {
      display: flex;
    }
  }
}
</style>
