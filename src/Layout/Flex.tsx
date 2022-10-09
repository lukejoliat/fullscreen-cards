import { FC } from "react";

interface FlexProps {
  children: any;
  direction: string;
  wrap: boolean;
  className: string;
}

const Flex: FC<FlexProps> = ({ children, direction, wrap, className }) => {
  return (
    <div className={`flex ${direction} ${wrap ? "wrap" : ""} ${className}`}>
      {children}
    </div>
  );
};

export default Flex;
