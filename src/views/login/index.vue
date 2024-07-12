<template>
  <div class="login-container flx-center">
    <div class="login-bg">
      <video class="video-css" src="@/assets/video/globe.mp4" playsinline autoplay loop muted></video>
    </div>
    <div class="login-box">
      <!-- <SwitchDark class="dark" /> -->
      <div class="login-left font-bold">我的心是旷野的鸟，在你的眼睛里找到了它的天空 - 泰戈尔</div>
      <div class="font-bold title-login">让每一行代码都有改变世界的力量</div>

      <div class="login-form">
        <div class="login-logo">
          <!-- <img class="login-icon" src="@/assets/images/logo.png" alt="" /> -->
          <h2 class="logo-text">BoJack Admin 期待你的加入...</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import LoginForm from "./components/LoginForm.vue";
// import SwitchDark from "@/components/SwitchDark/index.vue";
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
