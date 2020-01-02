<template>
  <main>
    <Header />
    <section class="head flex column c-ai c-jc">
      <div class="title">شرکت امید ایمن پرداز ققنوس</div>
      <div class="description">ارائه ی بهترین ، با کیفیت ترین و مقرون به صرفه ترین خدمات و محصولات ، طراحی و توسعه وبسایت و اپلیکیشن با پشتیبانی 24 ساعته هر روز هفته</div>
    </section>
    <Services />
    <Ticketing />
    <Projects v-bind:projects="projects"/>
    <Tariff v-bind:internets="internets"/>
    <Sell />
    <FAQ v-bind:faqs="faqs" />
    <Footer />
  </main>
</template>


<script>
import Header from '../includes/Header';
import Footer from '../includes/Footer';

import Services from '../components/services';
import Ticketing from '../components/ticketing';
import Projects from '../components/projects';
import Tariff from '../components/tariff';
import Sell from '../components/sell';
import FAQ from '../components/faq';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Services,
    Ticketing,
    Projects,
    Tariff,
    Sell,
    FAQ
  },
  data(){
    return {
      faqs: [],
      projects: [],
      internets: []
    }
  },
  created(){
    this.graph();
  },
  methods: {
    graph(){
      fetch(`${window.location.hostname == 'localhost'?'http://127.0.0.1:2998':'https://api.ghoghnoosit.ir'}/api/graph?query={ 
        faqs (star:true) { title content }
        projects { name details category url }
        internet (index:true) { name category speed time volume { in out } each price }
        }`)
      .then(res=>{
        return res.json();
      }).then(res=>{
        this.faqs = res['data']['faqs'];
        this.projects = res['data']['projects'];
        this.internets = res['data']['internet'];
      })
    }
  }
}
</script>

<style scoped>
section.head{
  text-align: center;
  padding: 100px 0;
}
div.title{
  font-size: 2rem;
  margin-bottom: 20px;
}
div.description{
  font-size: 1.2rem;
  color: #777;
  width: 50vw;
  text-align: center;
  transition: width 0.2s;
}
@media only screen and (max-width: 992px) {
  div.description{
    width: 80vw;
    transition: width 0.2s;
  }
}
</style>
