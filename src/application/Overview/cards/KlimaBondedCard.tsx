import Card, { CardProps } from "@/shared/components/Card/Card";

export default function KlimaBondedCard(props: CardProps) {
    return (
      <Card {...props} title="Total KLIMA Bonded" tooltip="Bonds are fixed income instruments that offer yield which is claimable at maturity.">
        789,000
      </Card>
    );
  }
  