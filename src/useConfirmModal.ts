import { useContext } from "react";
import ConfirmModalContext, { AnyFunc } from "./ConfirmModalContext";

type Params = {
  exec: AnyFunc;
  message: string;
};

export function useConfirmModal({ exec, message }: Params) {
  const { setIsModalOpen, setMessage, setExec } = useContext(
    ConfirmModalContext
  );

  return function() {
    setMessage(message);
    setExec(exec);
    setIsModalOpen(true);
  };
}
