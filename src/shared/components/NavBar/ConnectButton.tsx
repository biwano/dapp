'use client';

import { formatAddress } from '@/shared/utils/web3.utils';
import { ConnectKitButton, useIsMounted } from 'connectkit';
import { useAccount, useDisconnect } from 'wagmi';
import Button from '../Button/Button';
import Skeleton from '../Skeleton/Skeleton';

export default function ConnectButton() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const isMounted = useIsMounted();

  return (
    <div>
      {address ? (
        <>
          <div>My Wallet Address:</div>
          <div className="text-void-40">{`${formatAddress(address)}`}</div>
          <Button onClick={() => disconnect()}>Disconnect</Button>
        </>
      ) : (
        <>
          {isMounted && (
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
          {!isMounted && <Skeleton className="h-10 w-full" />}
        </>
      )}
    </div>
  );
}
