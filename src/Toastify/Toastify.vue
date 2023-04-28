<template>
  <transition-group tag="div" class="toast-container">
    <div
      v-for="notice in toast.notifications"
      :key="notice.id"
      class="toast"
      :class="{ 'show-toast': notice.isShow }"
    >
      <img
        class="toastify-img"
        :class="`status-img--`"
        :src="iconType(notice.type)"
      />
      <p class="toast__text">
        {{ notice.message }}
      </p>
    </div>
  </transition-group>
</template>

<script setup lang="ts">
import { useToast } from "@/hooks/useToast";
import successImg from "@/icons/success.png";
import errorImg from "@/icons/error.png";
import warningImg from "@/icons/warning.png";

function iconType(type: string) {
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
.toast-container {
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  pointer-events: none;
  z-index: 9999;
  .toast {
    position: relative;
    top: 0px;
    padding: 20px;
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
  .show-toast {
    top: 50px;
    opacity: 1;
  }
  .v-move,
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  .v-leave-active {
    position: absolute;
  }
}
</style>
