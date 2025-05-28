import Button from "@/shared/components/Button/Button";
import Card, { CardProps } from "@/shared/components/Card/Card";

export default function KlimaPriceCard(props: CardProps) {
    return (
      <Card {...props} title="KLIMA Price">
        789,000
        <Button className="w-full">Buy Klima</Button>
      </Card>
    );
  }
  