import cardStyles from '@/shared/css/card.module.css';
import clsx from 'clsx';



export type CardProps = {
  className?: string
}
type Props = CardProps & {
  children: React.ReactNode;
}
export default function Card({
    children,
    className
  }: Props) {
  return (
    <div className={clsx(cardStyles.card, className)}>
        {children}
    </div>
  );
}
