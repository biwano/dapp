export function formatAddress(
  address: string | undefined,
  options: { startLength?: number; endLength?: number } = {}
): string {
  if (!address) return '';

  const { startLength = 4, endLength = 4 } = options;

  return `${address.slice(0, startLength + 2)}...${address.slice(-endLength)}`;
}
