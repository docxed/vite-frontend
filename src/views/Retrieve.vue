<template>
  <div>
    <h2>Retrieve</h2>
    <hr />
    <br /><br />
    <div>
      <h3>{{ JSON.stringify(covidData, null, 4) }}</h3>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Retrieve",
  data() {
    return {
      covidData: "",
    };
  },
  methods: {
    getData() {
      axios
        .get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
        .then((response) => {
          const data = response.data;
          this.covidData = data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped></style>
