<template>
    <div>
      <span v-if="timeLeft.days > 0">Time left: {{ timeLeft.days }} days, </span>
      <span v-if="timeLeft.hours > 0 || timeLeft.days > 0"> {{ timeLeft.hours }} hours, </span>
      <span v-if="timeLeft.minutes > 0 || timeLeft.hours > 0 || timeLeft.days > 0"> {{ timeLeft.minutes }} minutes, </span>
      <span> {{ timeLeft.seconds }} seconds</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      deadline: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        timeLeft: {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
      };
    },
    created() {
      this.calculateTimeLeft();
      this.startCountdown();
    },
    methods: {
      calculateTimeLeft() {
        const deadlineDate = new Date(this.deadline);
        const currentDate = new Date();
        const timeDifference = deadlineDate.getTime() - currentDate.getTime();
  
        if (timeDifference > 0) {
          this.timeLeft.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          this.timeLeft.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.timeLeft.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          this.timeLeft.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        }
      },
      startCountdown() {
        setInterval(this.calculateTimeLeft, 1000);
      },
    },
  };
  </script>
  