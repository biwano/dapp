import Button from '@/shared/components/Button/Button';
import Card, { CardProps } from '@/shared/components/Card/Card';

type Props = CardProps & {
  buttonText: string;
};

export default function StatCard(props: Props) {
  return (
    <Card {...props} tooltipPosition="far">
      789,000
      <Button className="w-full">{props.buttonText}</Button>
    </Card>
  );
}
