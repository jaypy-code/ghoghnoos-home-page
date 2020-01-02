<template>
  <main>
    <Header />
    <section class="flex column">
        <div class="head"><span>وبلاگ</span></div>
        <div class="post flex wrap" v-for="(item, index) in posts" v-bind:key="index">
          <img v-bind:src="item['photo']" v-bind:alt="item['title']" @click="showPost(item['id'])">
          <div class="flex column">
            <div class="title" @click="showPost(item['id'])">{{item['title']}}</div>
            <div class="details" v-html="getContent(item['content'])"> ..</div>
            <div class="flex wrap tags">
               <vs-chip v-for="(tag, index) in getTags(item['tags'])" v-bind:key="index"> {{tag}} </vs-chip>
            </div>
            <vs-button color="primary" type="border" @click="showPost(item['id'])">ادامه نوشته</vs-button>
          </div>
        </div>
        <div class="pagination flex nowrap">
          <vs-button v-bind:disabled="page == 0" radius color="success" type="filled" icon="keyboard_arrow_right"></vs-button>
          <vs-button v-bind:disabled="!hasNextPage" radius color="success" type="filled" icon="keyboard_arrow_left"></vs-button>
        </div>
    </section>
    <Footer />
  </main>
</template>


<script>

import Header from '../includes/Header';
import Footer from '../includes/Footer';

export default {
  name: 'Blog',
  components: {
    Header,
    Footer,
  },
  data(){
    return { posts: [], page: 0, hasNextPage: false };
  },
  methods: {
    fetch(){
      this.$vs.loading({
          scale: 0.6
        })
        let page = this.page;
        fetch(`${window.location.hostname == 'localhost'?'http://127.0.0.1:2998':'https://api.ghoghnoosit.ir'}/api/graph?query={ posts(page: ${page}) { hasNextPage data { id title content photo tags } } }`)
        .then(res=>{
          return res.json();
        }).then(res=>{
          this.$vs.loading.close()
          this.posts = res['data']['posts']['data'];
          this.hasNextPage = res['data']['posts']['hasNextPage']
        }).catch(()=>{
          this.$vs.loading.close()
        });
    },
    getContent(content=''){
      return content.slice(0, 300);
    },
    getTags(tags=''){
      return tags.split('-');
    },
    showPost(id=''){
      this.$router.push(`/blog/${id}`);
    }
  },
  created(){
    this.fetch();
  }
}
</script>

<style scoped>
section{
  padding: 2% 15%;
}
div.head span{
  font-size: 2rem;
}
div.post{
  position: relative;
  margin: 20px 0;
  border-top: 2px solid #eaeaea;
  padding: 20px;
  height: 200px;
}
img{
  height: 200px;
  border-radius: 0.4rem;
  margin-left: 20px;
  cursor: pointer;
}
div.title{
  font-size: 1.4rem;
  color: #000;
  cursor: pointer;
  transition: color 0.2s;
}
div.title:hover{
  color: rgb(var(--vs-primary));
  transition: color 0.2s;
}
div.details{
  margin-top: 10px;
  height: 70px;
}
div.post div.tags{
  position: absolute; 
  bottom: 0px;
  width: 80%;
}
div.post button{
  position: absolute;
  bottom: 0px;
  left: 10px;
}
div.pagination{
  margin-top: 20px;
  justify-content: flex-end;
}
div.pagination button{
  margin-right: 10px;
}
</style>
