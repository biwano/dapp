import Image from 'next/image';

type NavBarItemProps = {
  icon: string;
  label: string;
};
export default function NavBarItem({ icon, label }: NavBarItemProps) {
  return (
    <div className="flex items-center gap-2 py-2">
      <Image src={icon} alt={label} width={20} height={20} />
      <div>{label}</div>
    </div>
  );
}
