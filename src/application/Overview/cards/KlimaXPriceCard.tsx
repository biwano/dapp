import { CardProps } from '@/shared/components/Card/Card';
import UsdIcon from '@/shared/images/usd.svg';
import StatCard from './StatCard';

export default function KlimaXPriceCard(props: CardProps) {
  return (
    <StatCard
      {...props}
      buttonText="Lock KLIMAX"
      title="KLIMAX Price"
      tooltip="KLIMAX is the governance token for the KlimaDAO. It is used to vote on proposals and make decisions for the protocol."
      value={0}
      icon={UsdIcon}
      changePercent={-0.1}
    />
  );
}
