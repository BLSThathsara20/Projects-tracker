<template>
  <div class="contact">
    <section class="top">
      <div class="container">
        <h1 class="title">Contact Us</h1>
      </div>
    </section>

    <!-- Services Section -->
    <!-- <section class="info">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-4" v-for="(singleInfo, index) in info" v-bind:key="index">
            <div class="content-wrapper">
              <h4 class="title">
                <a href="#">{{singleInfo.name}}</a>
              </h4>
              <p class="description">
                {{singleInfo.description}}
              </p>
              <div class="action">
                <a href="#">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="form-format">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6">
            <div class="location-wrap">
              <div id="map" style="height: 400px; width: 400px"></div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div class="form-wrapper">
              <h3 class="title">Get in touch</h3>
              <form @submit.prevent="submitForm">
                <div class="input-wrap">
                  <input placeholder="Your Name" type="text" id="name" v-model="name" required>
                  <input placeholder="Your Email" type="email" id="email" v-model="email" required>
                </div>
                <div>
                  <textarea placeholder="Your Message" id="message" v-model="message" required></textarea>
                </div>
                <button type="submit">Send</button>
                <div v-if="messageSent" class="success-message">Message sent!</div>
                <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section> -->

  </div>
</template>

<script>
import axios from 'axios';
import L from 'leaflet';

export default {
  name: 'HomeView',
  components: {
    
  },
  data() {
    return {
      info: [
      {
        name: 'Manage your data efficiently', 
        description: 'Lorem ipsum dolor sit amet ridiculus consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Montes est massa. Cum sociis Theme natoq',
      },
      {
        name: 'Built with neat utility features', 
        description: 'Lorem ipsum dolor sit amet ridiculus consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Montes est massa. Cum sociis Theme natoq',
      },
      {
        name: 'Futuristic interactive designs', 
        description: 'Lorem ipsum dolor sit amet ridiculus consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Montes est massa. Cum sociis Theme natoq',
      },
    ],
    name: '',
    email: '',
    message: '',
    messageSent: false,
    errorMessage: '',
    };
  },
  methods: {
    submitForm() {
      if (!this.name || !this.email || !this.message) {
        this.errorMessage = 'Please fill in all fields.';
        return;
      }
      axios.post('/send-email', {
        name: this.name,
        email: this.email,
        message: this.message
      })
      .then(response => {
        this.messageSent = true;
        this.name = '';
        this.email = '';
        this.message = '';
        this.errorMessage = '';
      })
      .catch(error => {
        this.errorMessage = 'An error occurred while sending the message. Please try again later.';
      });
    }
  },
  mounted() {
    const map = L.map('map').setView([6.9271, 79.8612], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([6.9271, 79.8612]).addTo(map)
      .bindPopup('Colombo, Sri Lanka')
      .openPopup();
  },
}
</script>


<style lang="scss" scoped>
//Variables
$color-1: #000;

$font-1 : 'Syne', sans-serif;
$font-2 : 'Heebo', sans-serif;

.contact{
  .top{
    padding-top: 60px;
    padding-bottom: 60px;

    @media only screen and (max-width: 768px){
      padding-top: 40px;
    padding-bottom: 40px;
    }
    @media only screen and (max-width: 576px){
      padding-top: 30px;
      padding-bottom: 30px;
    }
    .title{
      text-align: center;
      color: #9e9e9e;
      margin: 0;
    background: linear-gradient(-120deg,rgba(202,151,210,.94),rgba(94,94,240,.94) 46%,rgba(92,195,238,.94));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 60px;
    line-height: 1.1em;
    font-weight: 600;

    @media only screen and (max-width: 768px){
      font-size: 48px;
    }
    @media only screen and (max-width: 576px){
      font-size: 36px;
    }
    }
  }

  //Style Info Section
  .info{
    padding-top: 40px;
    padding-bottom: 40px;

    @media only screen and (max-width: 768px){
      padding-top: 20px;
    padding-bottom: 20px;
    }
    @media only screen and (max-width: 576px){
      padding-top: 5px;
    padding-bottom: 5px;
    }
    .content-wrapper{
      .title{
        a{
          text-decoration: none;
          color: $color-1;
          font-weight: 600;
          font-size: 35px;

          @media only screen and (max-width: 768px){
            font-size: 32px;
          }
          @media only screen and (max-width: 576px){
            font-size: 24px;
          }
        }
      }

      .description{
        font-size: 17px;
        margin: 16px 60px 0 0;
        font-family: $font-2;

        @media only screen and (max-width: 768px){
            font-size: 15px;
            margin-right: 0;
          }
          @media only screen and (max-width: 576px){
            font-size: 13px;
          }
      }

      .action{
        padding-top: 15px;

        a{
          text-decoration: none;
          color: $color-1;
          font-size: 16px;
          letter-spacing: 1.5px;
          text-transform: uppercase;

          @media only screen and (max-width: 768px){
            font-size: 14px;
          }
        }
      }
    }
  }

  //Style Form Section
  .form-format{
    padding-top: 60px;
    padding-bottom: 60px;

    @media only screen and (max-width: 768px){
      padding-top: 40px;
    padding-bottom: 40px;
    }
    @media only screen and (max-width: 576px){
      padding-top: 20px;
    padding-bottom: 20px;
    }

    .location-wrap{
    overflow: hidden;

    #map{
      max-height: 400px;
      max-width: 400px;
    }
  }

  .form-wrapper{
    .title{
      font-family: $font-1;
      font-weight: 600;
      color: #000;
      font-size: 30px;
      line-height: 1.16em;
      margin: 25px 0;

      @media only screen and (max-width: 768px){
        font-size: 28px;
      }
      @media only screen and (max-width: 576px){
        font-size: 22px;
      }
    }

    form{
      padding-bottom: 40px;

      .input-wrap{
        display: flex;
        gap: 15px;

        @media only screen and (max-width: 768px){
          display: block;
        }

        input{
        border: 1px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(70deg,#57b8e0,#5762e2,#be8ec6);
        font-size: 17px;
        line-height: 24px;
        color: #a0a0a0;
        font-weight: 400;
        padding: 23px 30px;
        margin-bottom: 8px;
        width: 50%;

        @media only screen and (max-width: 768px){
          font-size: 14px;
          padding: 18px 20px;
          width: 100%;
        }
        @media only screen and (max-width: 576px){
          padding: 12px 15px;
          width: 100%;
        }
      }
      }

      textarea{
        height: 146px;
        border: 1px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(70deg,#57b8e0,#5762e2,#be8ec6);
        font-size: 17px;
        line-height: 24px;
        color: #a0a0a0;
        font-weight: 400;
        padding: 23px 30px;
        margin-bottom: 8px;
        width: 100%;
        margin-top: 7px;

        @media only screen and (max-width: 768px){
          font-size: 14px;
          padding: 18px 20px;
        }
        @media only screen and (max-width: 576px){
          padding: 12px 15px;
          width: 100%;
        }
      }

      button{
        font-size: 12px;
        line-height: 1.33em;
        letter-spacing: .2em;
        font-weight: 500;
        position: relative;
        display: inline-flex;
        vertical-align: middle;
        width: auto;
        margin: 0;
        text-decoration: none;
        text-transform: uppercase;
        border-radius: 0;
        outline: 0;
        transition: color .2s ease-out,background-color .2s ease-out,border-color .2s ease-out;
        padding: 17px 48px 15px 50px;
        color: #000000;
        background: #00000000;
        border: 1px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(70deg,#57b8e0,#5762e2,#be8ec6);

        @media only screen and (max-width: 768px){
          padding: 18px 20px;
        }
        @media only screen and (max-width: 576px){
          padding: 10px 15px;
        }

        &:hover{
          color: #fff;
        background: #5cc3ee;
        background: linear-gradient(45deg,#5cc3ee 0,#5d91ef 29%,#5e5ef0 50%,#947be1 73%,#ca97d2 100%);
        }
      }

      .success-message{
        padding-top: 15px;
        color: #328c27;
      }
      .error-message{
        padding-top: 15px;
        color: #de2828;
      }
    }
  }

  }
}

</style>