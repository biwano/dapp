import Card, { CardProps } from '@/shared/components/Card/Card';

export default function KlimaBondYieldRatesCard(props: CardProps) {
  return (
    <Card
      {...props}
      title="KLIMA Bond Yield Rates"
      tooltip="There should be a tooltip here"
    >
      <div>Chart goes here</div>
    </Card>
  );
}
