<template>
  <div id="main-container">
    <div class="menu-container">
      <div class="cafe-name-heading">
        <div class="text-container"><h2 class="cafe-name">Sample-Cafe</h2></div>
      </div>
      <div class="food-menu-container">
        <div class="menu-content" v-for="(cart ,index) in cart" :key="index">
          <div class="menu-text-and-img">
            <div class="menu-img">
              <img :src="cart.file" alt="image"  style="width: 100%; height: 6vh" />
            </div>
            <div class="menu-text">
              <p class="menu-item-text">{{ cart.productName }}</p>
              <p class="menu-item-text">{{ cart.productPrice }} kg</p>
            </div>
          </div>
          <div class="quantity-container">
            <div class="quantity-figure">{{ cart.productQuantity }} <span style="fontSize:13px">pcs</span></div>
            <div class="quantity-price">Rs {{ cart.productQuantity*cart.productPrice }}</div>
          </div>
        </div>
      </div>
      <div class="order-Btn-Container">
        <button class="Back-Button" @click="backToMainMenu">Back</button>
        <button class="Order-Btn" @click="payNow">Pay</button>
        <div class="total-price">Rs {{ this.totalAmount }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlaceOrder",
  components: {},
  props:{
    cart:Array
  },
  emit: ["back"],
  data() {
    return {
      menuItem: "foodItem",
      menuItemPrice: 25,
      itemQuant: 2,
      itemPrice: 50,
      totalAmount: 0,
      back: true,
    };
  },
  created(){
    console.log("printing cart from props",this.cart);
    this.getTotalAmount();
  },
  methods: {
    payNow() {
      this.$router.push('/checkOut')
    },
    backToMainMenu() {
      this.orderPlace = false;
      this.$emit("back");
    },
    getTotalAmount(){
      for(let i=0;i<this.cart.length;i++)
      {
        this.totalAmount += this.cart[i].productQuantity * this.cart[i].productPrice;
      }
      console.log("print total amount",this.totalAmount);
      return this.totalAmount;
    }
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
  background-color: #cdc6fa;
}

.menu-container {
  border-radius: 13px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  max-width: 55%;
  min-width: 40%;
  min-height: 70%;
  max-height: 70%;
  box-shadow: 8px 17px 22px 0px;
  background: whitesmoke;
}
.cafe-name-heading {
  border: 1px solid black;
  min-width: 60%;
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
  font-size: 16px;
  font-family: popins;
  border-radius: 5px;
  color: white;
  background: #4f89ea;
  margin-left: 2%;
}
.food-menu-container {
  border-top: 1px solid;
  border-bottom: 1px solid;
  min-width: 97%;
  min-height: 42vh;
  margin: 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
}
.menu-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px;
  border-radius: 10px;
  background: #f5f0ff;
  box-shadow: 0px 2px 4px 1px #898989;
}
.menu-text-and-img {
  min-width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.menu-item-text {
  font-size: 14px;
  font-family: popins;
  color: black;
  margin: 1px;
}
.menu-img {
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  min-width: 62px;
  max-width: 62px;
  min-height: 55px;
  margin: 9px;
  box-shadow: 0px 1px 2px 0px;
  border-radius: 6px;
}
.menu-text {
  width: 100%;
  min-height: 55px;
  max-height: 55px;
  /* border: 1px solid;*/
  border-radius: 6px;
  margin: 3px;
  justify-content: space-evenly;
  align-items: flex-start;
  display: flex;
  box-shadow: 0px 1px 2px 0px;
  flex-direction: column;
}
.quantity-container {
  align-items: center;
  display: flex;
  justify-content: space-around;
  min-width: 20%;
  margin-right: 2%;
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
  margin-bottom: 9px;
}
.Order-Btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 3vh;
  font-size: 16px;
  font-family: popins;
  color: white;
  background: #4f89ea;
  border-radius: 5px;
  margin-left: 8%;
  cursor: pointer;
}
.Order-Btn:active{
  background-color:green;
}
.Back-Button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 3vh;
  font-size: 16px;
  font-family: popins;
  color: white;
  background: #ee380f;
  border-radius: 5px;
  margin-left: 8%;
  cursor: pointer;
}
.total-price {
  font-size: 16px;
  font-family: popins;
  min-width: 7%;
  margin-right: 8%;
}

@media (max-width: 1146px) {
  .menu-container {
    min-width: 50%;
    min-height: 70%;
  }
}
@media (max-width: 927px) {
  .menu-container {
    min-width: 70%;
    min-height: 70%;
  }
}
@media (max-width: 667px) {
  .menu-container {
    min-width: 90%;
    min-height: 70%;
  }
}
@media (max-width: 313px) {
  .cafe-name {
    font-size: 36px;
  }
}
</style>
