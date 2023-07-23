<template>
  <div class="team">
    <section class="top">
      <div class="container">
        <h1 class="title">Our Team</h1>
      </div>
    </section>

  </div>
</template>

<script>

export default {
  name: 'Team',
  data() {
    return {
      team: [
        {
          name: "MAHEEPA",
          position: "DIRECTOR / CO-FOUNDER",
          mail: "maheepa@owirodigital.com",
          image: 'https://owirodigital.com/modern-images/team/MAHEEPA.jpg',
          sm: {
            fb : "r",
            twitter : "f",
            linkdin: "f",
          }
        },
        {
          name: "CHINTHAKA",
          position: "DIRECTOR / CO-FOUNDER",
          mail: "chinthaka@owirodigital.com",
          image: 'https://owirodigital.com/modern-images/team/CHINTHAKA.jpg',
          sm: {
            fb : "",
            twitter : "f",
            linkdin: "",
          }
        },
        {
          name: "KALPANA",
          position: "CHIEF MARKETING OFFICER",
          mail: "kaplana@owirodigital.com",
          image: 'https://owirodigital.com/modern-images/team/KALPANA.jpg',
          sm: {
            fb : "",
            twitter : "f",
            linkdin: "",
          }
        },
        {
          name: "MANUL",
          position: "CHIEF INFORMATION OFFICER",
          mail: "manul@owirodigital.com",
          image: 'https://owirodigital.com/modern-images/team/MANUL.jpg',
          sm: {
            fb : "",
            twitter : "f",
            linkdin: "",
          }
        },
        {
          name: "MEKALA",
          position: "CHIEF BUSINESS OFFICER",
          mail: "mekala@owirodigital.com",
          image: 'https://owirodigital.com/modern-images/team/MEKHALA.jpg',
          sm: {
            fb : "",
            twitter : "f",
            linkdin: "",
          }
        },
      ],
    };
  },
}
</script>


<style lang="scss" scoped>
//Variables
$color-1: #000;

$font-1 : 'Syne', sans-serif;
$font-2 : 'Heebo', sans-serif;

.team{
  .top{
    padding-top: 60px;
    padding-bottom: 80px;

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

  //Style Team Members Section
  .members{
    padding-bottom: 100px;

    @media only screen and (max-width: 768px){
      padding-bottom: 60px;
    }
    @media only screen and (max-width: 576px){
      padding-bottom: 30px;
    }

    .card{
      
      &:hover{
        .wrapper{
          .sm{
            background-color: #ffffffea;

            ul{
              li{
                opacity: 1;
              }
            }
          }
        }
      }

      .name{
      font-family: $font-1;
      font-weight: 600;
      color: #000;
      font-size: 30px;
      line-height: 1.16em;
      text-align: center;

      @media only screen and (max-width: 768px){
      font-size: 22px;
      }
    }
    .position{
      font-family: $font-1;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 4px;
      color: #8a8a8a;
      font-weight: 600;
      text-align: center;
      margin-bottom: 0;

      @media only screen and (max-width: 768px){
      font-size: 12px;
      }
    }
    .mail{
      text-align: center;
      a{
        text-decoration: none;
        font-family: $font-2;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        color: #8a8a8a;
        font-weight: 600;

        @media only screen and (max-width: 768px){
      font-size: 12px;
      }
      }
    }

    .wrapper{
      position: relative;

      .sm{
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        transition: all 0.3s;

        ul{
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          padding: 0;

          li{
            list-style: none;
            opacity: 0;
            transition: all 0.3s;

            a{
              text-decoration: none;
              color: #000;
              font-size: 13px;
              letter-spacing: 3px;
              font-weight: 600;
              text-transform: uppercase;
              font-family: $font-1;
              transition: all 0.3s;

              &:hover{
                background: linear-gradient(-120deg,rgba(92,195,238,.94),rgba(94,94,240,.94) 46%,rgba(202,151,210,.94));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }
        }
      }
    }
    }
  }
}

</style>