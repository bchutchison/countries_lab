import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
new Vue({
  el: "#app",
  data: {
    countriesArray: []
  },
  mounted() {
    console.log("I am mounted");
    this.fetchCountries();
    console.log(this.countriesArray);
  },
  computed: {
    totalPopulation: function() {
      return this.countriesArray.reduce((sum, country) => {
        return sum + country.population
      },0);
  },
},
  methods: {
    fetchCountries: function() {
      const request = fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(countries => this.countriesArray = countries)
    }
  }

});
});
