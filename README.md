# confirm-modal-context-hook

## Install

```
yarn add confirm-modal-context-hook
```

## Usage

Decrale your modal component. It receive props, `message`, `exec` and `cancel`.

- `message` is a type of strings will be shown in modal.
- `exec` is a type of functions will execute a process which you want to confirm.
- `cancel` is a type of functions will close your modal.

```tsx
function Modal({ message, exec, cancel }) {
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
```

Wrap your application component with `ConfirmModalProvider`, And pass your modal component as `Component` props.
(And you can pass custom overlay component as `Overlay` props.)

```tsx
import { ConfirmModalProvider } from "confirm-modal-context-hook";

function App() {
  return (
    <ConfirmModalProvider Component={Modal} Overlay={Overlay}>
      <Content />
    </ConfirmModalProvider>
  );
}
```

Get `configureModal` func with `useConfirmModal` passed exec function and modal message string.
Use `configureModal` as trigger a danger process.

```tsx
import { useConfirmModal } from "confirm-modal-context-hook";

function Content() {
  const configureModal = useConfirmModal({
    exec: () => console.log("hoge"),
    message: 'May I output "hoge" to console?'
  });
  return (
    <div>
      <button onClick={configureModal}>output "hoge" to console.</button>
    </div>
  );
}
```

## License

MIT
