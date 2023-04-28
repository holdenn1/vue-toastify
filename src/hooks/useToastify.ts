import { useToast } from "@/hooks/useToast";

export function useToastify() {
  const { notify } = useToast();
  function toastify(type: string, message: string) {
    notify(type, message);
  }

  return {
    toastify,
  };
}
