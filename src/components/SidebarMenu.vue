<template>
  <div class="sidebar">
    <h1> Profile </h1>

    <div id="APItext">
      <h1> API </h1>
      <input type="text" id="list-input">
      <input type="submit" id="list-submit" v-on:click="addItem">
      <span id="error" style="color: red; display: none;">Please Enter Text</span>
    </div>

    <div id='sourceCheckBox'>
    <input type="checkbox" id="Google" value="Google Source" v-model="checkedNames">
    <label for="Google">Google Source</label>
    <br>
    <input type="checkbox" id="Facebook" value="Facebook Source" v-model="checkedNames">
    <label for="Facebook">Facebook Source</label>
    <br>
    <input type="checkbox" id="Internal" value="Internal Source" v-model="checkedNames">
    <label for="Internal">Internal Source</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <br>
  </div>

<div id='metrics'>
  <h1> Metrics </h1>
  <div class="btn-group" role="group" id="toolBtns">
    <button class="btn" type="button" @click="activeBtn = 'btn1'" :class="{active: activeBtn === 'btn1' }">Users</button>
<br>
    <button class="btn" type="button" @click="activeBtn = 'btn2'" :class="{active: activeBtn === 'btn2' }">Sign-Ups</button>
<br>
    <button class="btn" type="button" @click="activeBtn = 'btn3'" :class="{active: activeBtn === 'btn3' }">Ad Revenue</button>
<br>
    <button class="btn" type="button" @click="activeBtn = 'btn4'" :class="{active: activeBtn === 'btn4' }">Active Users</button>
<br>
    <button class="btn" type="button" @click="activeBtn = 'btn5'" :class="{active: activeBtn === 'btn5' }">Page Views</button>
  </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    checkedNames: [],
    activeBtn:''
}),
  methods: {
    addItem: function() {
      let item = document.getElementById("list-input").value;
      let error = document.getElementById("error");
      if (item == "") {
        error.style.display = "block";
      } else {
        alert(item);
        error.style.display = "none";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.btn {
  background-color: Transparent;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
  font-size: 20px;
  text-align: left;
  display: inline-block;
  box-shadow: none;
  padding-top: 5px;
  padding-right: 0px;
  padding-bottom: 5px;
  padding-left: 0px;
}
.btn.active{
  background-color: rgb(90, 200, 250);
}
#sidebar {
    text-align: left;
}

</style>
