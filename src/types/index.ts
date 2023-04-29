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

export type Thema = "day" | "night";

export type ToastOptions = {
  theme: Thema;
  autoClose: number;
};

export type ToastifyOptions = Partial<ToastOptions>;
