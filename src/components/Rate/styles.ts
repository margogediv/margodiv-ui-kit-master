import styled from "styled-components";
import variables from "../../variables";

const { colors } = variables;

export const STAR_SIZE = 20;
export const STAR_GAP = 8;
export const FILL_COLOR = colors.base.yellow[6].light;
export const EMPTY_COLOR = "rgba(0, 0, 0, 0.06)";

export const RateWrapper = styled.div<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${STAR_GAP}px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  line-height: 1;
`;

export const StarWrapper = styled.span<{ disabled?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${STAR_SIZE}px;
  height: ${STAR_SIZE}px;
  transition: transform 0.1s ease;

  ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
      transform: scale(1.1);
    }
  `}
`;

export const StarBackground = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
`;

export const StarForeground = styled.span<{ width: string }>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${({ width }) => width};
  height: ${STAR_SIZE}px;
  transition: width 0.15s ease;

  svg {
    display: block;
    flex-shrink: 0;
    min-width: ${STAR_SIZE}px;
  }
`;

export const HalfTrigger = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
`;

export const FullTrigger = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
