// import './Alert.css';
import css from './Alert.module.css';

// export default function Alert() {
//   return <p className="alert">This is alert text</p>;
// }

export default function Alert() {
  return <p className={css.alert}>This is alert text</p>;
}
