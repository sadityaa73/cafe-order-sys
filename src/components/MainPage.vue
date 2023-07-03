<template>
  <div id="main-container">
    <div class="menu-container">
      <div class="cafe-name-heading">
        <div class="text-container"><p class="text">Sample-Cafe</p></div>
      </div>
      <div class="tab-and-search">
        <div class="search-bar-container">
          <input type="search" placeholder="search" class="search-bar" />
          <span class="search-btn"
            ><img src="../assets/icons8-search-24.png" alt="search-icon"
          /></span>
        </div>
        <div class="food-categories-tab">
          <button class="tab-buttons">BreakFast</button>
          <button class="tab-buttons">snacks</button>
          <button class="tab-buttons">Lunch</button>
          <button class="tab-buttons">Brevrages</button>
          <button class="tab-buttons">Dips</button>
        </div>
      </div>
      <div class="food-menu-container"></div>
      <div class="order-Btn-Container">
        <button class="Order-Btn">Place Order</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
#main-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-container {
  border-radius: 13px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  max-width: 70%;
  min-width: 60%;
  min-height: 70%;
  max-height: 85%;
  box-shadow: 8px 17px 22px 0px;
  background: #f4f4f4;
}
.cafe-name-heading {
  border: 1px solid black;
  min-width: 97%;
  min-height: 8vh;
  margin: 8px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-container {
  width: 100%;
}
.text {
  font-size: 24px;
  font-family: sans-serif;
  color: lightgreen;
}
.tab-and-search {
  min-width: 97%;
  min-height: 9vh;
  margin: 8px;
  margin-top: 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.search-bar-container {
  border: 1px solid black;
  min-width: 50%;
  min-height: 3vh;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-content: center;
}
.search-bar {
  width: 90%;
}
.search-btn {
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
}
.food-categories-tab {
  width: 100%;
}
.tab-buttons {
  width: max-content;
  font-size: 21px;
  font-family: Quicksand;
  border-radius: 5px;
  color:lightgreen;
  background:white;
  margin-left: 2%;
}
.food-menu-container {
  border: 1px solid black;
  min-width: 97%;
  min-height: 42vh;
  margin: 8px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.order-Btn-Container {
  width: 97%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: max-content;
}
.Order-Btn {
  width: max-content;
  font-size: 21px;
  font-family: Quicksand;
  color:lightgreen;
  background:white;
  border-radius: 5px;
}
</style>
