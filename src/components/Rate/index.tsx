import { FC, useState, useCallback, MouseEvent, KeyboardEvent } from "react";
import {
  RateWrapper,
  StarWrapper,
  StarBackground,
  StarForeground,
  HalfTrigger,
  FullTrigger,
  STAR_SIZE,
  FILL_COLOR,
  EMPTY_COLOR,
} from "./styles";
import { Star } from "../../icons/Star";

export interface RateProps {
  value?: number;
  defaultValue?: number;
  count?: number;
  allowHalf?: boolean;
  allowClear?: boolean;
  disabled?: boolean;
  onChange?: (value: number) => void;
  onHoverChange?: (value: number | undefined) => void;
  className?: string;
}

export const Rate: FC<RateProps> = ({
  value: valueProp,
  defaultValue = 0,
  count = 5,
  allowHalf = false,
  allowClear = true,
  disabled = false,
  onChange,
  onHoverChange,
  className,
}) => {
  const isControlled = valueProp !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const cleanValue = isControlled ? valueProp! : internalValue;
  const displayValue = hoverValue ?? cleanValue;

  const handleHover = useCallback(
    (val: number) => {
      if (disabled) return;
      setHoverValue(val);
      onHoverChange?.(val);
    },
    [disabled, onHoverChange]
  );

  const handleMouseLeave = useCallback(() => {
    setHoverValue(undefined);
    onHoverChange?.(undefined);
  }, [onHoverChange]);

  const handleClick = useCallback(
    (val: number) => {
      if (disabled) return;
      const next = allowClear && val === cleanValue ? 0 : val;
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    },
    [disabled, allowClear, cleanValue, isControlled, onChange]
  );

  const handleKey =
    (val: number) => (e: KeyboardEvent<HTMLSpanElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick(val);
      }
    };

  return (
    <RateWrapper
      role="radiogroup"
      aria-label="Rating"
      aria-disabled={disabled}
      className={className}
      disabled={disabled}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: count }, (_, i) => {
        const idx = i + 1;
        const isFull = displayValue >= idx;
        const isHalf = !isFull && displayValue >= idx - 0.5;
        const foregroundWidth = isFull ? "100%" : isHalf ? "50%" : "0%";

        return (
          <StarWrapper key={idx} disabled={disabled}>
            <StarBackground>
              <Star color={EMPTY_COLOR} size={STAR_SIZE} />
            </StarBackground>

            <StarForeground width={foregroundWidth}>
              <Star color={FILL_COLOR} size={STAR_SIZE} />
            </StarForeground>

            {allowHalf ? (
              <>
                <HalfTrigger
                  role="radio"
                  aria-label={`${idx - 0.5} stars`}
                  aria-checked={isHalf}
                  tabIndex={disabled ? -1 : 0}
                  onKeyDown={handleKey(idx - 0.5)}
                  onMouseEnter={() => handleHover(idx - 0.5)}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    handleClick(idx - 0.5);
                  }}
                />
                <FullTrigger
                  role="radio"
                  aria-label={`${idx} stars`}
                  aria-checked={isFull}
                  tabIndex={disabled ? -1 : 0}
                  onKeyDown={handleKey(idx)}
                  onMouseEnter={() => handleHover(idx)}
                  onClick={() => handleClick(idx)}
                />
              </>
            ) : (
              <FullTrigger
                role="radio"
                aria-label={`${idx} stars`}
                aria-checked={isFull}
                tabIndex={disabled ? -1 : 0}
                onKeyDown={handleKey(idx)}
                onMouseEnter={() => handleHover(idx)}
                onClick={() => handleClick(idx)}
              />
            )}
          </StarWrapper>
        );
      })}
    </RateWrapper>
  );
};
