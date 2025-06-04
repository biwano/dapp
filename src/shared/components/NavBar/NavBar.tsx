import cardStyles from '@/shared/css/card.module.css';
import Image from 'next/image';
import klimaProtocolIcon from './images/klimaProtocol.svg';
import { navItems } from './navbar.utils';
import NavBarItem from './NavBarItem';

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
        {navItems.map((item) => (
          <NavBarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
}
