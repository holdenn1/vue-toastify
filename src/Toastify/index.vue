<template>
  <transition-group
    name="toastify"
    tag="div"
    :class="['toastify-container', toastifyPosition]"
    :style="topAndBottomToastify"
  >
    <div
      v-for="toastify in toast.notifications"
      @mouseenter="option?.pauseTimerOnHover && stopTimer(toastify.timeoutId)"
      @mouseleave="option?.pauseTimerOnHover && timerToAutoClose(toastify.id)"
      @click="!!option?.closeOnClick && removeNotification(toastify.id)"
      :key="toastify.id"
      :class="[{ 'show-toast': toastify.isShow }, toastifyTheme]"
      :style="toastifySize"
    >
      <img
        v-if="toastify.status !== 'default'"
        class="toastify-img"
        :src="toastifyCover(toastify.status)"
      />
      <div class="toastify-text">
        <p>
          {{ toastify.message }}
        </p>
      </div>
      <img
        v-if="!!option?.showCloseButton"
        @click="removeNotification(toastify.id)"
        class="toastify-close-btn"
        :src="toastifyIconIcon"
      />
    </div>
  </transition-group>
</template>

<script setup lang="ts">
import { useToast } from "./../hooks/useToast";
import { useOptions } from "./../hooks/useOptions";
import successImg from "./../assets/icons/success.png";
import errorImg from "./../assets/icons/error.png";
import warningImg from "./../assets/icons/warning.png";
import closeDarkTheme from "./../assets/icons/close-dark-theme.png";
import closeBrightTheme from "./../assets/icons/close-bright-theme.png";
import { computed } from "vue";

const { toast, removeNotification, stopTimer, timerToAutoClose } = useToast();
const { option } = useOptions();

const toastifyIconIcon = computed(() => {
  return option.value?.theme === "day" ? closeBrightTheme : closeDarkTheme;
});

const toastifyTheme = computed(() => {
  return option.value?.theme === "night" ? "toastify-night" : "toastify-day";
});

const toastifySize = computed(() => {
  return {
    width: option.value?.width + "px",
    height: option.value?.height + "px",
  };
});

const toastifyPosition = computed(() => {
  switch (option.value?.position) {
    case "top-left": {
      return "toast-top-left";
      break;
    }
    case "top-right": {
      return "toast-top-right";
      break;
    }
    case "bottom-right": {
      return "toast-bottom-right";
      break;
    }
    case "bottom-left": {
      return "toast-bottom-left";
      break;
    }
    case "top-center": {
      return "toast-top-center";
      break;
    }
    default: {
      return "toast-top-center";
    }
  }
});

const topAndBottomToastify = computed(() => {
  const isTop = toastifyPosition.value?.includes("toast-top");
  if (isTop) {
    return { top: option.value?.offset + "px" };
  } else {
    return { bottom: option.value?.offset + "px" };
  }
});

function toastifyCover(type: string) {
  switch (type) {
    case "success": {
      return option.value?.cover?.success
        ? option.value?.cover?.success
        : successImg;
      break;
    }
    case "warning": {
      return option.value?.cover?.warning
        ? option.value?.cover?.warning
        : warningImg;
      break;
    }
    case "error": {
      return option.value?.cover?.error ? option.value?.cover?.error : errorImg;
      break;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../styles"
</style>
