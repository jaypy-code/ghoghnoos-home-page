<template>
  <main>
    <Header />
    <section class="fle column">
      <div class="head flex column c-ai c-jc">
            <h2>تعرفه ی اینترنت ققنوسی</h2>
            <p>تعرفه ی خدمات ، اینترنت ارزان و بصرفه و با سرعت فوق العاده برای مودم های ADSL </p>
        </div>
        <div class="flex wrap c-jc c-ai">
          <Internet v-for="(item, index) in internets" v-bind:key="index" v-bind:item="item" />
        </div>
    </section>
    <Footer />
  </main>
</template>


<script>

import Header from '../includes/Header';
import Footer from '../includes/Footer';
import Internet from '../includes/Internet';

export default {
  name: 'Post',
  components: {
    Header,
    Footer,
    Internet
  },
   data() {
      return {
          ready: false,
          internets: []
      }
  },
  methods: {
    fetch(){
      this.$vs.loading({
        scale: 0.6
      })
      fetch(`${window.location.hostname == 'localhost'?'http://127.0.0.1:2998':'https://api.ghoghnoosit.ir'}/api/graph?query={ internet { id name category speed time volume { in out } each price index } }`)
      .then(res=>{
        return res.json();
      })
      .then(res=>{
        this.$vs.loading.close()
        this.internets = res['data']['internet'];
      }).catch(()=>{
          this.$vs.loading.close()
      })
    },
    getTags(tags=''){
      return tags.split('-');
    },
  },
  created(){
    this.fetch(this.$route.params.id);
  }
}
</script>

<style scoped>
section{
  padding: 50px 5% 100px 5%;
}
div.head p{
  margin-top: 5px;
}
div.flex{
  margin-top: 40px;
}
</style>
