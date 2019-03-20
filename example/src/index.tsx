import React from "react";
import ReactDOM from "react-dom";
import {
  ConfirmModalProvider,
  useConfirmModal
} from "./confirm-modal-context-hook/index";

type ModalProps = {
  message: string;
  exec: (...args: any[]) => void;
  cancel: () => void;
};

function Modal({ message, exec, cancel }: ModalProps) {
  return (
    <div
      style={{
        width: "700px",
        height: "400px",
        margin: "0 auto",
        backgroundColor: "white"
      }}
    >
      <h1>{message}</h1>
      <button onClick={exec}>Yes</button>
      <button onClick={cancel}>No</button>
    </div>
  );
}

function Content() {
  const configureModal = useConfirmModal({
    exec: () => console.log("EXEC!!"),
    message: 'May I output "EXEC!!" to console?'
  });
  return (
    <div>
      <h1>Confirm Modal Context Hook</h1>
      <button onClick={() => configureModal()}>モーダルを開ける</button>
    </div>
  );
}

function App() {
  return (
    <ConfirmModalProvider Component={Modal}>
      <Content />
    </ConfirmModalProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
