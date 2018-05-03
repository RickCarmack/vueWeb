<template>
  <div id="app">
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand active" href="/#/">{{ webSite }}</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a href="/#/">Home</a></li>
      <li><a href="/#/About">{{ page1 }}</a></li>
      <li><a href="/#/Contact">{{ page2 }}</a></li>
      <li><a href="/#/Portfolio">{{ page3 }}</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
  </nav>
    <router-view/>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      webSite: 'RC Computing Services',
      page1: 'About Us',
      page2: 'Contact Us',
      page3: 'Portfolio'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
