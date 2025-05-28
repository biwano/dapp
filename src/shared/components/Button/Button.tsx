import clsx from 'clsx';
import styles from './button.module.css';



type Props = {
  children: React.ReactNode;
  className?: string;
}
export default function Button({
    children,
    className,
  }: Props) {
  return (
    <button className={clsx(styles.button, className)}>
        {children}
    </button>
  );
}
