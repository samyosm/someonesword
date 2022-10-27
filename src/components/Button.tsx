import React from "react";
import { If, Then, Else } from "react-if";

export const Button = ({
  label,
  onPress,
  inverted = false,
}: {
  label: string;
  onPress: () => void;
  inverted?: boolean;
}) => {
  return (
    <If condition={!inverted}>
      <Then>
        <button className="bg-[#4c7cff] p-5 rounded-xl" onClick={onPress}>
          <p className="text-[#f7fafb]">{label}</p>
        </button>
      </Then>
      <Else>
        <button className="bg-[#f7fafb] p-5 rounded-xl" onClick={onPress}>
          <p className="text-[#4c7cff]">{label}</p>
        </button>
      </Else>
    </If>
  );
};
