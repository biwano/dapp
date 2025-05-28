import { CardProps } from '@/shared/components/Card/Card';
import StatCard from './StatCard';

export default function KlimaPriceCard(props: CardProps) {
  return (
    <StatCard
      {...props}
      buttonText="Buy KLIMA"
      title="KLIMA Price"
      tooltip="KLIMA is the governance token for the KlimaDAO. It is used to vote on proposals and make decisions for the protocol."
    />
  );
}
