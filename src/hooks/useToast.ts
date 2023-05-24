import { useOptions } from "./useOptions";
import type { Notify, Toast, ToastifyStatus } from "./../types";
import { computed, nextTick, ref } from "vue";

const toast = ref<Toast>({
  notifications: [],
  timeoutId: 0,
  startTime: 0,
  remainingTime: 0,
});

export function useToast() {
  const { option } = useOptions();

  const daley = computed(() => {
    return toast.value.remainingTime !== 0
      ? toast.value.remainingTime
      : option.value?.autoClose || 3000;
  });

  const removeNotification = (id: number) => {
    const notificationsInx = computed(() => {
      return toast.value.notifications.findIndex((notify) => notify.id === id);
    });
    if (notificationsInx.value !== -1) {
      const notification = toast.value.notifications[notificationsInx.value];
      notification.isShow = false;
      nextTick(() => {
        toast.value.notifications.splice(notificationsInx.value, 1);
      });
    }
  };

  function notify(status: ToastifyStatus, message: string) {
    const notification: Notify = {
      id: Date.now(),
      status: status,
      message: message,
      isShow: false,
      timeoutId: 0,
    };
    toast.value.notifications.push(notification);
    nextTick(() => {
      toast.value.notifications.forEach((notice) => {
        if (notice.id == notification.id) {
          notice.isShow = true;
        }
        return notice;
      });
    });
    timerToAutoClose(notification.id);
  }

  function timerToAutoClose(notificationId: number) {
    if (!toast.value.remainingTime) {
      toast.value.startTime = Date.now();
    }
    toast.value.timeoutId = window.setTimeout(() => {
      removeNotification(notificationId);
      toast.value.remainingTime = 0;
    }, daley.value);
    toast.value.notifications.map((notice) => {
      if (notice.id === notificationId) {
        notice.timeoutId = toast.value.timeoutId;
      }
      return notice;
    });
  }

  function stopTimer(timeoutID: number) {
    clearTimeout(timeoutID);
    const elapsedTime = Date.now() - toast.value.startTime;
    toast.value.remainingTime = (option.value?.autoClose || 3000) - elapsedTime;
  }
  return {
    toast,
    notify,
    removeNotification,
    stopTimer,
    timerToAutoClose,
  };
}
