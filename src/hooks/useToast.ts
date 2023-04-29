import type { Notify, Toast, ToastifyStatus } from "@/types";
import { computed, nextTick, ref } from "vue";

const toast = ref<Toast>({
  notifications: [],
});

export function useToast() {
  
  const removeNotification = (id: number) => {
    const notificationsInx = computed(() => {
      return toast.value.notifications.findIndex((notify) => notify.id === id);
    });
    if (notificationsInx.value !== -1) {
      const notification = toast.value.notifications[notificationsInx.value];
      notification.isShow = false;
      setTimeout(() => {
        toast.value.notifications.splice(notificationsInx.value, 1);
      }, 300);
    }
  };

  function notify(status: ToastifyStatus, message: string) {
    const notification: Notify = {
      id: Date.now(),
      status: status,
      message: message,
      isShow: false,
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
    setTimeout(() => {
      removeNotification(notification.id);
    }, 3000);
  }

  return {
    toast,
    notify,
  };
}
