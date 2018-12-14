<template>
  <div class="slickwrap">
    <div class="slick-prev"></div>

    <div class="slider">
      <div class="card" v-for="i in 9" v-bind:key="i">
        <div class="pic"></div>
        <div class="quoteicon">
          <Quoteicon></Quoteicon>
        </div>
          <h1>John Peterson</h1>
          <p class="companyname">IT Agency Corp</p>
          <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet asperiores labore earum nisi quod sequi, sit distinctio, error voluptas molestias reiciendis, commodi temporibus perferendis obcaecati incidunt debitis suscipit cumque!</p>
        <div class="rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </div>
      </div>
      
    </div>
    <div class="slick-next slick-arrow"></div>
  </div>
</template>
<script>
import Quoteicon from "@/components/Quoteicon";
export default {
  components: {
    Quoteicon
  },
  mounted() {
    $(".slider").slick({
      // normal options...
      infinite: true,
      slidesToShow: 3,
      prevArrow: $(".slick-prev"),
      nextArrow: $(".slick-next"),
      dots: false,
      // the magic
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            infinite: true,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 1,
            dots: true
          }
        }
      ]
    });
  }
};
</script>


<style scoped>
.slickwrap {
  position: relative;
  height: 100%;
  
}
.quoteicon {
  position: absolute;
  top: 15px;
  left: 15px;
}
.description {
  text-align: justify;
  width: calc(100% - 50px);
  margin: 0 auto;
}
.rating {
  height: 100px;
  width: 100%;
  bottom: 0;
  font-size: 50px;
  letter-spacing: 10px;
  line-height: 100px;
  position: absolute;
}
.rating .fa{
  color: rgba(0, 0, 0, 0.5);

}
h1 {
  font-weight: lighter;
  font-size: 30px;
}
.rating .checked {
  color: #4169E1;

}
.slick-prev {
  height: 50px;
  width: 50px;
  position: absolute;
  top: 300px;
  left: 100px;
  transform: rotate(45deg);
  border-bottom: 5px solid white;
  border-left: 5px solid white;
  /* background: yellow; */
}
.slick-next {
  height: 50px;
  width: 50px;
  position: absolute;
  top: 300px;
  right: 100px;
  transform: rotate(-45deg);
  border-bottom: 5px solid white;
  border-right: 5px solid white;
  /* background: yellow; */
}
.slider {
  height: 600px;
  /* overflow: hidden; */
  max-width: 1400px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  /* text-align: center; */
  bottom: -150px;
  position: absolute;
}
.card .pic {
  height: 100px;
  margin: 0 auto;
  margin-top: -50px;
  width: 100px;
  border: 5px solid white;
  background: url("https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg")
    no-repeat center center;
  background-size: cover;
  border-radius: 50%;
}
.card {
  max-width: 415px;
  height: 450px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 30px;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 1200px) {
  .card {
    box-shadow: none;
  }
}
</style>
