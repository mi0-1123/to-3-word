<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="1">
        <el-button type="primary" icon="el-icon-location" @click="getGeolocate()" circle></el-button>
      </el-col>
      <el-col :span="8">
        <el-input placeholder="Please Input" v-model="cityName" clearable>{{ cityName }}</el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="findCity(cityName)">get geocode</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="toWhat3Words()">to 3 words</el-button>
      </el-col>
    </el-row>
    <div v-for="(word, index) in wordList" :key="index">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card>{{ word.words }}</el-card>
        </el-col>
      </el-row>
    </div>
    <div>{{ this.cityName }}</div>
    <div>{{ this.geocode }}</div>
    <div>{{ this.words }}</div>
  </div>
</template>

<script>
export default {
  name: "GeocodeList",
  data() {
    return {
      cityName: "Tokyo",
      geocode: {
        lat: "",
        lng: ""
      },
      words: "",
      wordList: []
    };
  },
  methods: {
    findCity(name) {
      const url =
        "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAu1nW4qGBxKLXJ4bRzUnGzzPT8MdfWV5w";

      fetch(url + "&address=" + name, {
        method: "GET",
        mode: "cors"
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error!");
          }
        })
        .then(res => {
          // console.log(res);
          this.getGeocode(res);
        })
        .catch(error => {
          console.error("error:" + error);
        });
    },
    getGeocode(obj) {
      this.geocode.lat = obj.results[0].geometry.location.lat;
      this.geocode.lng = obj.results[0].geometry.location.lng;
      console.log("lat" + this.geocode.lat, "lng" + this.geocode.lng);
    },
    getGeolocate() {
      console.log("click!");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          pos => {
            this.geocode.lat = pos.coords.latitude;
            this.geocode.lng = pos.coords.longitude;
          },
          error => {
            console.error("error", error.code);
          }
        );
        this.cityName = "";
      } else {
        alert("Sorry, this device can not use geolocation!");
      }
    },

    toWhat3Words() {
      const url = "https://api.what3words.com/v2/reverse?key=C4MXMQAX";
      fetch(url + "&coords=" + this.geocode.lat + "," + this.geocode.lng, {
        method: "GET",
        mode: "cors"
      })
        .then(response => {
          return response.json();
        })
        .then(res => {
          console.log(res.words);
          this.words = res.words;
          this.addList(res);
        })
        .catch(error => {
          console.error(error);
        });
    },
    addList(obj) {
      this.wordList.push({
        words: obj.words,
        geocode: obj.geometry,
        name: this.cityName,
        map: obj.map
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
</style>

