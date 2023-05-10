import { useToast } from "./../hooks/useToast";
import type { ToastifyStatus } from "./../types";

export function useToastify() {
  const { notify } = useToast();
  function toastify(status: ToastifyStatus, message: string) {
    notify(status, message);
  }
  return {
    toastify,
  };
}
