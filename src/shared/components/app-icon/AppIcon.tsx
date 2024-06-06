import Image from "next/image";

interface IProps {
  icon: string;
  width?: number;
  height?: number;
}

const AppIcon: React.FC<IProps> = ({ icon, width = 20, height = 20 }) => {
  return (
    <Image
      src={`icons/${icon}-icon.svg`}
      width={width}
      height={height}
      alt={icon}
    />
  );
};
export default AppIcon;
