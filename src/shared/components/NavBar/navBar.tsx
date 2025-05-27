import cardStyles from '@/shared/css/card.module.css';
import klimaProtocolIcon from './images/klimaProtocol.svg';
import Image from 'next/image';
import allocateIcon from './images/allocate.svg';
import burnCarbonIcon from './images/burn-carbon.svg';
import carbonUniversityIcon from './images/carbon-university.svg';
import myHoldingsIcon from './images/my-holdings.svg';
import protocolOverviewIcon from './images/protocol-overview.svg';
import sellCarbonIcon from './images/sell-carbon.svg';
import NavBarItem from './navBarItem';

export default function NavBar() {
  return (
    <div className="flex flex-col gap-3 border-r-1 border-void-20 px-3 py-6 min-h-screen">
      <Image
        src={klimaProtocolIcon}
        alt="klimaProtocol Logo"
        height={36}
        priority
      />
      <div className={cardStyles.separator} />
      <div>
        <div>My Wallet Address:</div>
        <div style={{ color: 'red' }}>0x123...456</div>
      </div>
      <div className={cardStyles.separator} />
      <div>
        <NavBarItem icon={protocolOverviewIcon} label="Protocol Overview" />
        <NavBarItem icon={myHoldingsIcon} label="My Holdings" />
        <NavBarItem icon={burnCarbonIcon} label="Burn Carbon" />
        <NavBarItem icon={sellCarbonIcon} label="Sell Carbon" />
        <NavBarItem icon={allocateIcon} label="Allocate" />
        <NavBarItem icon={carbonUniversityIcon} label="Carbon University" />
      </div>
    </div>
  );
}
