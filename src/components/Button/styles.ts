import styled, { keyframes, css } from "styled-components";
import variables from "../../variables";
import { ButtonProps } from ".";

const { colors, size: sz } = variables;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

type StyledProps = Omit<ButtonProps, "type" | "size" | "icon" | "htmlType"> & {
  btnType: ButtonProps["type"];
  btnSize: ButtonProps["size"];
  iconOnly: boolean;
};

// ─── Size ────────────────────────────────────────────────────────────────────

const sizeMap = {
  large: css<StyledProps>`
    height: ${sz.height.lg}px;
    padding: ${({ iconOnly }) => (iconOnly ? "0" : `0 15px`)};
    width: ${({ iconOnly, block }) =>
      block ? "100%" : iconOnly ? `${sz.height.lg}px` : "auto"};
    font-size: 16px;
    border-radius: ${({ shape }) =>
      shape === "round" || shape === "circle" ? "9999px" : `${sz.radius.lg}px`};
  `,
  default: css<StyledProps>`
    height: ${sz.height.height}px;
    padding: ${({ iconOnly }) => (iconOnly ? "0" : `0 15px`)};
    width: ${({ iconOnly, block }) =>
      block ? "100%" : iconOnly ? `${sz.height.height}px` : "auto"};
    font-size: 14px;
    border-radius: ${({ shape }) =>
      shape === "round" || shape === "circle" ? "9999px" : `${sz.radius.normal}px`};
  `,
  small: css<StyledProps>`
    height: ${sz.height.md}px;
    padding: ${({ iconOnly }) => (iconOnly ? "0" : `0 7px`)};
    width: ${({ iconOnly, block }) =>
      block ? "100%" : iconOnly ? `${sz.height.md}px` : "auto"};
    font-size: 14px;
    border-radius: ${({ shape }) =>
      shape === "round" || shape === "circle" ? "9999px" : `${sz.radius.sm}px`};
  `,
};

// ─── Color themes ─────────────────────────────────────────────────────────────

const primaryTheme = css`
  background: ${colors.brand.primary.colorPrimary.light};
  border-color: ${colors.brand.primary.colorPrimary.light};
  color: ${colors.base.white};

  &:not(:disabled):hover {
    background: ${colors.brand.primary.colorPrimaryHover.light};
    border-color: ${colors.brand.primary.colorPrimaryHover.light};
  }
  &:not(:disabled):active {
    background: ${colors.brand.primary.colorPrimaryActive.light};
    border-color: ${colors.brand.primary.colorPrimaryActive.light};
  }
`;

const defaultTheme = css`
  background: ${colors.neutral.backgroundBase.colorBgContainer.light};
  border-color: ${colors.neutral.border.colorBorder.light};
  color: ${colors.neutral.text.colorText.light};

  &:not(:disabled):hover {
    border-color: ${colors.brand.primary.colorPrimaryHover.light};
    color: ${colors.brand.primary.colorPrimaryHover.light};
  }
  &:not(:disabled):active {
    border-color: ${colors.brand.primary.colorPrimaryActive.light};
    color: ${colors.brand.primary.colorPrimaryActive.light};
  }
`;

const textTheme = css`
  background: transparent;
  border-color: transparent;
  color: ${colors.neutral.text.colorText.light};

  &:not(:disabled):hover {
    background: ${colors.neutral.fill.colorFillContentHover.light};
  }
  &:not(:disabled):active {
    background: ${colors.neutral.fill.colorFillContentActive.light};
  }
`;

const linkTheme = css`
  background: transparent;
  border-color: transparent;
  color: ${colors.brand.primary.colorPrimary.light};

  &:not(:disabled):hover {
    color: ${colors.brand.primary.colorPrimaryHover.light};
  }
  &:not(:disabled):active {
    color: ${colors.brand.primary.colorPrimaryActive.light};
  }
`;

// ─── Danger variants ──────────────────────────────────────────────────────────

const dangerPrimaryTheme = css`
  background: ${colors.error.colorError.light};
  border-color: ${colors.error.colorError.light};
  color: ${colors.base.white};

  &:not(:disabled):hover {
    background: ${colors.error.colorErrorHover.light};
    border-color: ${colors.error.colorErrorHover.light};
  }
  &:not(:disabled):active {
    background: ${colors.error.colorErrorActive.light};
    border-color: ${colors.error.colorErrorActive.light};
  }
`;

const dangerDefaultTheme = css`
  background: ${colors.neutral.backgroundBase.colorBgContainer.light};
  border-color: ${colors.error.colorError.light};
  color: ${colors.error.colorError.light};

  &:not(:disabled):hover {
    border-color: ${colors.error.colorErrorHover.light};
    color: ${colors.error.colorErrorHover.light};
  }
  &:not(:disabled):active {
    border-color: ${colors.error.colorErrorActive.light};
    color: ${colors.error.colorErrorActive.light};
  }
`;

const dangerTextTheme = css`
  background: transparent;
  border-color: transparent;
  color: ${colors.error.colorError.light};

  &:not(:disabled):hover {
    background: ${colors.error.colorErrorBg.light};
  }
  &:not(:disabled):active {
    background: ${colors.error.colorErrorBg.light};
  }
`;

const dangerLinkTheme = css`
  background: transparent;
  border-color: transparent;
  color: ${colors.error.colorError.light};

  &:not(:disabled):hover {
    color: ${colors.error.colorErrorHover.light};
  }
  &:not(:disabled):active {
    color: ${colors.error.colorErrorActive.light};
  }
`;

// ─── Ghost variants ───────────────────────────────────────────────────────────

const ghostPrimaryTheme = css`
  background: transparent;
  border-color: ${colors.brand.primary.colorPrimary.light};
  color: ${colors.brand.primary.colorPrimary.light};

  &:not(:disabled):hover {
    border-color: ${colors.brand.primary.colorPrimaryHover.light};
    color: ${colors.brand.primary.colorPrimaryHover.light};
  }
  &:not(:disabled):active {
    border-color: ${colors.brand.primary.colorPrimaryActive.light};
    color: ${colors.brand.primary.colorPrimaryActive.light};
  }
`;

const ghostDefaultTheme = css`
  background: transparent;
  border-color: ${colors.neutral.border.colorBorder.light};
  color: ${colors.neutral.text.colorText.light};

  &:not(:disabled):hover {
    border-color: ${colors.brand.primary.colorPrimaryHover.light};
    color: ${colors.brand.primary.colorPrimaryHover.light};
  }
  &:not(:disabled):active {
    border-color: ${colors.brand.primary.colorPrimaryActive.light};
    color: ${colors.brand.primary.colorPrimaryActive.light};
  }
`;

// ─── Theme selector ───────────────────────────────────────────────────────────

const themeStyles = css<StyledProps>`
  ${({ btnType, danger, ghost }) => {
    if (ghost) {
      return btnType === "primary" ? ghostPrimaryTheme : ghostDefaultTheme;
    }
    if (danger) {
      if (btnType === "primary") return dangerPrimaryTheme;
      if (btnType === "text") return dangerTextTheme;
      if (btnType === "link") return dangerLinkTheme;
      return dangerDefaultTheme;
    }
    if (btnType === "primary") return primaryTheme;
    if (btnType === "text") return textTheme;
    if (btnType === "link") return linkTheme;
    return defaultTheme;
  }}
`;

// ─── Dashed border override ───────────────────────────────────────────────────

const dashedStyle = css<StyledProps>`
  ${({ btnType }) => btnType === "dashed" && `border-style: dashed;`}
`;

// ─── Disabled ─────────────────────────────────────────────────────────────────

const disabledStyle = css<StyledProps>`
  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`;

// ─── Loading spinner ──────────────────────────────────────────────────────────

const loadingStyle = css<StyledProps>`
  ${({ loading }) =>
    loading &&
    css`
      svg {
        animation: ${rotate} 1s linear infinite;
      }
    `}
`;

// ─── StyledButton ─────────────────────────────────────────────────────────────

export const StyledButton = styled.button<StyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${sz.size.xxs}px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 400;
  line-height: 1;
  white-space: nowrap;
  border: 1px solid transparent;
  box-sizing: border-box;
  transition: color 0.2s, background 0.2s, border-color 0.2s, opacity 0.2s;
  outline: none;
  user-select: none;

  svg {
    fill: currentColor;
    flex-shrink: 0;
    width: 1em;
    height: 1em;
  }

  ${({ btnSize = "default" }) => sizeMap[btnSize]}
  ${themeStyles}
  ${dashedStyle}
  ${disabledStyle}
  ${loadingStyle}
`;
