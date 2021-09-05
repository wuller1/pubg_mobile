<template>
  <h1>success</h1>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    async executePayment() {
      const token = localStorage.getItem("token");
      const userID = localStorage.getItem("userId");
      const payerID = this.$route.query.PayerID;
      const payID = this.$route.query.paymentId;
      if (payID && payerID) {
        var axios = require("axios");
        var data = JSON.stringify({
          payerID,
          payID,
          userID,
        });

        var config = {
          method: "post",
          url: "http://localhost:5000/api/v1/auth/execute",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data,
        };

        let d = await axios(config);
        d = d.data.data;
        console.log(d);
      }
    },

    redirect() {},
  },
  created() {
    this.executePayment();
  },
};
</script>
<style scoped></style>
