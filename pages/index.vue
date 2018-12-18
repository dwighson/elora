<template>
  <div class="wrapper">
    <Header></Header>
    <Container></Container>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Container from "@/components/Container";
import $ from 'jquery'
export default {
  components: {
    Header,
    Container
  },

};
</script>
<style>
.wrapper {
  width: 100vw;
}

body{
  overflow-x: hidden;
}
@media only screen and (max-width: 1200px) {
    .containerimg, .blocks {
      display: none;
    }
    .container .containertxt{
      margin: 0;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    .container {
      overflow: hidden;
    }
    .tenancy {
      margin-left: 50%;
      transform: translateX(-50%);
    }
    .headertxt h1 {
      text-align: left;
      /* font-size: 0px; */
    }
    .slick-dots {
      visibility: hidden;
      background: purple;
    }
    .slick-prev , .slick-next {
      visibility: hidden;

      display: none;
    }
}
</style>
