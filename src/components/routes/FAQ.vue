<template>
  <main>
    <Header />
    <section class="flex column c-ai c-jc">
        <h2>سوالات متداول</h2>
        <div class="container">
          <vs-collapse open-hover accordion>
              <vs-collapse-item v-for="(item, index) in faqs" v-bind:key="index">
                  <div slot="header">{{item['title']}}</div>
                  <div class="content" v-html="item['content']"></div>
              </vs-collapse-item>
          </vs-collapse>
        </div>
        <vs-button onclick="window.open('https://my.ghoghnoosit.ir/')">ثبت تیکت پشتیبانی</vs-button>
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
   data() {
      return {
          faqs: []
      }
  },
  created() {
      this.$vs.loading({
        scale: 0.6
      })
      fetch(`${window.location.hostname == 'localhost'?'http://127.0.0.1:2998':'https://api.ghoghnoosit.ir'}/api/graph?query={ faqs { title content } }`).then(res=>{
      return res.json();
    }).then(res=>{
      this.$vs.loading.close()
      this.faqs = res['data']['faqs'];
    }).catch(()=>{
      this.$vs.loading.close()
    });
  }
}
</script>

<style scoped>
section{
  padding: 50px 0 100px 0;
}
div.container{
  margin: 40px 0 20px 0;
  min-height: 400px;
}
.vs-collapse-item {
    width: 70vw;
    border-bottom: 1px solid #eaeaea !important;
}

@media only screen and (max-width: 600px) {
    .vs-collapse-item {
        width: 90vw;
    }
}
</style>
