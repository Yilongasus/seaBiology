<template>
    <div class="container">
        <div class="error">
        <span>4</span>
        <span>0</span>
        <span>4</span>
        </div>
        <div class="message">Oops! 找不到頁面。</div>
        <router-link to="/">返回首頁</router-link>
    </div>
</template>

<script>
    export default {
        name: 'NotFound',
    };
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #154166; /* 背景色 */
        color: #D09366; /* 字體顏色 */
    }

    .container {
        text-align: center;
    }

    .error {
        font-size: 150px;
        font-weight: bold;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .error span {
        display: inline-block;
        animation: spin 2s linear infinite;
    }

    .error span:nth-child(1),
    .error span:nth-child(3) {
        animation: heartbeat 1s infinite ease-in-out;
    }

    @keyframes heartbeat {
        0%, 100% {
            transform: scale(1);
        }
        25% {
            transform: scale(1.1);
        }
        50% {
            transform: scale(1.2);
        }
        75% {
            transform: scale(1.1);
        }
    }

    .error span:nth-child(3) {
        animation: heartbeatSlow 1s infinite ease-in-out;
    }

    @keyframes heartbeatSlow {
        0%, 100% {
            transform: scale(1.2);
        }
        25% {
            transform: scale(1.1);
        }
        50% {
            transform: scale(1);
        }
        75% {
            transform: scale(1.1);
        }
    }

    @keyframes spin {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }

    .message {
        font-size: 20px;
    }

    .button {
        margin-top: 25px;
    }

    a {
        text-decoration: none;
        color: #D09366;
        font-weight: bolder;
        border: 2px solid #D09366;
        padding: 10px 20px;
        border-radius: 5px;
        transition: background-color 0.3s, color 0.3s;
    }

    a:hover {
        background-color: #D09366;
        color: #154166;
    }
</style>
