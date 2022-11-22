<template>

  <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="zindex_2">
    <path fill="#a2d9ff" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,208C384,235,480,213,576,181.3C672,149,768,107,864,112C960,117,1056,171,1152,165.3C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
  </svg> -->


  <nav class="navbar navbar-expand-lg bg-light zindex_2">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
          <!-- <img src="../assets/navLogo.png" class="img-fluid" style="width:64px;" alt="navLogo.png"> -->
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item mx-3">
            <router-link class="nav-link text-white" to="/" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="500">展 館</router-link>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link text-white" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="500" href="#">活 動</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link text-white" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="500" href="#">服 務</a>
          </li>
          <li class="nav-item mx-3 dropdown" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="500">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              各 類 公 告
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">展館</a></li>
              <li><a class="dropdown-item" href="#">活動</a></li>
              <li><a class="dropdown-item" href="#">服務</a></li>
            </ul>
          </li>

          <li class="nav-item mx-3 dropdown" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="500">
            <router-link class="nav-link text-white" to="/TheLogin">
              線 上 預 約
            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  <router-view></router-view>

</template>
    
<script scoped>
/*eslint-disable*/


export default {
    
    name: 'TheNavLayout',
    methods: {

    },
    setup() {           

    
    }

}


</script>

<style scoped>
nav {
    background-size: cover;          
    text-align: center;
    /* position: absolute;   */
    top: 0px; 
    left: 0;
    right: 0;
    padding: 0 0 6rem 0;     
    margin-bottom: 0px;
    width: 100%;
    box-sizing: border-box;
    clear: both;   
}

.navbar {
    background: linear-gradient(to right, #2E55E0, #3971E0, #57B3E4) !important;
    /* background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2E72E9" fill-opacity="1" d="M0,32L120,64C240,96,480,160,720,160C960,160,1200,96,1320,64L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>') !important;     */
    background-size:cover;
    padding: 15px 0;
    box-shadow: 
    0px 2px 10px #74B0F0,
    0px 2px 30px #ffffff,
    0px 2px 30px #ffffff;
}
</style>