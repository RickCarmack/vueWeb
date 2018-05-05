<template>
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-dark stylish-color">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand active" href="/#/">{{ webSite }}</a>
    </div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item"><a class="nav-link" href="/#/">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="/#/About">{{ page1 }}</a></li>
      <li class="nav-item"><a class="nav-link" href="/#/Contact">{{ page2 }}</a></li>
      <li class="nav-item"><a class="nav-link" href="/#/Services">{{ page3 }}</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
  </nav>
    <p><img src="./assets/logo.png"></p>
    <router-view/>

    <!--Footer-->
    <footer class="page-footer stylish-color-dark font-small blue pt-4 mt-4">

        <!--Footer Links-->
        <div class="container-fluid text-center text-md-left">
            <div class="row">

                <!--First column-->
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">RC Computing Services</h6>
                </div>
                <!--/.First column-->

                <!--Second column-->
                <div class="col-md-6">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Links</h6>
                    <ul class="list-unstyled">
                        <li>
                            <a href="/#/">Home Page</a>
                        </li>
                        <li>
                            <a href="/#/About">About Us</a>
                        </li>
                        <li>
                            <a href="/#/Contact">Contact Us</a>
                        </li>
                        <li>
                            <a href="/#/Services">Services</a>
                        </li>
                    </ul>
                </div>
                <!--/.Second column-->

                <!--Third column-->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p><i class="fa fa-home mr-3"></i> Fayetteville, AR, US</p>
                    <p><i class="fa fa-envelope mr-3"></i> service@rccomputing.net</p>
                    <p><i class="fa fa-phone mr-3"></i> 479.903.5502</p>
                </div>
                <!--/.Third column-->
            </div>
        </div>
        <!--/.Footer Links-->

        <!--Copyright-->
        <div class="footer-copyright py-3 text-center">
            &copy; 2018 Copyright: RC Computing Services. All Rights Reserved.
        </div>
        <!--/.Copyright-->
        </footer>
        <!--/.Footer-->
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
      page3: 'Services'
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
