import React, { useState } from "react";
import ConfirmModalContext, { AnyFunc } from "./ConfirmModalContext";

type ModalProps = {
  exec: AnyFunc;
  message: string;
};

type Props = {
  Component: React.FC<ModalProps>;
  children: React.ReactNode;
};

export function ConfirmModalProvider({ Component, children }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [exec, setExec] = useState<AnyFunc>(() => ({}));
  return (
    <>
      <ConfirmModalContext.Provider
        value={{
          isModalOpen,
          setIsModalOpen,
          message,
          setMessage,
          exec,
          setExec: (exec: AnyFunc) => {
            setExec(() => async () => {
              await exec();
              setIsModalOpen(false);
            });
          }
        }}
      >
        {children}
      </ConfirmModalContext.Provider>
      {isModalOpen && <Component exec={exec} message={message} />}
    </>
  );
}
