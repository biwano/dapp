import cardStyles from '@/shared/css/card.module.css';
import clsx from 'clsx';



export type CardProps = {
  className?: string
  title?: string
}
type Props = CardProps & {
  children: React.ReactNode;
}
export default function Card({
    children,
    className,
    title
  }: Props) {
  return (
    <div className={clsx(cardStyles.card, className)}>
        <div className={cardStyles.title}>{title}</div>
        {children}
    </div>
  );
}
