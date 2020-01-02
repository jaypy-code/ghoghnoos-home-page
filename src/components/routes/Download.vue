<template>
  <main>
    <Header />
    <section class="flex column c-ai c-jc">
        <h2>مرکز دانلود برنامه های ققنوس</h2>
        <br><br>
        <div class="flex wrap">
            <vs-card v-for="(item, index) in downloads" v-bind:key="index">
                <div class="flex column c-jc c-ai">
                <div class="content flex column c-jc c-ai">
                    <img v-bind:src="item['image']" v-bind:alt="item['name']">
                    <h2>{{item['name']}}</h2>
                </div>
                <vs-button color="success" type="filled" @click="download(item['link'])">دانلود برنامه</vs-button>
                </div>
            </vs-card>
        </div>
    </section>
    <Footer />
  </main>
</template>


<script>

import Header from '../includes/Header';
import Footer from '../includes/Footer';

export default {
  name: 'FAQ',
  components: {
    Header,
    Footer,
  },
  data(){
      return{
          downloads: [
              {
                  name: 'فروشگاه اینترنتی ققنوس آی تی‎',
                  image: 'https://lh3.googleusercontent.com/eUf_8zmpcrk5OfGZSS2mYpNa3iqS6lIRtajeEjCdwprnpONo0Epwwi0O1S1tRu1E9tw=s180-rw',
                  link: 'https://play.google.com/store/apps/details?id=app.ghoghnoosit.com'
              }
          ]
      }
  },
  methods:{
      download(link=''){
          window.open(link);
      }
  }
}
</script>

<style scoped>
section{
  padding: 50px 0 100px 0;
}
.con-vs-card{
    padding: 10px;
}
.con-vs-card h2{
    margin-top: 30px;
    margin-bottom: 10px;
}
</style>
