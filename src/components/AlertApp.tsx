import Alert from './Alert';

export default function AlertApp() {
  return (
    <>
      <Alert />
      <Alert type="success" />
      <Alert type="error" />
    </>
  );
}
