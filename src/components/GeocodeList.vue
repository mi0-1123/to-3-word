<template>
  <div>
    <el-row :gutter="3">
      <el-col :span="1">
        <el-button type="primary" icon="el-icon-location" circle></el-button>
      </el-col>
      <el-col :span="6">
        <el-input placeholder="Please Input" v-model="cityName" clearable>{{ cityName }}</el-input>
      </el-col>
      <el-col :span="1">
        <el-button type="primary" @click="findCity(cityName)">get geocode</el-button>
      </el-col>
    </el-row>
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
      this.lat = obj.results[0].geometry.location.lat;
      this.lng = obj.results[0].geometry.location.lng;
      console.log("lat" + this.lat, "lng" + this.lng);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

