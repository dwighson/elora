<template>
  <div>
    <div class="container containertop">
      <div class="row domesticwrap">
        <div class="col-8 containertxt">
          <h1>DOMESTIC CLEANING</h1>
          <hr>
          <p>We pride ourselves as an eco-friendly company and all our cleaners are employed by us and therefore protected by employment rights.</p>
          <p>We will have your home cleaned daily/weekly/fortnightly/monthly by our cleaning team to our clients, whatever your budget or expectations we will be able to cater and tailor our services to your needs.</p>
          <p>All our operatives are trained to our very high standards along with having excellent references and up to date DBS Checks.</p>
          <div class="readmore" v-show="readmoretoggle">
            <p>All our prices include supply of all cleaning products (however, we honour our clients cleaning products) and all our cleaners are equipped with a high-power and effective cleaning tools and equipment, the only thing we don't provide is a mop and bucket, this is due to risk of cross contamination in different customers’ homes.</p>
            <p>We can have a look around your property and offer you a free no obligation quote.</p>
          </div>
          <button v-on:click="togglereadmore" v-if="readmoretoggle == false">Read more</button>
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
      <div class="row about">
        <div class="col-8 aboutwrap">
          <h1>ABOUT US</h1>
          <hr>
          <p>
            We believe a clean working and living environment is a healthy working and living environment.
            Our systematic approach to establishing and maintaining the highest standards of cleanliness
            means you can focus on your work or career. Quality control is very important to us. Whatever
            your cleaning and maintenances needs, whether weekly, monthly, and yearly cleaning /
            maintenance that guarantees results – we are the right service for you. We offer short term or
            paid trial period
          </p>
          <button v-on:click="togglereadmore2" v-if="readmoretoggle2 == false">Read more</button>
          
          <span class="readmore" v-show="readmoretoggle2">
            <p>
              Elora Cleaning and Maintenance services limited offers a full range of cleaning services to suit
              any business and any budget. From dusting and cleaning home, small and medium-sized offices
              to post- construction cleaning, our highly trained staff will ensure your environment is pleasant,
              safe, and healthy. A welcoming and sanitised working environment boosts morale, productivity
              and helps to ensure the health and wellbeing of your employees.
              <br>Domestic and commercial cleaning can be a disruptive process, unless you hire the right team.
              Having a clean and hygienic office space is an essential aspect of running a successful business,
              of any size that’s where Elora domestic and commercial cleaning Services comes in. We use
              eco-products because we believe it is important to have a clean living or working spaces with
              minimal chemical residue. As well as maintaining an exceptional standard of hygiene and
              cleanliness, our team have a keen eye for detail that will boost the aesthetic appeal of your office
              space.
              <br>We hire only the most conscientious and professional candidates. Our operatives are trained,
              DBS vetted with full reference and insured.
            </p>
            <p>
              ll reference and insured.
              We offer short-term paid trial periods to ensure that you are happy with the level of our work.
              Contact us today for a no obligation free quotation, no cleaning or maintenance job is too small.
              We cover West midlands and surrounding areas so please feel free to get in touch and we will
              be able to confirm availability a local operative with you.
              Company registered in England &amp; Wales - No 11328289
            </p>
          </span>
        </div>
        <div class="col-3">
          <div class="img"></div>
        </div>
      </div>
      <div class="row tenancy">
        <div class="col-8 tenancywrap">
          <h1>END OF TENANCY CLEANING</h1>
          <hr>
          <p>We offer a through End of tenancy service to Landlords and Letting agents, our price structure makes our service transparent whilst we always strive to provide Top Quality.</p>
          <p>Our end of tenancy cleans are fully comprehensive and can often be completed within 48 hours of engagement, we offer a free key collection/delivery service within 5 miles of the property.</p>
          <p>We cover the entire midlands and surrounding areas so please feel free to get in touch and we will be able to confirm availability with you.</p>
        </div>
        <div class="col-3 containerimg">
          <Cleaningimg></Cleaningimg>
        </div>
      </div>

      <Contact></Contact>
    </div>
    <footer></footer>
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
  },
  data() {
    return {
      readmoretoggle: false,
      readmoretoggle2: false
    };
  },
  methods: {
    togglereadmore: function() {
      this.readmoretoggle = !this.readmoretoggle;
    },
    togglereadmore2: function() {
      this.readmoretoggle2 = !this.readmoretoggle2;
    }
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
.containertxt {
  /* padding-bottom: 100px; */
}
.aboutwrap {
  /* text-align: justify; */
}
.about {
  margin-top: 100px;
}
.img {
  height: 500px;
  max-width: 400px;
  width: 400px;
  background: url("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b450fb4d-959e-4de5-a112-d27c1add3d61/rawpixel-777268-unsplash.jpg?AWSAccessKeyId=ASIAT73L2G45GU7VXGH2&Expires=1546882044&Signature=cdZvFmSc0a94FyQ60H5j4nc2FNQ%3D&x-amz-security-token=FQoGZXIvYXdzEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDIylNBXwPi4O6zXC9yK3A8h%2FGbWEQD5ZANHFAFKyaaRCBTj4lde78dksW8A7J6DVdFrUdFZdkvK6PjEFCl%2BANWaq6A8KNgPpaaUZRwwW%2BpfPrAJkZAjtNQEw2AMhkKdqzbb8u94M1SKiti8F2uq6DJ6hI1v4lobPJUO9JEa8zH7fC69LUJHN5VPes2IanAgY97nLhuLO237yO4egz%2FxgsslA6KtUzSaDOvIzb84qDQXXc6ZMpaIsbtT15KNvUuIrWaD%2FIpJw%2F5B7A%2FElhIzWKPW5wB2%2BtgtsOOrbWgZdWOSOnORqTixJhyIhzw%2F3xL6VJPb6ywHJpcBuM41uMqoSni33dAWuOoZeQ%2B%2BHgqDQJC%2FCzevs5au7NjIVUBIT3QURpWiMIUQjrcRV7hHUo%2FGfvV79nA97OkgZ3hoSCmfGpf6%2FsidnSGzy9PHWZDXtAJOdLRgmfDtwKft8%2B1Z1k%2FSaCQgmcgRf%2FbipuNG%2BtKJtX2qAY%2B1%2FPtRzsvBok%2B0TwLizmgLf%2FkCxC2bPCfSetBAdzNeAQHTR8acet1Cn4Jg4Y1V4%2FfjTtpVzgdzqUQwhSduiSS9jkWGqlsTvhNQPtRqCeW1zcR5FQvsons%2FI4QU%3D")
    no-repeat center center;
  background-size: cover;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
}
.domesticwrap {
  padding-top: 100px;
  min-height: 700px;
}
.tenancy {
  padding-top: 100px;
}
.readmore {
  min-height: 400px;
  transition: all 0.5s ease;
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
  height: 7px;
  margin-bottom: 30px;
  background: #4169e1;
}
.container {
  max-width: 1800px;
  /* z-index: 99999; */
}
.containertop {
  position: relative;
  z-index: 1;
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
  width: 102px;
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
  .tenancy {
    text-align: center;
  }
  .tenancywrap {
    margin-left: 50%;
    transform: translateX(-50%);
    text-align: left;
  }
  .img {
    display: none;
  }
  .about {
  }
  .aboutwrap {
    transform: translateX(-50%);
    display: inline;
    margin-left: 50%;
  }
}
</style>

