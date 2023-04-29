export type ToastifyStatus = "success" | "warning" | "error";

export type Notify = {
  id: number;
  status: ToastifyStatus;
  message: string;
  isShow: boolean;
};

export type Toast = {
  notifications: Notify[];
};
