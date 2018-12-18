<template>
  <div class="header">
    <div class="shade"></div>
    <div class="headertxt">
      <h1>We offer cleaning and hygienic services to individuals or companies, promoting a healthy living/work environment.</h1>
      <p>Our company uses Eco-friendly cleaning product but also respect our client's products preference. Our services are tailored to the client's needs.</p>
      <button>Contact us!</button>
      <div class="down">
        <div class="arrowdown"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  /* overflow: hidden; */
  background: url("https://cdn.discordapp.com/attachments/365915252161904651/521380105407299584/neonbrand-263851-unsplash.jpg")
    no-repeat center center fixed;
  background-size: cover;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  /* overflow: hidden; */
  /* justify-content: center; */
  display: flex;
  padding-top: 200px;
}
.shade {
  background: linear-gradient(90deg, #4169e1, rgba(0, 0, 0, 0));
  opacity: 0.6;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  position: absolute;
}
.headertxt {
  max-width: 1281px;
  margin: 0 auto;
  width: calc(100% - 100px);
  flex: 1;
  z-index: 99;
}
h1 {
  /* max-width: 1200px; */
  font-family: roboto;
  /* margin: 0; */
  font-size: 64px;
  color: white;
  padding: 0;
  line-height: 84px;
  position: relative;
  /* text-align: justify; */
  margin-bottom: 50px;
}
p {
  color: white;
  font-size: 24px;
  font-weight: normal;
  line-height: 30px;
  margin-bottom: 50px;
  max-width: 845px;
}
button {
  width: 270px;
  color: #4169e1;
  height: 50px;
  background: white;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 24px;
  border: none;
}
.down {
  height: 60px;
  width: 60px;
  background: white;
  border-radius: 50%;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}
.arrowdown {
  height: 20px;
  width: 20px;
  border-bottom: 8px solid #4169e1;
  border-right: 8px solid #4169e1;
  transform: rotate(45deg);
  margin: 0 auto;
  margin-top: 13px;
}
@media only screen and (max-width: 1500px) {
  .headertxt {
    padding: 20px;
  }
}
@media only screen and (max-width: 1080px) {
  .headertxt h1 {
    font-size: 60px;
    padding: 20px;
    /* text-align: center; */
    line-height: 62px;
    margin-bottom: 10px;
  }
  .headertxt p {
    font-size: 25px;
    padding: 20px;
    line-height: 25px;
  }
  button {
    margin: 20px;
    /* display: block;
    margin: 0 auto; */
  }
  .header {
    /* text-align: center; */
    padding-top: 100px;
  }
}
@media only screen and (max-width: 800px) {
  .headertxt  h1{
    line-height:54px;
    font-size: 50px;
  } 
}
@media only screen and (max-width: 630px) {
  .headertxt  h1{
    line-height:44px;
    font-size: 40px;
  } 
}
@media only screen and (max-width: 450px) {
  .headertxt h1 {
    font-size: 30px;
    padding: 15px;
    padding-bottom: 5px;
    /* text-align: center; */
    line-height: 33px;
    margin-bottom: 0px;
  }
  .header {
    padding-top: 70px;
  }
  .headertxt p {
    font-size: 20px;
    padding-left: 15px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0;
    line-height: 25px;
  }
  .down {
  bottom: 30px;
  display: none;

  }
}
@media only screen and (max-width: 450px) {


}
</style>
