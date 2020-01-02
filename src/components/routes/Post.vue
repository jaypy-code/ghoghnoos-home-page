<template>
  <main>
    <Header />
    <section>
      <div class="flex column c-ai c-jc" v-if="ready == true">
        <img v-bind:src="photo" v-bind:alt="title">
        <div class="title">{{title}}</div>
        <div class="content" v-html="content"></div>
        <div class="flex wrap tags">
          <vs-chip v-for="(item, index) in getTags(tags)" v-bind:key="index"> #{{item}} </vs-chip>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>


<script>

import Header from '../includes/Header';
import Footer from '../includes/Footer';

export default {
  name: 'Post',
  components: {
    Header,
    Footer,
  },
   data() {
      return {
          ready: false,
          title: '',
          photo: '',
          content: '',
          tags: ''
      }
  },
  methods: {
    fetch(id=''){
      this.$vs.loading({
        scale: 0.6
      })
      fetch(`${window.location.hostname == 'localhost'?'http://127.0.0.1:2998':'https://api.ghoghnoosit.ir'}/api/graph?query={ post(id:"${id}") { title photo content tags } }`)
      .then(res=>{
        return res.json();
      })
      .then(res=>{
        this.$vs.loading.close()
        let data = res['data']['post'];
        window.console.log(data);
        
        if(data!=null){
          this.ready = true;
          this.title = data['title'];
          this.photo = data['photo'];
          this.content = data['content'];
          this.tags = data['tags'];
        } else {
          this.$router.push('/blog');
        }
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
  padding: 50px 0 100px 0;
}
img{
  width: 80%;
  border-radius: 0.4rem;
}
div.title{
  margin-top: 50px;
  font-size: 1.5rem;
}
div.content,
div.title{
  text-align: right;
  width: 80%;
  margin-bottom: 30px;
}
</style>
