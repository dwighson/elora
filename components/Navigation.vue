<template>
  <nav>
    <button v-on:click="togglemenu">
      <img src="~assets/hamburgericon.svg" alt>
    </button>
    <p class="logo">Elora Services LTD</p>

    <ul class="mobilehide">
      <li>Domestic cleaning</li>
      <li>End of tenancy cleaning</li>
      <li>Testimonials</li>
    </ul>
    <div v-bind:class="{'shade': menutoggle == true}" v-on:click="togglemenu"></div>
    <div v-bind:class="{'mobilenav': true, 'show': menutoggle == true}">
      <button v-on:click="togglemenu">
        <img src="~assets/hamburgericon.svg" alt>
      </button>
      <ul class="mobileshow">
        <li>Domestic cleaning</li>
        <li>End of tenancy cleaning</li>
        <li>Testimonials</li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      menutoggle: true
    };
  },
  methods: {
    togglemenu: function() {
      this.menutoggle = !this.menutoggle;
    }
  }
};
</script>

<style scoped>
nav {
  height: 80px;
  text-align: center;

  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  background: #ffffff;
}
button {
  visibility: hidden;
}
.logo {
  font-size: 36px;
  font-weight: bolder;
  font-family: Roboto;
  line-height: 80px;
  margin: 0px 20px 0px 50px;
}
p {
  display: block;
  /* width: 400px; */
  float: left;
}
button {
  float: left;
  height: 80px;
  width: 80px;
  background: none;
  border: none;
  outline: none;
}
ul {
  margin: 0;
  padding: 0;
  height: 100%;
  float: left;
}
.mobilehide li {
  list-style-type: none;
  display: block;
  line-height: 80px;
  text-align: center;
  float: left;
  font-weight: bold;
  width: 200px;
  height: 100%;
}
.mobileshow {
  margin-top: 100px;
}
.mobilenav {
  /* display: none; */
  visibility: hidden;
}
@media only screen and (max-width: 1200px) {
  .logo {
    margin: 0px 20px 0px 20px;
  }
  button {
    visibility: visible;
  }
  .mobilenav {
    visibility: visible;
    transform: translateX(-70vw);
    background: white;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 70vw;
    transition: all .3s ease-in-out;

  }
  .mobileshow{
    padding: 0;
    width: 100%;
    margin: 0;
  }
  .mobileshow li {
    display: block;
    height: 40px;
    padding: 5px;
    padding-left: 25px;
    box-sizing: border-box;
  }
  .mobilenav.show {
    /* display: block; */

    transform: translateX(0vw);
    transition: all .5s ease;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
  .shade {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    transition: all .5s ease;
  }
  .mobilehide {
    display: none;
  }
}
</style>
