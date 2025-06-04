'use client';

import { formatAddress } from '@/shared/utils/web3.utils';
import { ConnectKitButton } from 'connectkit';
import { useAccount, useDisconnect } from 'wagmi';
import Button from '../Button/Button';

export default function ConnectButton() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div>
      {address ? (
        <>
          <div>My Wallet Address:</div>
          <div className="text-void-40">{`${formatAddress(address)}`}</div>
          <Button onClick={() => disconnect()}>Disconnect</Button>
        </>
      ) : (
        <ConnectKitButton.Custom>
          {({ isConnecting, show }) => {
            return (
              <Button onClick={show} className="w-full">
                {isConnecting ? 'Connecting...' : 'Connect wallet'}
              </Button>
            );
          }}
        </ConnectKitButton.Custom>
      )}
    </div>
  );
}
