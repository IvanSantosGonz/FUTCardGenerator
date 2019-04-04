<style scoped>

  div{
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

  #hrCountry{
    position: relative;
    left: -50px;
    top: 30px;
  }

  #hrName{
    position: relative;
    left: -00px;
    top: -5px;
    width: 140px;
  }

  #props{
    position: relative;
    margin-top: 65px;
    left: -50px;
  }
  #hrEnd{
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
    <div><img id="country" :src="country" alt="Player Photo"><hr id = "hrCountry"></div>
    <div><img id="club" :src="club" alt="Player Photo"></div>
    <div id="name" > {{name}} <hr id = "hrName"> </div>
    <div id="props">
      <div style="left: 10px"> {{speed}} </div>
      <div style="position:relative;left: 20px; top: -21px;"> vel </div>
      <div id="shot" style="position:relative;top:-21px; left: 0px"> {{shot}} </div>
      <div style="position:relative;left: 20px; top: -42px;"> tir </div>
      <div id="pass" style="position:relative;top:-42px; left: 0px"> {{pass}}  </div>
      <div style="position:relative;left: 25px; top: -63px;"> pas </div>

      <div style="position:relative;left: 75px; top: -123px;"> {{dribbling}} </div>
      <div style="position:relative;left: 100px; top: -145px;"> reg </div>
      <div style="position:relative;top:-145px; left: 75px"> {{defense}} </div>
      <div style="position:relative;left: 100px; top: -166px;"> def </div>
      <div style="position:relative;top:-166px; left: 75px"> {{pass}}  </div>
      <div style="position:relative;left: 100px; top: -188px;"> fis </div>
      <div><hr id = "hrEnd"> </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      background: {
        type: String,
        default: 'https://cdn.futbin.com/content/fifa19/img/cards/goldrnif.png?v=17',
        required: false
      },
      photo: {
        type: String,
        default: 'https://www.futbin.com/design/img/blank_player.png',
        required: false
      },
      name: {
        type: String,
        default: 'Ronaldo',
        required: false
      },
      average: {
        type: Number,
        default: 50,
        required: false
      },
      position: {
        type: String,
        default: 'DC',
        required: false
      },
      country: {
        type: String,
        default: 'https://cdn.futbin.com/content/fifa19/img/nation/38.png',
        required: false
      },
      club: {
        type: String,
        default: 'https://cdn.futbin.com/content/fifa19/img/clubs/45.png',
        required: false
      },
      speed: {
        type: Number,
        default: 50,
        required: false
      },
      shot: {
        type: Number,
        default: 50,
        required: false
      },
      pass: {
        type: Number,
        default: 88,
        required: false
      },
      dribbling: {
        type: Number,
        default: 50,
        required: false
      },
      defense: {
        type: Number,
        default: 50,
        required: false
      },
      physic: {
        type: Number,
        default: 50,
        required: false
      }
    },
    data: function () {
      return {
        cardStyle: {
          backgroundImage: 'url("' + this.background + '")',
          backgroundHeight: '300px',
          backgroundWidth: '100px',
          backgroundPosition: 'center top',
          minHeight: '300px'
        }
      }
    }
  }
</script>
