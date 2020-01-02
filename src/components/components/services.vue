<template>
    <section id="services" class="flex wrap c-jc">
      <vs-card v-for="(item, index) in services" v-bind:key="index">
        <div class="flex column c-jc c-ai">
          <div class="content flex column c-jc c-ai">
            <img v-bind:src="item['image']['src']" v-bind:alt="item['image']['alt']">
            <h2>{{item['title']}}</h2>
            <p>{{item['details']}}</p>
          </div>
          <vs-button color="primary" type="filled" @click="call()">تماس بگیرید</vs-button>
        </div>
      </vs-card>
    </section>
</template>


<script>
let data = {services: [
    {
      image: {
        src: '/images/internet.svg',
        alt: 'Photo of earth and an input.'
      },
      title: 'نمایندگی اینترنت',
      details: 'فروش انواع مودم و اینترنت و نصب و راه اندازی شبکه های محلی'
    }, {
        image: {
            src: '/images/camera.svg',
            alt: 'Photo of a camera.',
        },
        title: 'دوربین های مداربسته',
        details: 'نصب و راه اندازی و پشتیبانی دوربین های مدار بسته'
    }, {
      image: {
        src: '/images/graphic.svg',
        alt: 'Photo of a monitor.',
      },
      title: 'طراحی گرافیکی',
      details: 'طراحی انواع لوگو، بنر، انیمیشن با Adobe Photoshop, Adobe After Effect, Corel '
    }, {
      image: {
        src: '/images/programming.svg',
        alt: 'Photo of a monitor.'
      },
      title: 'طراحی و توسعه نرم افزار',
      details: 'طراحی و توسعه انواع وبسایت ها و نرم افزار های گوشی های هوشمند و کامپیوتر'
    }
]};
export default {
  name: 'Services',
  data(){
    return data;
  },
  methods: {
    call(){
      this.$router.push('/contact-us');
    }
  }
}
</script>

<style scoped>
.con-vs-card{
  position: relative;
  width: 300px;
  padding: 20px 0;
  margin: 20px;
  top: 0px;
  height: auto;
  transform: scale(1);
  transition: transform 0.3s;
}
.con-vs-card:hover{
  transform: scale(1.05);
  transition: transform 0.2s;
}
.con-vs-card div.content{
  position: relative;
  top: 0;
  transform: scale(1);
  transition: all .2s;
}
.con-vs-card:hover div.content{
  top: -10px;
  transform: scale(0.8);
  transition: all 0.2s;
}
.con-vs-card img{
  width: 60px;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 25px;
}
.con-vs-card h2{
  color: rgb(var(--vs-primary));
  font-size: 1.15rem;
}
.con-vs-card p{
  font-size: 1rem;
  width: 90%;
  margin-top: 10px;
  text-align: center;
}
.con-vs-card:nth-child(3) p,
.con-vs-card:nth-child(4) p{
  font-size: 0.85rem;
  line-height: 25px;
}
.con-vs-card button{
  position: absolute;
  bottom: -10px;
  margin-top: 30px;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.9);
  transition: all 0.2s;
}
.con-vs-card:hover button{
  bottom: 20px;
  opacity: 1;
  pointer-events: all;
  transition: all 0.2s;
}
</style>
