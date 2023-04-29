<template>
  <transition-group name="toastify" tag="div" class="toastify-container">
    <div
      v-for="toastify in toast.notifications"
      :key="toastify.id"
      class="toastify"
      :class="{ 'show-toast': toastify.isShow }"
    >
      <img class="toastify-img" :src="iconStatus(toastify.status)" />
      <p class="toastify__text">
        {{ toastify.message }}
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </p>
    </div>
  </transition-group>
</template>

<script setup lang="ts">
import { useToast } from "@/hooks/useToast";
import successImg from "@/icons/success.png";
import errorImg from "@/icons/error.png";
import warningImg from "@/icons/warning.png";

function iconStatus(type: string) {
  switch (type) {
    case "success": {
      return successImg;
      break;
    }
    case "error": {
      return errorImg;
      break;
    }
    case "warning": {
      return warningImg;
      break;
    }
  }
}
const { toast } = useToast();
</script>

<style lang="scss" scoped>
.toastify-container {
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  pointer-events: none;
  z-index: 9999;
  .toastify {
    position: relative;
    top: 0px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 5px;
    min-width: 200px;
    max-width: 720px;
    min-height: 80px;
    max-height: 420px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 0px 20px 20px;
    pointer-events: auto;
    overflow: auto;
    text-align: justify;
    display: flex;
    justify-content: center;
    align-items: center;
    .toastify-img {
      margin-right: 20px;
    }

    &__text {
      font-family: Raleway;
      font-weight: 500;
      line-height: 140%;
    }
  }
  .show-toastify {
    opacity: 1;
  }
  .toastify-move,
  .toastify-enter-active,
  .toastify-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .toastify-enter-from,
  .toastify-leave-to {
    opacity: 0;
    top: -50px;
  }
}
</style>
