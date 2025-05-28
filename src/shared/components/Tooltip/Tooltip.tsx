import Image from 'next/image';
import { Tooltip } from 'radix-ui';
import helpIcon from './help.svg';
import styles from './tooltip.module.css';



type Props = {
  content: React.ReactNode;
}
export default function Card({
  content
  }: Props) {
    return (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div>
              <Image src={helpIcon} alt={"Help"} width={16} height={16} />
           
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className={styles.TooltipContent} sideOffset={5}>
              {content}
              <Tooltip.Arrow className={styles.TooltipArrow} />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
}
