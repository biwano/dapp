import '@/shared/css/global.css';
import Image from 'next/image';
import discordIcon from './images/discord.svg';
import telegramIcon from './images/telegram.svg';
import twitterIcon from './images/twitter.svg';

export default function Footer() {
  return (
    <div className="flex flex-row background-void-80 foreground-white p-10 justify-between">
      <div className="flex flex-row gap-10">
        <div>KlimaProtocol.com</div>
        <div>Resources</div>
        <div>Disclaimer</div>
        <div>Contact</div>
      </div>
      <div className="flex flex-row gap-10">
        <div>
          <div>© 2025 Klima Protocol. All rights reserved.</div>
        </div>
        <div className="flex flex-rox gap-4">
          <Image src={twitterIcon} alt="Twitter" />
          <Image src={discordIcon} alt="Discord" />
          <Image src={telegramIcon} alt="Telegram" />
        </div>
      </div>
    </div>
  );
}
