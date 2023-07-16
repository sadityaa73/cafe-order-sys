<template>
  <div id="main-container">
    <div class="menu-container" v-if="!foodMenu">
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
          <button class="tab-buttons" @click="getAllTypes">All</button>
          <button class="tab-buttons" @click="getMenu('Breakfast')">
            BreakFast
          </button>
          <button class="tab-buttons" @click="getMenu('Snacks')">snacks</button>
          <button class="tab-buttons" @click="getMenu('Lunch')">Lunch</button>
          <button class="tab-buttons" @click="getMenu('Brevrage')">
            Brevrages
          </button>
          <button class="tab-buttons" @click="getMenu('Dips')">Dips</button>
        </div>
      </div>
      <div class="food-menu-container" v-if="allTypes">
        <div
          class="menu-content"
          v-for="(cafeMenu, index) in cafeMenu"
          :key="index"
        >
          <div class="menu-text-and-img">
            <div class="menu-img">
              <img
                :src="cafeMenu.file"
                alt="image"
                style="width: 100%; height: 6vh"
              />
            </div>
            <div class="menu-text">
              <p class="menu-item-text">{{ cafeMenu.productName }}</p>
              <p class="menu-item-text">Rs {{ cafeMenu.productPrice }}</p>
            </div>
          </div>
          <div class="quantity-container">
            <div class="btn-container">
              <button
                class="quantity-btn"
                @click="
                  increaseQuantity(
                    cafeMenu._id,
                    cafeMenu.productQuantity,
                    cafeMenu.productPrice
                  )
                "
              >
                +
              </button>
            </div>
            <div class="quantity-figure">{{ cafeMenu.productQuantity }}</div>
            <div class="btn-container">
              <button
                class="quantity-btn"
                @click="
                  decreaseQuantity(
                    cafeMenu._id,
                    cafeMenu.productQuantity,
                    cafeMenu.productPrice
                  )
                "
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="food-menu-container" v-if="selectedType">
        <div
          class="menu-content"
          v-for="(menuList, index) in menuList"
          :key="index"
        >
          <div class="menu-text-and-img">
            <div class="menu-img">
              <img
                :src="menuList.file"
                alt="image"
                style="width: 100%; height: 6vh"
              />
            </div>
            <div class="menu-text">
              <p class="menu-item-text">{{ menuList.productName }}</p>
              <p class="menu-item-text">Rs {{ menuList.productPrice }}</p>
            </div>
          </div>
          <div class="quantity-container">
            <div class="btn-container">
              <button
                class="quantity-btn"
                @click="
                  increaseQuantity(
                    cafeMenu._id,
                    cafeMenu.productQuantity,
                    cafeMenu.productPrice
                  )
                "
              >
                +
              </button>
            </div>
            <div class="quantity-figure">{{ menuList.productQuantity }}</div>
            <div class="btn-container">
              <button
                class="quantity-btn"
                @click="
                  decreaseQuantity(
                    cafeMenu._id,
                    cafeMenu.productQuantity,
                    cafeMenu.productPrice
                  )
                "
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="order-Btn-Container">
        <button class="Order-Btn" @click="placeOrder">Place Order</button>
        <div class="total-price">Rs {{ this.totalPrice }}</div>
      </div>
    </div>
    <PlaceOrder v-if="orderPlaced" @back="backToMain" />
  </div>
</template>
<script>
import axios from "axios";
import PlaceOrder from "./PlaceOrder.vue";
export default {
  components: { PlaceOrder },
  data() {
    return {
      orderPlaced: false,
      cafeMenu: [],
      selectedType: false,
      allTypes: true,
      menuList: [],
      foodMenu: false,
      totalPrice: 0,
    };
  },
  created() {
    this.getMenuList();
  },
  methods: {
    // main api for get list of all the items ;
    async getMenuList() {
      let response = await axios.get("http://localhost:3000/api/menu");
      this.cafeMenu = response.data;
    },
    getAllTypes() {
      this.allTypes = true;
      this.selectedType = false;
    },
    //function for filter the menu items upon the selected tabs ;
    getMenu(selected) {
      this.allTypes = false;
      this.selectedType = true;
      this.menuList = this.cafeMenu.filter(
        (element) => element.productType === selected
      );
    },
    async increaseQuantity(id, quantity, price) {
      let update = {
        _id: id,
        productQuantity: quantity + 1,
      };
      let response = await axios.patch(
        "http://localhost:3000/api/menu/update",
        update
      );
      await this.getMenuList();
    },
    async decreaseQuantity(id, quantity, price) {
      if (quantity != 0) {
        let update = {
          _id: id,
          productQuantity: quantity - 1,
        };
        let response = await axios.patch(
          "http://localhost:3000/api/menu/update",
          update
        );
        await this.getMenuList();
      }
    },
    placeOrder() {
      this.foodMenu = true;
      this.orderPlaced = true;
    },

    backToMain(n) {
      this.foodMenu = n;
      this.orderPlaced = false;
    },
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
  cursor:pointer;
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
  cursor:pointer;
}
.tab-buttons:hover{
  background-color: green;
  font-size:20px;
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
.quantity-btn {
  border-radius: 6px;
  font-size: 15px;
  font-family: popins;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor:pointer;
}
.quantity-btn:active{
  background-color: red;
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
  margin-bottom: 9px
}
.Order-Btn {
  width: max-content;
  font-size: 16px;
  font-family: popins;
  color: white;
  background: #4f89ea;
  border-radius: 5px;
  margin-left: 8%;
  cursor:pointer;
}
.Order-Btn:active{
  background-color:green;
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
