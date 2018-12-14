<template>
  <div>
    <div class="container">
      <div class="row domesticwrap">
        <div class="col-8 containertxt">
          <h1>DOMESTIC CLEANING</h1>
          <hr>
          <p>We pride ourselves as an eco-friendly company and all our cleaners are employed by us and therefore protected by employment rights.</p>
          <p>We will have your home cleaned daily/weekly/fortnightly/monthly by our cleaning team to our clients, whatever your budget or expectations we will be able to cater and tailor our services to your needs.</p>
          <p>All our operatives are trained to our very high standards along with having excellent references and up to date DBS Checks.</p>

          <button>Read more</button>
        </div>
        <div class="col-3 containerimg">
          <Cleaningimg></Cleaningimg>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="testimonials">
        <h1>TESTIMONIALS</h1>
        <p>Reviews and ratings for our work</p>
        <Slider></Slider>
      </div>
    </div>
    <div class="container">
      <div class="row tenancy">
        <div class="col-8 tenancywrap">
          <h1>END OF TENANCY CLEANING</h1>
          <hr>
          <p>We offer a through End of tenancy service to Landlords and Letting agents, our price structure makes our service transparent whilst we always strive to provide Top Quality.</p>
          <p>Our end of tenancy cleans are fully comprehensive and can often be completed within 48 hours of engagement, we offer a free key collection/delivery service within 5 miles of the property.</p>
          <p>We cover the entire midlands and surrounding areas so please feel free to get in touch and we will be able to confirm availability with you.</p>
        </div>
        <div class="col-3 blocks">
          <Popupblocks></Popupblocks>
        </div>
      </div>
      <div class="row contactwrap">
        <h1>Contact us</h1>
        <hr>
        <p>Contact us for appointment or more information</p>
        <div class="col-4">
        <Contact></Contact>

        </div>
        <div class="col-4">
        <div class="info"></div>
      </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import Bottomshape from "@/components/Bottomshape";
import Contact from "@/components/Contact";
import Popupblocks from "@/components/Popupblocks";
import Cleaningimg from "@/components/Cleaningimg";
import Slider from "@/components/Slider";

export default {
  components: {
    Cleaningimg,
    Bottomshape,
    Contact,
    Slider,
    Popupblocks
  }
};
</script>
<style scoped>
Cleaningimg {
  margin-top: 50px;
}
.wrapper {
  max-width: 100%;
  background: url("~assets/wave.svg") no-repeat center top;
  /* background: green; */
  height: 100%;
  padding-top: 400px;
  /* margin: -100px 0px 0px 0px; */
  transform: translateY(-200px);
  background-size: cover;
  /* overflow: hidden; */
}
.info {
  width: 100%;
  height: 300px;
}
.domesticwrap{
  padding-top: 100px;
  min-height: 700px;
}
.tenancy {
  padding-top: 100px;
}
.contactwrap {
  text-align: center;
}
.contactwrap .col-4{
  display: inline-block;
  float: none;
}
.testimonials {
  width: 100%;
  height: 550px;
  text-align: center;
  position: relative;
  color: white;
  /* margin-top: 400px; */
}
.testimonials h1,
.testimonials p {
  color: white;
  text-align: center;
}

hr {
  width: 125px;
  height: 10px;
  margin-bottom: 30px;
  background: #4169e1;
}
.container {
  max-width: 1800px;
  /* z-index: 99999; */
}
h1 {
  font-size: 64px;
  line-height: 64px;
}
p {
  font-size: 28px;
  line-height: 32px;
  /* text-align: distribute; */
  margin-bottom: 40px;
}
button {
  height: 40px;
  width: 125px;
  background: #4169e1;
  color: white;
  border-radius: 7px;
  font-size: 18px;
  border: none;
}
@media only screen and (max-width: 1200px) {
  .testimonials h1 {
    font-size: 50px;
    line-height: 50px;
  }
}
</style>

