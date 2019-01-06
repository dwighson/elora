<template>
  <div class="infoblocks">
    <div v-on:click="toggleroom" class="blocks room">
      <div class="overlay">Rooms</div>
    </div>
    <div v-on:click="togglekitchen" class="blocks kitchen">
      <div class="overlay">kitchen</div>
    </div>
    <div v-on:click="togglebathroom" class="blocks bathroom">
      <div class="overlay">bathroom</div>
    </div>
    <div v-on:click="togglemore" class="blocks more">
      <div class="overlay">more</div>
    </div>

    <div v-if="room" class="info room">
      <span v-on:click="toggleroom">&times;</span>
      <ul>
        <li>Wet cleaning of all surfaces, skirting, sills, radiators, door frames, doors.</li>
        <li>Cob webbing where necessary.</li>
        <li>Cleaning of all electrical fixtures such as switches, ceiling lights, wall lights, sockets.</li>
        <li>Any built-in cupboards are cleaned externally and internally.</li>
        <li>Vacuuming of floors.</li>
        <li>Carpeted floors steam cleaned for hygienic disinfection</li>
        <li>Hard floors are mopped</li>
        <li>Internal window frames and glass</li>
      </ul>
    </div>
    <div v-if="kitchen" class="info kitchen">
      <span v-on:click="togglekitchen">&times;</span>
      <ul>
        <li>De-scaling of sinks and taps</li>
        <li>De-greasing of surfaces and tiles</li>
        <li>Cleaning and polishing to smear free of all tiles</li>
        <li>Cleaning inside and outside of cupboards, shelving, drawers (Inc. tops of cupboards if exposed)</li>
        <li>Outsides of all appliances (white goods)</li>
        <li>Inside of all appliances (white goods) steam cleaned and disinfected/descaled</li>
        <li>Hob clean</li>
        <li>Extractor clean</li>
        <li>Oven cleaned to a professional standard</li>
      </ul>
    </div>
    <div v-if="bathroom" class="info bathroom">
      <span v-on:click="togglebathroom">&times;</span>
      bathroom
    </div>
    <div v-if="more" class="info more">
      <span v-on:click="togglemore">&times;</span>
      more
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      room: false,
      kitchen: false,
      bathroom: false,
      more: false
    };
  },
  methods: {
    toggleroom: function() {
      this.room = !this.room;
    },
    togglekitchen: function() {
      this.kitchen = !this.kitchen;
    },
    togglebathroom: function() {
      this.bathroom = !this.bathroom;
    },
    togglemore: function() {
      this.more = !this.more;
    }
  }
};
</script>

<style scoped>
.infoblocks {
  height: 400px;
  width: 400px;
  position: relative;
}
.blocks {
  height: 190px;
  width: 190px;
  margin: 5px;
  background: #4169e1;
  float: left;
}
.overlay {
  background: rgba(0, 0, 0, 0);
  height: 100%;
  width: 100%;
  line-height: 190px;
  color: rgba(0, 0, 0, 0);
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.5s ease;
}
.overlay:hover {
  background: rgba(0, 0, 0, .5);

  color: rgba(255, 255, 255, 1);
}
.blocks.room {
  background: url("https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80")
    no-repeat center center;
  background-size: cover;
}
.blocks.kitchen {
  background: url("https://images.unsplash.com/photo-1535230387253-9cd5be991a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")
    no-repeat center center;
  background-size: cover;
}
.blocks.bathroom {
  background: url("https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80")
    no-repeat center center;
  background-size: cover;
}
.info {
  position: absolute;
  top: 0;
  left: 0;
  background: #4169e1;
  height: 100%;
  width: 100%;
}
.info ul {
  height: calc(100% - 50px);
  margin: 0;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 0px 40px;
  font-size: 18px;
}
span {
  display: block;
  line-height: 45px;
  text-align: center;
  height: 45px;
  width: 45px;
  font-size: 40px;
}
li {
  color: white;

}
</style>

