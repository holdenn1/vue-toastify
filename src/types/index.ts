export type ToastifyStatus = "default" | "success" | "warning" | "error";

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
export type Position =
  | "center"
  | "top-left"
  | "top-right"
  | "bottom-right"
  | "bottom-left";

export type ToastOptions = {
  theme: Thema;
  autoClose: number;
  positiom: Position;
};

export type ToastifyOptions = Partial<ToastOptions>;
