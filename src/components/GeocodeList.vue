<template>
  <div>
    <el-row :gutter="3">
      <el-col :span="1">
        <el-button type="primary" icon="el-icon-location" @click="getGeolocate()" circle></el-button>
      </el-col>
      <el-col :span="6">
        <el-input placeholder="Please Input" v-model="cityName" clearable>{{ cityName }}</el-input>
      </el-col>
      <el-col :span="1">
        <el-button type="primary" @click="findCity(cityName)">get geocode</el-button>
      </el-col>
    </el-row>
    <div>{{ this.cityName }}</div>
    <div>{{ this.geocode }}</div>
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
      }
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
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            this.geocode.lat = pos.coords.latitude;
            this.geocode.lng = pos.coords.longitude;
          },
          (error) => {
            console.error('error', error.code);
          }
        );
      } else {
        alert('Sorry, this device can not use geolocation!');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

