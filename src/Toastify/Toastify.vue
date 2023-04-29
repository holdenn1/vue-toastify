<template>
  <transition-group name="toastify" tag="div" class="toastify-container">
    <div
      v-for="toastify in toast.notifications"
      :key="toastify.id"
      :class="[{ 'show-toast': toastify.isShow }, toastifyTheme]"
    >
      <img class="toastify-img" :src="iconStatus(toastify.status)" />
      <p class="toastify-text">
        {{ toastify.message }}
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </p>
    </div>
  </transition-group>
</template>

<script setup lang="ts">
import { useToast } from "@/hooks/useToast";
import { useOptions } from "@/hooks/useOptions";
import successImg from "@/icons/success.png";
import errorImg from "@/icons/error.png";
import warningImg from "@/icons/warning.png";
import { computed } from "vue";

const { toast } = useToast();
const { option } = useOptions();

const toastifyTheme = computed(() => {
  return option.value?.theme === "day" ? "toastify-day" : "toastify-night";
});

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
</script>

<style lang="scss" scoped>
@import "@/styles/mixins/contentCenterFlex.scss";
@import "@/styles/mixins/defauldSizesToastify.scss";
@import "@/styles/mixins/toast.scss";
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
  .toastify-day {
    @include toast(#ffff, black, 0 0 10px rgba(0, 0, 0, 0.2));
  }
  .toastify-night {
    @include toast(black, #fff, 0 0 10px rgba(0, 0, 0, 0.2));
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
