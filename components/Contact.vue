<template>
  <div class="row contactwrap">
    <h1>Contact us</h1>
    <hr>
    <p>Contact us for appointment or more information</p>
    <div class="col-9 center">
      <div class="contact">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Company Name">
        <input type="text" placeholder="E-mail">
        <textarea name id placeholder="message"></textarea>
        <button>
          <Sendicon></Sendicon>
        </button>
      </div>
      <div class="info">
        <ul>
          <li>
            <div class="icon">
              <img src="~assets/locationicon.svg" alt> 
            </div>
            <p>text</p>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/phoneicon.svg" alt>
            </div>
            <p>text</p>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/emailicon.svg" alt>
            </div>
            <p>text</p>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/facebookicon.svg" alt>
            </div>
            <p>text</p>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/instagramicon.svg" alt>
            </div>
            <p>text</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Sendicon from "@/components/Sendicon";
import emailjs from 'emailjs-com'
export default {
  components: {
    Sendicon
  }
};
</script>

<style scoped>
.contactwrap {
  text-align: center;
  padding-top: 200px;
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
  background: green;
}
.contact {
  height: 500px;
  flex: 1;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
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
