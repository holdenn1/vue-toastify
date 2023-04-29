<template>
  <transition-group
    name="toastify"
    tag="div"
    :class="['toastify-container', toastifyPosition]"
  >
    <div
      v-for="toastify in toast.notifications"
      :key="toastify.id"
      :class="[{ 'show-toast': toastify.isShow }, toastifyTheme]"
    >
      <img
        v-if="toastify.status !== 'default'"
        class="toastify-img"
        :src="iconStatus(toastify.status)"
      />
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

const toastifyPosition = computed(() => {
  switch (option.value?.positiom) {
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
    case "center": {
      return "toast-center";
      break;
    }
    default: {
      return "toast-center";
    }
  }
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
@import "@/styles/mixins/toastContainer.scss";
@import "@/styles/mixins/toastPosition.scss";
@import "@/styles/mixins/toast.scss";
.toastify-container {
  @include toastConteiner;
  .toastify-day {
    @include toast(#ffff, black);
  }
  .toastify-night {
    @include toast(black, #fff);
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
.toast-center {
  @include toastPosition(center);
}
.toast-top-left {
  @include toastPosition(start);
}
.toast-top-right {
  @include toastPosition(end);
}
.toast-bottom-right {
  @include toastPosition(end);
  justify-content: end;
}
.toast-bottom-left {
  @include toastPosition(start);
  justify-content: end;
}
</style>
