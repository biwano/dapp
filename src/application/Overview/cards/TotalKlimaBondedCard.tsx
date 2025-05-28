import { CardProps } from '@/shared/components/Card/Card';
import StatCard from './StatCard';

export default function TotalKlimaBondedCard(props: CardProps) {
  return (
    <StatCard
      {...props}
      buttonText="Bond KLIMA"
      title="Total KLIMA Bonded"
      tooltip="Bonds are fixed income instruments that offer yield which is claimable at maturity."
      tooltipPosition="far"
    />
  );
}
