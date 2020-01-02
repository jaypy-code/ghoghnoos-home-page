<template>
    <section id="faq" class="flex column c-ai c-jc">
        <h2>سوالات متداول</h2>
        <vs-collapse accordion>
            <vs-collapse-item v-for="(item, index) in faqs" v-bind:key="index">
                <div slot="header">{{item['title']}}</div>
                <div class="content" v-html="item['content']"></div>
            </vs-collapse-item>
        </vs-collapse>
        <br>
        <vs-button color="dark" type="filled" @click="more()">همه سوالات متداول</vs-button>
    </section>
</template>


<script>
export default {
  name: 'FAQ',
  props: ['faqs'],
  methods: {
      more(){
        this.$router.push('/faq');
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
      }
  }
}
</script>

<style scoped>
section{
    padding: 70px 0;
}
.vs-collapse-item {
    width: 50vw;
    border-bottom: 1px solid #eaeaea !important;
}
@media only screen and (max-width: 992px) {
    .vs-collapse-item {
        width: 70vw;
    }
}
@media only screen and (max-width: 600px) {
    .vs-collapse-item {
        width: 90vw;
    }
}
</style>
