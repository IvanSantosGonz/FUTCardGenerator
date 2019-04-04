<style scoped>

  div {
    font-family: 'Roboto', sans-serif;
  }

  #average {
    position: relative;
    top: 20px;
    left: -50px;
    font-size: xx-large;
    font-weight: 500;
  }

  #position {
    position: relative;
    margin-top: 10px;
    left: -50px;
    font-size: large;
    font-weight: 500;

  }

  #playerPhoto {
    position: absolute;
    margin-top: -35px;
    margin-left: -30px;
    width: 104px;
    vertical-align: middle;
    float: center
  }

  #country {
    position: absolute;
    margin-top: 5px;
    margin-left: -65px;
    width: 30px;
  }

  #club {
    position: absolute;
    margin-top: 35px;
    margin-left: -65px;
    width: 30px;
  }

  #name {
    position: relative;
    top: 65px;
    left: -0px;
    font-size: x-large;
    font-weight: 500;
  }

  hr {
    height: 1px;
    border: none;
    color: #000;
    background-color: #000;
    width: 25px;
    text-align: center;
    margin: 0 auto;
  }

  #hrCountry {
    position: relative;
    left: -50px;
    top: 30px;
  }

  #hrName {
    position: relative;
    left: -00px;
    top: -5px;
    width: 140px;
  }

  #props {
    position: relative;
    margin-top: 65px;
    left: -50px;
  }

  #hrEnd {
    position: relative;
    left: 50px;
    top: -180px;
    width: 35px;
  }

</style>

<template>
  <div class="Card" :style="cardStyle">
    <div id="average"> {{average}}</div>
    <div id="position"> {{position}}
      <hr>
    </div>
    <div><img id="playerPhoto" :src="photo" alt="Player Country"></div>
    <div><img id="country" :src="country" alt="Country">
      <hr id="hrCountry">
    </div>
    <div><img id="club" :src="club" alt="Club"></div>
    <div id="name"> {{name}}
      <hr id="hrName">
    </div>
    <div id="props">
      <div style="left: 10px"> {{speed}}</div>
      <div style="position:relative;left: 20px; top: -21px;"> vel</div>
      <div id="shot" style="position:relative;top:-21px; left: 0px"> {{shot}}</div>
      <div style="position:relative;left: 20px; top: -42px;"> tir</div>
      <div id="pass" style="position:relative;top:-42px; left: 0px"> {{pass}}</div>
      <div style="position:relative;left: 25px; top: -63px;"> pas</div>

      <div style="position:relative;left: 75px; top: -123px;"> {{dribbling}}</div>
      <div style="position:relative;left: 100px; top: -145px;"> reg</div>
      <div style="position:relative;top:-145px; left: 75px"> {{defense}}</div>
      <div style="position:relative;left: 100px; top: -166px;"> def</div>
      <div style="position:relative;top:-166px; left: 75px"> {{pass}}</div>
      <div style="position:relative;left: 100px; top: -188px;"> fis</div>
      <div>
        <hr id="hrEnd">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {},
    data: function () {
      return {
        image: require('../assets/logo.png'),
        cardStyle: {
          backgroundImage: 'url(' + require('../assets/goldCard.png') + ')',
          backgroundHeight: '300px',
          backgroundWidth: '100px',
          backgroundPosition: 'center top',
          minHeight: '300px'
        },
        photo: require('../assets/ronaldo.png'),
        name: 'Ronaldo',
        average: 50,
        position: 'DC',
        country: require('../assets/portugal.png'),
        club: require('../assets/juve.png'),
        speed: 50,
        shot: 50,
        pass: 88,
        dribbling: 50,
        defense: 50,
        physic: 50,


      }
    },
    computed: {},
    mounted() {
      this.$root.$on('create', (name, average, position, speed, shot, pass, dribbling, defense, physic) => {
        this.name = name;
        this.average = average;
        this.position = position;
        this.speed = speed;
        this.shot = shot;
        this.pass = pass;
        this.dribbling = dribbling;
        this.defense = defense;
        this.physic = physic;
      });
    }
  }

</script>
