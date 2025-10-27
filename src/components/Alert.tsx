// import './Alert.css';
import clsx from 'clsx';
import css from './Alert.module.css';

// export default function Alert() {
//   return <p className="alert">This is alert text</p>;
// }

// export default function Alert() {
//   return <p className={css.alert}>This is alert text</p>;
// }

interface AlertProps {
  type?: 'success' | 'error';
}

export default function Alert({ type }: AlertProps) {
  return (
    <p className={clsx(css.alert, type && css[type])}>
      This is a default alert text
    </p>
  );
}
