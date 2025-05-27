import cardStyles from "@/shared/css/card.module.css";
import clsx from "clsx";
import KlimaBondedCard from "./cards/KlimaBondedCard";
import KlimaPriceCard from "./cards/KlimaPriceCard";
import KlimaXPriceCard from "./cards/KlimaXPriceCard";
import TotalKlimaXLockedCard from "./cards/TotalKlimaXLockedCard";

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row ">
        <KlimaBondedCard className={clsx('grow-1', cardStyles.rightLinked)}/>
        <KlimaPriceCard className={clsx('grow-1', cardStyles.leftLinked, cardStyles.rightLinked)} />
        <KlimaXPriceCard className={clsx('grow-1', cardStyles.leftLinked, cardStyles.rightLinked)} />
        <TotalKlimaXLockedCard className={clsx('grow-1', cardStyles.leftLinked)} />
        </div>
    </div>
  );
}
