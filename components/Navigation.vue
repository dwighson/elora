<template>
  <nav>
    <button v-on:click="togglemenu">
      <img src="~assets/hamburgericon.svg" alt>
    </button>
    <p class="logo">Elora Services LTD</p>

    <ul class="mobilehide">
      <li>
        <a href="#about">about</a>
      </li>

      <li>
        <a href="#domesticCleaning">Domestic cleaning</a>
      </li>
      <li>
        <a href="#endOfTenancyCleaning">End of tenancy cleaning</a>
      </li>
      <li>
        <a href="#testimonials">Testimonials</a>
      </li>
      <li class="phonenumber">
        <!-- <div class="phonei"></div> -->
        <!-- <p>+31640504261</p> -->
        <a href="#contact"></a>
        <button>Contact</button>
      </li>
    </ul>
    <div v-bind:class="{'shade': menutoggle == true}" v-on:click="togglemenu"></div>
    <div v-bind:class="{'mobilenav': true, 'show': menutoggle == true}">
      <button v-on:click="togglemenu">
        <img src="~assets/hamburgericon.svg" alt>
      </button>
      <ul class="mobileshow">
        <li v-on:click="togglemenu">
          <a href="#about">about</a>
        </li>
        <li v-on:click="togglemenu">
          <a href="#domesticCleaning">Domestic cleaning</a>
        </li>
        <li v-on:click="togglemenu">
          <a href="#endOfTenancyCleaning">End of tenancy cleaning</a>
        </li>
        <li v-on:click="togglemenu">
          <a href="#testimonials">Testimonials</a>
        </li>
        
      </ul>
    </div>
  </nav>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      menutoggle: false
    };
  },
  mounted() {
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top
              },
              1000,
              function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  // Checking if the target was focused
                  return false;
                } else {
                  $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              }
            );
          }
        }
      });
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
  transition: all 0.5s ease;
  left: 0;
  background: #ffffff;
}
.phonei {
  height: 80px;
  width: 80px;
  background: url("~assets/Phoneicon.svg") no-repeat center center;
  /* background-size: contain; */
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
  /* min-width: 200px; */
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
}
li a {
  text-decoration: none;
}
.mobileshow {
  margin-top: 100px;
}
.mobilenav {
  /* display: none; */
  visibility: hidden;
}

.phonenumber {
  position: absolute;
  margin: 0;
  flex-direction: row;
  text-align: center;
  right: 20px;

  width: 400px;
}
.phonenumber .phonei {
  float: left;
  display: block;
}
.phonenumber button {
  float: left;
  visibility: visible;
  height: 50px;
  font-weight: bolder;
  font-size: 20px;
  width: 150px;
  background: #4169e1;
  margin: 15px;
  border-radius: 5px;
  color: white;
}
.phonenumber p {
  float: left;

  line-height: 80px;
  font-weight: 400;
}
@media only screen and (max-width: 1500px) {
  .logo {
    margin: 0px 20px 0px 20px;
  }

  button {
    visibility: visible;
  }
  .mobilenav {
    visibility: visible;
    transform: translateX(-80vw);
    background: white;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    text-align: left;
    width: 80vw;
    max-width: 400px;
    transition: all 0.3s ease-in-out;
  }
  .mobileshow {
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
    transition: all 0.5s ease;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
  .shade {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease;
  }
  .shade.show {
  }
  .mobilehide {
    display: none;
  }
}
@media only screen and (max-width: 450px) {
  .logo {
    font-size: 21px;
  }
}
</style>
