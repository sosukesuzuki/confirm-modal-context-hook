import { createContext } from "react";

export type AnyFunc = (...args: any[]) => any;

type ContextType = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  message: string;
  setMessage: (message: string) => void;
  exec: AnyFunc;
  setExec: (exec: AnyFunc) => void;
};

const ConfirmModalContext = createContext<ContextType>({
  isModalOpen: null as any,
  setIsModalOpen: null as any,
  message: null as any,
  setMessage: null as any,
  exec: null as any,
  setExec: null as any
});

export default ConfirmModalContext;
