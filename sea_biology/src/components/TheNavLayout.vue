<template>

<nav class="navbar navbar-expand-lg text-center bg-light zindex_2">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="../assets/navLogo.png" class="img-fluid" style="width:64px;" alt="navLogo.png">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">展 館</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">活 動</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">服 務</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            各類 公告
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">展館</a></li>
            <li><a class="dropdown-item" href="#">活動</a></li>
            <li><a class="dropdown-item" href="#">服務</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
.navbar {
    background-color: rgba(255, 255, 255, 0.4) !important;
    box-shadow: 0px 2px 3px #2E72E9,
    0px 2px 3px #5090EC,
    0px 2px 3px #74B0F0,
    0px 2px 3px #C6CDE9;
}
</style>