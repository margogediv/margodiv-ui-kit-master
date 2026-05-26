import { FC } from "react";
import { SwitchInput, SwitchLabel, SwitchWrapper } from "./styles";
import { Loading } from "../../icons/Loading";

export interface SwitchProps {
  uniqId?: string;
  labelFor?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size: "default" | "small";
  label?: string;
  className?: string;
  "aria-label"?: string;
}

export const Switch: FC<SwitchProps> = ({
  checked,
  className,
  defaultChecked,
  disabled,
  loading,
  size = "default",
  labelFor = "switch",
  label,
  uniqId = "switch",
  "aria-label": ariaLabel,
}) => {
  return (
    <SwitchWrapper className={className}>
      {label && <div>{label}</div>}
      <>
        <SwitchInput
          disabled={disabled || loading}
          checked={checked}
          defaultChecked={defaultChecked}
          type="checkbox"
          id={uniqId}
          size={size}
          loading={loading}
          aria-label={ariaLabel}
        />
        <SwitchLabel htmlFor={labelFor}>
          <div>
            <Loading />
          </div>
        </SwitchLabel>
      </>
    </SwitchWrapper>
  );
};
