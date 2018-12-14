<template>
  <div class="header">
    <div class="shade"></div>
    <div class="headertxt">
      <h1>We offer cleaning and hygienic services to individuals or companies, promoting a healthy living/work environment.</h1>
      <p>Our company uses Eco-friendly cleaning product but also respect our client's products preference. Our services are tailored to the client's needs.</p>
      <button>Contact us!</button>
      <div class="down"><div class="arrowdown"></div></div>
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
  background: url('https://cdn.discordapp.com/attachments/365915252161904651/521380105407299584/neonbrand-263851-unsplash.jpg') no-repeat center center fixed;
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
  background: linear-gradient(90deg, #4169E1, rgba(0,0,0, 0));
  opacity: .6;
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
  color: #4169E1;
  height: 50px;
  margin: 20px;
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
  border-bottom: 8px solid #4169E1;
  border-right: 8px solid #4169E1;
  transform: rotate(45deg);
  margin: 0 auto;
  margin-top: 13px;
}
@media only screen and (max-width: 1200px) {
  .headertxt h1 {
    font-size: 40px;
    padding: 20px;
    text-align: center;
    line-height: 45px;
    margin-bottom: 10px;
  }
  .headertxt p {
    font-size: 25px;
    padding: 20px;
    line-height: 25px;
  }
  button {

  }
  .header {
    text-align: center;
    padding-top: 100px;
  }
}
</style>
