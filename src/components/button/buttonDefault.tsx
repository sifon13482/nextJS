import { FC } from "react";

type ButtonDefaultProps = {
  name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export const ButtonDefault: FC<ButtonDefaultProps> = ({
  onClick,
  name,
  disabled,
}) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {name}
    </button>
  );
};
