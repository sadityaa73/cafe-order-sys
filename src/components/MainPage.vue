<template>
  <div id="main-container">
    <div class="menu-container">
      <div class="cafe-name-heading">
        <div class="text-container"><h2 class="cafe-name">Sample-Cafe</h2></div>
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
      <div class="food-menu-container">
        <div class="menu-content">
          <div class="menu-text-and-img">
            <div class="menu-img">
              <img src="" alt="image" />
            </div>
            <div class="menu-text">
              <p class="menu-item-text">{{ menuItem }}</p>
              <p class="menu-item-text">{{ menuItemPrice }} kg</p>
            </div>
          </div>
          <div class="quantity-container">
            <div class="btn-container">
              <button class="quantity-btn">+</button>
            </div>
            <div class="quantity-figure">{{ number }}</div>
            <div class="btn-container">
              <button class="quantity-btn">-</button>
            </div>
          </div>
        </div>
      </div>
      <div class="order-Btn-Container">
        <button class="Order-Btn" @click="placeOrder">Place Order</button>
        <div class="total-price">{{ totalPrice }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      number: 0,
      menuItem: "food item ",
      menuItemPrice: 25,
      totalPrice: 0,
    };
  },
  methods:{
    async placeOrder()
    {
      await this.$router.push({path:'/placeOrder'}); 
    }
  }
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
.cafe-name {
  font-size: 40px;
  font-family: popins;
  color: lightgreen;
  margin: 0px;
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
  text-align: center;
  font-size: 14px;
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
  font-size: 22px;
  font-family: popins;
  border-radius: 5px;
  color: lightgreen;
  background: #4f89ea;
  margin-left: 2%;
}
.food-menu-container {
  border: 1px solid black;
  min-width: 97%;
  min-height: 42vh;
  margin: 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.menu-content {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px;
  border-radius: 10px;
}
.menu-text-and-img {
  min-width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.menu-item-text {
  font-size: 16px;
  font-family: popins;
  color: black;
  margin: 1px;
}
.menu-img {
  border: 1px solid black;
  min-width: 62px;
  min-height: 55px;
  margin: 9px;
  border-radius: 6px;
}
.menu-text {
  width: 100%;
  border: 1px solid;
  margin: 3px;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
.quantity-container {
  align-items: center;
  display: flex;
  justify-content: space-around;
  min-width: 20%;
  margin-right: 2%;
}
.quantity-btn {
  border-radius: 6px;
  font-size: 15px;
  font-family: popins;
  justify-content: center;
  align-items: center;
  display: flex;
}
.quantity-figure {
  font-size: 19px;
  text-align: center;
  font-family: popins;
}
.order-Btn-Container {
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: max-content;
}
.Order-Btn {
  width: max-content;
  font-size: 24px;
  font-family: popins;
  color: lightgreen;
  background: #4f89ea;
  border-radius: 5px;
  margin-left: 8%;
}
.total-price {
  font-size: 25px;
  font-family: popins;
  min-width: 7%;
  margin-right: 8%;
}
</style>
