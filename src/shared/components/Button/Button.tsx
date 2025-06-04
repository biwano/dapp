import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className, onClick }: Props) {
  return (
    <button
      className={clsx(
        'flex items-center justify-center background-white border-1 border-foreground rounded-lg px-3 py-1 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
