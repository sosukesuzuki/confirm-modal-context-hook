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
      {isModalOpen && (
        <>
          <div
            onClick={() => setIsModalOpen(false)}
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              top: 0,
              bottom: 0,
              left: 0,
              rihht: 0,
              backgroundColor: "rgba(1, 1, 1, 0.5)",
              zIndex: -1
            }}
          />
          <div style={{ backgroundColor: "white" }}>
            <Component exec={exec} message={message} />
          </div>
        </>
      )}
    </>
  );
}
