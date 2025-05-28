import { CardProps } from '@/shared/components/Card/Card';
import StatCard from './StatCard';

export default function TotalKlimaXLockedCard(props: CardProps) {
  return (
    <StatCard
      {...props}
      buttonText="Buy KlimaX"
      title="Total KLIMAX Locked"
      tooltip="KlimaX locks earn risky yield and may be unlocked after 24hrs."
      tooltipPosition="far"
    />
  );
}
