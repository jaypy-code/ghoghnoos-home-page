<template>
  <div ref="parrent" id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@font-face {
  font-family: 'Font';
  src: local('☺'),
  url('./assets/font.woff') format('woff');
}

*{
  user-select: none;
  font-family: 'Font', Tahoma, Geneva, Verdana, sans-serif;
}
html, body { height: 100%; }
html{
    scroll-behavior: smooth;
}
body {
  width: 100vw;
  margin: 0;
  overflow-x: hidden;
}
div.content a{
    color: rgb(var(--vs-danger)) !important;
}
div.content a:hover{
  text-decoration: underline;
}
.vs-sidebar{
  position: fixed !important;
  top: 0 !important;
  bottom: 0 !important;
  height: 100vh !important;
}
.vs-sidebar--background{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
