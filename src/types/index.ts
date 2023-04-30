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
  | "top-center"
  | "top-left"
  | "top-right"
  | "bottom-right"
  | "bottom-left";

export type BaseOptions = {
  theme: Thema;
  autoClose: number;
  position: Position;
  width: number;
  height: number;
  offset: number;
};

export type ToastifyOptions = Partial<BaseOptions>;
