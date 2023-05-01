<template>
  <transition-group
    name="toastify"
    tag="div"
    :class="['toastify-container', toastifyPosition]"
    :style="topAndBottomToastify"
  >
    <div
      v-for="toastify in toast.notifications"
      @click="!!option?.closeOnClick && removeNotification(toastify.id)"
      :key="toastify.id"
      :class="[{ 'show-toast': toastify.isShow }, toastifyTheme]"
      :style="toastifySize"
    >
      <img
        v-if="toastify.status !== 'default'"
        class="toastify-img"
        :src="iconStatus(toastify.status)"
      />
      <p class="toastify-text">
        {{ toastify.message }}
        Lorem ipsum dolor
      </p>
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
import { removeNotification, useToast } from "@/hooks/useToast";
import { useOptions } from "@/hooks/useOptions";
import successImg from "@/icons/success.png";
import errorImg from "@/icons/error.png";
import warningImg from "@/icons/warning.png";
import closeDarkTheme from "@/icons/close-dark-theme.png";
import closeBrightTheme from "@/icons/close-bright-theme.png";
import { computed } from "vue";

const { toast } = useToast();
const { option } = useOptions();

const toastifyIconIcon = computed(() => {
  return option.value?.theme === "day" ? closeBrightTheme : closeDarkTheme;
});
const toastifyTheme = computed(() => {
  return option.value?.theme === "day" ? "toastify-day" : "toastify-night";
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
@import "@/styles/mixins/toastifyAnimation.scss";
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
}
.toast-top-center {
  @include toastPosition(center);
  @include toastifyAnimation(translate(0, -100px));
  .toastify-leave-active {
    position: absolute;
  }
}
.toast-top-left {
  @include toastPosition(start);
  @include toastifyAnimation(translate(-100px, 0));
  .toastify-leave-active {
    position: absolute;
  }
}
.toast-top-right {
  @include toastPosition(end);
  @include toastifyAnimation(translate(100px, 0));
  .toastify-leave-active {
    position: absolute;
  }
}
.toast-bottom-right {
  @include toastPosition(end);
  justify-content: end;
  @include toastifyAnimation(translate(100px, 0));
  .toastify-day,
  .toastify-night {
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.toast-bottom-left {
  @include toastPosition(start);
  justify-content: end;
  @include toastifyAnimation(translate(-100px, 0));
  .toastify-day,
  .toastify-night {
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
