import { useOptions } from "@/hooks/useOptions";
import { computed, nextTick, ref } from "vue";

type Notify = {
  id: number;
  type: string;
  message: string;
  isShow: boolean;
};

type Toast = {
  notifications: Notify[];
};

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

  function notify(type: string, message: string) {
    const notification: Notify = {
      id: Date.now(),
      type: type,
      message: message,
      isShow: false,
    };

    switch (type) {
      case "success": {
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
        break;
      }
      case "error": {
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
        break;
      }
      case "warning": {
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
        break;
      }
    }
  }
  return {
    toast,
    notify,
  };
}
