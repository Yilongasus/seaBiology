<template>
    <button class="sidebar-toggle">
        <!-- 使用Font Awesome的Icon -->
        <i class="fas fa-bars"></i>
    </button>  

    <div class="sidebar sidebar-header">
        <!-- 匯入標題圖片 -->
        <img src="logo.svg" class="logo" alt="" />
        <ul class="links">
            <li>
                <a href="index.html">home</a>
            </li>
            <li>
                <a href="about.html">about</a>
            </li>
            <li>
                <a href="projects.html">projects</a>
            </li>
            <li>
                <a href="contact.html">contact</a>
            </li>
        </ul>
        <!-- 關閉按鈕 -->
        <button class="close-btn">
            <i class="fas fa-times"></i>
        </button>
  </div>    
</template>

<style>
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--clr-white);
        display: grid;
        grid-template-rows: auto 1fr auto;
        row-gap: 1rem;
        box-shadow: var(--clr-red-dark);
        transition: var(--transition);
        transform: translate(-100%); /* 用此屬性控制縮放 */
    }
</style>

<script>
    export default {
        setup() {
            const toggleBtn = document.querySelector(".sidebar-toggle");
            const closeBtn = document.querySelector(".close-btn");
            const sidebar = document.querySelector(".sidebar");

            toggleBtn.addEventListener("click", function () {
                sidebar.classList.toggle("show-sidebar");
            });

            closeBtn.addEventListener("click", function () {
                sidebar.classList.remove("show-sidebar");
            });
        }
    }
</script>