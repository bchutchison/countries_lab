import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
new Vue({
  el: "#app",
  data: {
    countriesArray: [],
    countryObject: {}
  },
  mounted() {
    console.log("I am mounted");
    this.fetchCountries();
  },
  computed: {
    totalPopulation: function() {
      return this.countriesArray.reduce((sum, country) => {
        return sum + country.population
      },0);
  },
     countryNamesArray: function() {
       return this.countriesArray.map(function(country){
         return country.name});
     }
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
