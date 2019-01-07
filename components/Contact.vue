<template>
  <div class="row contactwrap">
    <h1>Contact us</h1>
    <hr>
    <p>Contact us for an appointment or more information</p>
    <div class="col-9 center">
      <div class="contact">
        <input v-model="name" type="text" placeholder="Name">
        <input v-model="companyName" type="text" placeholder="Company Name">
        <input v-model="email" type="email" placeholder="E-mail">
        <textarea v-model="msg" name id placeholder="message"></textarea>
        <button v-on:click="sendForm">
          <Sendicon></Sendicon>
        </button>
      </div>
      <div class="info">
        <ul>
          <li>
            <div class="icon">
              <img src="~assets/locationicon.svg" alt>
            </div>
            <p>Anchor House New Road, Suite 3, DY2 9AF ENGLAND</p>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/phoneicon.svg" alt>
            </div>
            <p>currently not available.</p>
          </li>
          <!-- <li>
            <div class="icon">
              <img src="~assets/emailicon.svg" alt>
            </div>
            <p>text</p>
          </li>-->
          <li>
            <div class="icon">
              <img src="~assets/facebookicon.svg" alt>
            </div>
            <p>eloraserviceslimited</p>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/instagramicon.svg" alt>
            </div>
            <p>eloraserviceslimited</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Sendicon from "@/components/Sendicon";
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      name: "",
      companyName: "",
      email: "",
      msg: ""
    };
  },
  components: {
    Sendicon
  },
  methods: {
    sendForm: function() {
      var template_params = {
        reply_to: this.email,
        from_name: this.name + "(" + this.companyName + ")",
        to_name: "Patience",
        message_html: this.msg
      };

      var service_id = "default_service";
      var template_id = "template_ypR1fahP";
      if (
        !this.name == "" &&
        !this.companyName == "" &&
        !this.email == "" &&
        !this.msg == ""
      ) {
        if (this.email.indexOf("@") == true) {
          emailjs.send(service_id, template_id, template_params);
        } else {
          alert("make sure to fill in a correct email address.");
        }
      } else {
        alert("Make sure to fill out everything!");
      }
    }
  }
};
</script>

<style scoped>
.contactwrap {
  text-align: center;
  padding-top: 200px;
}
h1 {
  font-size: 50px;
}
hr {
  height: 8px;
  width: 200px;
  border: none;
  background: blue;
}
.contactwrap hr {
  margin: 0 auto;
  margin-bottom: 50px;
  width: 300px;
}
.icon {
  height: 50px;
  width: 50px;
  text-align: center;
}
.contactwrap .center {
  margin: 0 auto;
  display: flex;
  /* max-width: 500px; */

  float: none;
}
.info {
  text-align: left;
  flex: 1;
  height: 500px;
}
.contact {
  height: 500px;
  flex: 1;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
}
.center {
  padding-top: 50px;
}
button {
  border-radius: 50%;
  border: none;
  position: absolute;
  margin-top: -50px;
  background: none;
  outline: none;
  left: 50%;
  transform: translateX(-50%);
}
li {
  display: flex;
  /* background: purple; */
  margin-bottom: 20px;
}
input {
  height: 40px;
  width: 100%;
  padding: 5px;
  font-size: 20px;

  box-sizing: inherit;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  margin-bottom: 20px;
  border-bottom: 2px solid #4169e1;
  border-left: 2px solid #4169e1;
  border-right: 2px solid #4169e1;
}
textarea {
  font-size: 20px;
  padding: 5px;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #4169e1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 100%;
  min-height: 200px;
  border-left: 2px solid #4169e1;
  border-right: 2px solid #4169e1;
}
@media only screen and (max-width: 1200px) {
  .center {
    flex-direction: column;
  }
}
</style>
