export type ToastifyStatus = "default" | "success" | "warning" | "error";

export type Thema = "day" | "night";

type TimeoutID = number;

export type Notify = {
  id: number;
  status: ToastifyStatus;
  message: string;
  isShow: boolean;
  timeoutId: TimeoutID;
};

export type Toast = {
  notifications: Notify[];
  timeoutId: TimeoutID;
  startTime: number;
  remainingTime: number;
};

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
  showCloseButton: boolean;
  closeOnClick: boolean;
  pauseTimerOnHover: boolean;
  cover: {
    success?: string;
    warning?: string;
    error?: string;
  };
};

export type ToastifyOptions = Partial<BaseOptions>;
export * from './../ToastifyPlugin/index'
