import cardStyles from '@/shared/css/card.module.css';
import clsx from 'clsx';
import Tooltip from '../Tooltip/Tooltip';

export type CardProps = {
  className?: string;
  title?: string;
  tooltip?: string;
  tooltipPosition?: 'close' | 'far';
};
type Props = CardProps & {
  children: React.ReactNode;
};
export default function Card({
  children,
  className,
  title,
  tooltip,
  tooltipPosition = 'close',
}: Props) {
  return (
    <div className={clsx(cardStyles.card, className)}>
      <div
        className={clsx('flex flex-row w-full items-center gap-1 pb-2', {
          'justify-between': tooltipPosition == 'far',
        })}
      >
        <div className={cardStyles.title}>{title}</div>
        {tooltip && <Tooltip content={tooltip} />}
      </div>
      {children}
    </div>
  );
}
