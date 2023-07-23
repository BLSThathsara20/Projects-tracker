<template>
  <div class="about">
    <section class="top">
      <div class="container">
        <h1 class="title">About Us</h1>
      </div>
    </section>

    <!-- Services Section -->
    <!-- <section class="services">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-4" v-for="(service, index) in services" v-bind:key="index">
            <div class="content-wrapper">
              <span class="bg-text">{{service.number}}</span>
              <h4 class="title">
                <a href="#">{{service.name}}</a>
              </h4>
              <p class="description">
                {{service.description}}
              </p>
              <div class="action">
                <a href="#">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSlider from '@/components/HeroSlider.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSlider,
  },
  data() {
    return {
      tabs: [
        {
          name: "Design",
          content: "Ut enim ad minim veniam, quis nostrud exercitation ullamconisi ut aliquip ex ea commodo Duis aute irure euripidis ne mel, mel lobortis viverra nulla varius laoreet.",
          isActive: true,
        },
        {
          name: "Marketing",
          content: "Tab 2 ContenLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod reus tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
          name: "Devs",
          content: `
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod reus tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <ul><li>Point</li></ul>
          `,
        },
      ],
      services: [
      {
        name: 'Manage your data efficiently', 
        description: 'Lorem ipsum dolor sit amet ridiculus consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Montes est massa. Cum sociis Theme natoq',
        number: '01',
      },
      {
        name: 'Built with neat utility features', 
        description: 'Lorem ipsum dolor sit amet ridiculus consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Montes est massa. Cum sociis Theme natoq',
        number: '02',
      },
      {
        name: 'Futuristic interactive designs', 
        description: 'Lorem ipsum dolor sit amet ridiculus consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Montes est massa. Cum sociis Theme natoq',
        number: '03',
      },
    ],
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
}
</script>


<style lang="scss" scoped>
//Variables
$color-1: #000;

$font-1 : 'Syne', sans-serif;
$font-2 : 'Heebo', sans-serif;
.about{
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

  //Style Who we are section
  .who-we-are{
    position: relative;
    padding-top: 80px;

    @media only screen and (max-width: 768px){
      padding-top: 60px;
    }
    @media only screen and (max-width: 576px){
      padding-top: 30px;
    }
    //Left Side
    .wrapper{
      max-width: 360px;
      padding-left: 10%;

      @media only screen and (max-width: 768px){
        max-width: none;
        padding-left: 0;
        padding-top: 30px;
      }

      .title{
      text-align: left;

      span{
        font-size: 13px;
        letter-spacing: 4px;
        line-height: 16px;
        color: #8a8a8a;
        text-transform: uppercase;
        font-weight: 500;
        font-family: Syne,sans-serif;
        margin-bottom: 7px;
      }
      .info{
        color: $color-1;
        font-size: 50px;
        line-height: 1.1em;
        margin-top: 10px;

        @media only screen and (max-width: 768px){
          font-size: 38px;
        }
        @media only screen and (max-width: 576px){
          font-size: 32px;
        }
      }
    }
    .content{
      text-align: left;
      margin-top: 22px;

      p{
        font-family: $font-2;
        font-size: 18px;
      }
    }
    }

    //Right Side
    .right-bg{
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      display: flex;
      justify-content: flex-start;
    }

    .section-who-we-mark{
      position: absolute;
      left: 40px;
      bottom: 20px;
      z-index: 100;
      display: flex;
      align-items: center;

      @media only screen and (max-width: 576px){
           display: none;
        }

      #line-navigation-who-we{
        border-left: 1px solid $color-1;
        height: 60px;
      }
      span{
      padding-left: 15px;
      font-size: 15px;
      line-height: 16px;
      max-width: 66px;
      display: block;
      text-align: left;
      color: $color-1;
    }
    }
  }

  //Style Services Section
  .services{
    padding-top: 160px;
    padding-bottom: 120px;

    @media only screen and (max-width: 768px){
      padding-top: 80px;
    padding-bottom: 25px;
        }
        @media only screen and (max-width: 576px){
          padding-top: 30px;
    padding-bottom: 15px;
        }
    .content-wrapper{
      position: relative;

      @media only screen and (max-width: 768px){
          padding-bottom: 110px;
        }

      .bg-text{
        display: inline-block;
        background: linear-gradient(-90deg,#5cc2ed 0,#5d62ee 50%,#c298d3 100%);
        background: -moz-linear-gradient(-90deg,#5cc2ed 0,#5d62ee 50%,#c298d3 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        font-size: 230px;
        letter-spacing: 0;
        line-height: 1.2em;
        font-weight: 400;
        font-family: Syne,sans-serif;
        z-index: -2;
        position: absolute;
        left: -68px;
        top: -53%;
        opacity: .2;

        @media only screen and (max-width: 992px){
            left: 0;
            top: -36%;
        }
        @media only screen and (max-width: 576px){
            left: 0;
            top: -36%;
        }

        @media only screen and (max-width: 786px){
            font-size: 230px;
            left: 0;
            top: -42%;
        }
          
      }
      .title{
        a{
          text-decoration: none;
          color: $color-1;
          font-weight: 600;
          font-size: 35px;

          @media only screen and (max-width: 786px){
            font-size: 30px;
        }
        }
      }

      .description{
        font-size: 17px;
        margin: 16px 60px 0 0;
        font-family: $font-2;

        @media only screen and (max-width: 786px){
            font-size: 17px;
            margin-right: 0;
        }
          @media only screen and (max-width: 576px){
            font-size: 16px;
        }
      }

      .action{
        padding-top: 15px;

        a{
          cursor: pointer;
          text-decoration: none;
          color: $color-1;
          font-size: 16px;
          letter-spacing: 1.5px;
          text-transform: uppercase;

          color: #000;
          border: 0;
          padding: 0 0 0 95px !important;
          letter-spacing: .2em;
          background-color: transparent;
          transition: all .4s cubic-bezier(0,.68,.58,1);

          font-family: Archivo,sans-serif;
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
          transition: all 0.5s;

          @media only screen and (max-width: 786px){
            font-size: 14px;
        }

          &::before{
            content: '';
            display: table;
            table-layout: fixed;
          }

            &::after{

              content: '';
                position: absolute;
                top: 50%;
                left: 0;
                width: 80px;
                height: 1px;
                background-color: #57b8e0;
                transition: width .4s cubic-bezier(0,.68,.58,1);
            }

            &:hover{
              padding-left: 0px !important;
              &::after{

              content: '';
                width: 0;
              } 
            }
        }
      }
    }
  }

  //Style Brands section
  .brands{
    position: relative;
    padding-top: 80px;
    padding-bottom: 140px;

        @media only screen and (max-width: 576px){
          padding-top: 0;
        padding-bottom: 40px;
        }
    //Left Side
    .wrapper{
      padding-left: 10%;
      padding-right: 10%;
      padding-top: 100px;

      @media only screen and (max-width: 768px){
        max-width: none;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
      }
      .title{
      text-align: left;

      @media only screen and (max-width: 576px){
        padding-top: 30px;
      }

      span{
        font-size: 13px;
        letter-spacing: 4px;
        line-height: 16px;
        color: #8a8a8a;
        text-transform: uppercase;
        font-weight: 500;
        font-family: Syne,sans-serif;
        margin-bottom: 7px;
      }
      .info{
        color: $color-1;
        font-size: 50px;
        line-height: 1.1em;
        margin-top: 10px;

        @media only screen and (max-width: 768px){
          font-size: 38px;
        }
        @media only screen and (max-width: 576px){
          font-size: 32px;
        }
      }
    }
    .content{
      text-align: left;
      margin-top: 22px;

        @media only screen and (max-width: 576px){
          padding-bottom: 30px;
        }

      p{
        font-family: $font-2;
        font-size: 18px;
      }

      .nav-tabs{
        gap: 40px;
        .nav-item{
          padding-bottom: 9px;
          .nav-link{
            font-family: $font-1;
            font-weight: 600;
            font-size: 24px;
            line-height: 1.25em;
            position: relative;
            display: block;
            padding: 0;
            color: #000000c1;
            transition: color .2s ease-out,background-color .2s ease-out;
            font-weight: 600;

            &.active{
              color: #000;
                &::after{
                content: '';
                width: 100%;
                left: 0;
                height: 1px;
                position: absolute;
                bottom: -9px;
                background-color: #000;
                transition: width .48s cubic-bezier(.77,0,.175,1);
              }
            }
            
          }
        }
      }
    }
    }

    //Right Side
    .right-bg{
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      display: flex;
      justify-content: center;
    }

    .section-who-we-mark{
      position: absolute;
      left: 40px;
      bottom: 20px;
      z-index: 100;
      display: flex;
      align-items: center;

      #line-navigation-who-we{
        border-left: 1px solid $color-1;
        height: 60px;
      }
      span{
      padding-left: 15px;
      font-size: 15px;
      line-height: 16px;
      max-width: 66px;
      display: block;
      text-align: left;
      color: $color-1;
    }
    }
  }
}
</style>