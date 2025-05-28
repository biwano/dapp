import cardStyles from '@/shared/css/card.module.css';
import clsx from 'clsx';
import Tooltip from '../Tooltip/Tooltip';



export type CardProps = {
  className?: string
  title?: string
  tooltip?: string
}
type Props = CardProps & {
  children: React.ReactNode;
}
export default function Card({
    children,
    className,
    title,
    tooltip
  }: Props) {
  return (
    <div className={clsx(cardStyles.card, className)}>
        <div className="flex flex-row justify-between w-full items-center">
            <div className={cardStyles.title}>{title}</div>
            {tooltip && <Tooltip
            content={tooltip}
            />}
        </div>
        {children}
    </div>
  );
}
