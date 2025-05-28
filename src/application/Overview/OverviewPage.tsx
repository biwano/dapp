import cardStyles from '@/shared/css/card.module.css';
import clsx from 'clsx';
import CarbonBackingCard from './cards/CarbonBackingCard';
import CarbonMarketCard from './cards/CarbonMarketCard';
import CarbonYieldCard from './cards/CarbonYieldCard';
import KlimaBondYieldRatesCard from './cards/KlimaBondedYieldRatesCard';
import KlimaPriceCard from './cards/KlimaPriceCard';
import KlimaXPriceCard from './cards/KlimaXPriceCard';
import LiquidityCard from './cards/LiquidityCard';
import LiquidityPoolRiskyYieldCard from './cards/LiquidityPoolRiskyYieldCard';
import LiquidityPoolsCard from './cards/LiquidityPoolsCard';
import TotalKlimaBondedCard from './cards/TotalKlimaBondedCard';
import TotalKlimaXLockedCard from './cards/TotalKlimaXLockedCard';

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row ">
        <TotalKlimaBondedCard
          className={clsx('grow-1', cardStyles.rightLinked)}
        />
        <KlimaPriceCard
          className={clsx(
            'grow-1',
            cardStyles.leftLinked,
            cardStyles.rightLinked
          )}
        />
        <TotalKlimaXLockedCard
          className={clsx(
            'grow-1',
            cardStyles.leftLinked,
            cardStyles.rightLinked
          )}
        />
        <KlimaXPriceCard className={clsx('grow-1', cardStyles.leftLinked)} />
      </div>
      <KlimaBondYieldRatesCard />
      <LiquidityPoolsCard />
      <LiquidityPoolRiskyYieldCard />
      <LiquidityPoolRiskyYieldCard />
      <div className="flex flex-row ">
        <CarbonBackingCard className={clsx('grow-1', cardStyles.rightLinked)} />
        <LiquidityCard className={clsx('grow-1', cardStyles.leftLinked)} />
      </div>
      <CarbonYieldCard />
      <CarbonMarketCard />
    </div>
  );
}
