import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";
import { Loading } from "../../icons/Loading";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: "primary" | "default" | "dashed" | "text" | "link";
  size?: "large" | "default" | "small";
  shape?: "default" | "round" | "circle";
  danger?: boolean;
  ghost?: boolean;
  loading?: boolean;
  block?: boolean;
  icon?: ReactNode;
  htmlType?: "button" | "submit" | "reset";
}

export const Button: FC<ButtonProps> = ({
  children,
  type = "default",
  size = "default",
  shape = "default",
  danger = false,
  ghost = false,
  loading = false,
  block = false,
  icon,
  disabled,
  htmlType = "button",
  className,
  ...rest
}) => {
  const iconOnly = !children && (!!icon || loading);

  return (
    <StyledButton
      type={htmlType}
      btnType={type}
      btnSize={size}
      shape={shape}
      danger={danger}
      ghost={ghost}
      loading={loading}
      block={block}
      iconOnly={iconOnly}
      disabled={disabled || loading}
      className={className}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <Loading /> : icon}
      {children && <span>{children}</span>}
    </StyledButton>
  );
};
