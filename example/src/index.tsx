import React from "react";
import ReactDOM from "react-dom";
import {
  ConfirmModalProvider,
  useConfirmModal
} from "./confirm-modal-context-hook/index";

type ModalProps = {
  message: string;
  exec: (...args: any[]) => void;
};

function Modal({ message, exec }: ModalProps) {
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={exec}>Exec</button>
    </div>
  );
}

function Content() {
  const configureModal = useConfirmModal({
    exec: () => console.log("EXEC!!"),
    message: "THIS IS MODAL"
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
