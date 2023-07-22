<template>
  <div id="main-container">
    <div id="checkoutForm" class="formContainer">
      <div class="card">
        <label for="user-name">Name</label>
        <input type="text" id="user-name" v-model="name" />
      </div>
      <div class="card">
        <label for="user-email">Email</label>
        <input type="text" id="user-email" v-model="email" />
      </div>
      <div class="card">
        <label for="address">Address</label>
        <input type="text" id="address" v-model="address" />
      </div>
      <div class="card">
        <label for="city">City</label>
        <input type="text" id="city" v-model="city" />
      </div>
      <div class="card">
        <label for="state">state</label>
        <input type="text" id="state" v-model="state" />
      </div>
      <div class="card">
        <label for="zip">Zip</label>
        <input type="text" id="zip" v-model="zip" />
      </div>
      <div class="card">
        <label for="card-holder-name">Holder Name</label>
        <input type="text" id="card-holder-name" v-model="holderName" />
      </div>
      <div class="card">
        <label for="card-details">Card Details</label>
        <div id="card-details" class="cardDetails"></div>
      </div>
      <div class="buttonContainer">
        <button id="btn-element" @click="submit">
          pay <span>{{ amount }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CheckOut",
  components: {},
  props:{
    amount:Number,
  },
  data() {
    return {
      strip: null,
      elements: null,
      name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      holderName: "",
    };
  },
  mounted() {
    console.log(
      "printing stripe privateKey",
      process.env.VUE_APP_STRIPE_PRIVATE_KEY
    );
    this.stripe = Stripe(
      "pk_test_51LOef6SB0gmbxFWSUW1ESbojhUZHpAbdyaN5RfUvmgnyxojfJAuNl16kTffmtPvF2stqG5L3LIy4QZp4Kqa817Cy00JYzLPFT2"
    );
    const style = {
      style: {
        base: {
          color: "black",
          fontFamily: "Helvetica",
          fontSmoothing: "antialiased",
          width: "1px",
          fontSize: "13px",
          "::placeholder": {
            color: "green",
            fontSize: "15px",
          },
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a",
        },
      },
    };
    this.elements = this.stripe.elements();
    const elements = this.elements.create("card", style);
    elements.mount("#card-details");
  },
  created() {
    console.log(
      "printing stripe privateKey",
      process.env.VUE_APP_STRIPE_PRIVATE_KEY
    );
  },
  methods: {
    async submit() {
      const billingDetails = {
        name: this.name,
        email: this.email,
        address: {
          city: this.city,
          line1: this.address,
          state: this.state,
          postal_code: this.zip,
        },
      };
      const cardElement = this.elements.getElement("card");
      let post = {
        amount: Math.round(this.amount.toFixed(2)),
      };
      console.log("amount",typeof(post.amount))
      try {
        let response = await axios.post(
          "http://localhost:3000/api/stripePayment/create-payment-intent",
          post
        );
        let secret = response.data;
        let client_secret = secret.clientSecret;
        const paymentRequest = await this.stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: billingDetails,
        });
        const confirmPayment = await this.stripe.confirmCardPayment(
          client_secret,
          {
            payment_method: paymentRequest.paymentMethod.id,
          }
        );
        if (confirmPayment) {
          this.$router.push({ path: "/success" });
          return;
        }
      } catch (err) {
        console.log(err);
      }
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
#checkoutForm {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7e7ef329;
  box-shadow: 0px 0px 10px 0px;
  border-radius: 30px;
  max-width: 40%;
  min-width: 40%;
  min-height: 70%;
  max-height: 70%;
}
.formContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* border: 1px solid; */
  width: 50%;
  height: 95%;
}
.card {
  display: flex;
  flex-direction: column;
  max-width: 50%;
  min-width: 82%;
  min-height: 8%;
  max-height: 15%;
  border: none;
  margin-bottom: 2%;
  border-radius: 7px;
  box-shadow: 0px 2px 6px 0px #000000;
}
.cardDetails {
  height: 30%;
  margin: 0%;
  background: whitesmoke;
  overflow: hidden;
}
#user-name {
  height: 45%;
  margin: 0%;
  background: whitesmoke;
  border-radius: 0px 0px 6px 6px;
  text-align:center;
  border: none;
}
#user-email {
  height: 45%;
  margin: 0%;
  background: whitesmoke;
  border-radius: 0px 0px 6px 6px;
  text-align:center;
  border: none;
}
#address {
  height: 45%;
  margin: 0%;
  background: whitesmoke;
  border-radius: 0px 0px 6px 6px;
  text-align:center;
  border: none;
}
#city {
  height: 45%;
  margin: 0%;
  background: whitesmoke;
  border-radius: 0px 0px 6px 6px;
  text-align:center;
  border: none;
}
#state {
  height: 45%;
  margin: 0%;
  background: whitesmoke;
  border-radius: 0px 0px 6px 6px;
  text-align:center;
  border: none;
}
#zip {
  height: 45%;
  margin: 0%;
  background: whitesmoke;
  border-radius: 0px 0px 6px 6px;
  text-align:center;
  border: none;
}
#card-holder-name {
  height: 45%;
  margin: 0%;
  background: whitesmoke;
  border-radius: 0px 0px 6px 6px;
  text-align:center;
  border: none;
}
#card-details {
  height: 45%;
  margin: 0%;
  background: whitesmoke;
  border-radius: 0px 0px 6px 6px;
  text-align:center;
  border: none;
}
.buttonContainer {
  width: 36%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 1%;
  background: blue;
}
#btn-element {
  font-size: 18px;
  font-family: helvetica;
  color: black;
  width: 100%;
  height: 100%;
  border-radius: 3px;
}

#btn-element:active {
  background: green;
}
</style>
