import React, { forwardRef } from "react";
import clsx from "clsx";
import useRipple from "use-ripple-hook";

const DevButton = forwardRef(({
  variant = "solid",
  size = "md",
  href = "",
  rounded = "md",
  ripple = false,
  asIcon,
  children,
  className,
  ...rest
}, ref) => {
  const commonStyle =
    "transition-all flex items-center gap-1 text-nowrap justify-center active:scale-95";

  const buttonVariants = {
    solid: "bg-[#06b6d4] text-white",
    border: "text-[#06b6d4] font-semibold border-2 border-[#06b6d4]",
    light:
      "hover:bg-[#06b6d4]/30 text-[#06b6d4] font-semibold border-2 border-[#06b6d4]",
    flat: "border-[#06b6d4]/5 bg-[#06b6d4]/20 text-[#06b6d4] font-semibold backdrop-blur-sm ",
    ghost:
      "text-[#06b6d4] hover:bg-[#06b6d4] hover:text-white font-semibold border-2 border-[#06b6d4]",
  };

  const buttonSizes = {
    sm: asIcon ? "p-[4px] aspect-square" : "p-1 px-3",
    md: asIcon ? "p-1 aspect-square" : "p-2 px-5",
    lg: asIcon ? "p-2 aspect-square" : "p-3 px-7",
  };

  const buttonRoundness = {
    sm: "rounded-sm",
    md: "rounded-lg",
    lg: "rounded-2xl",
    full: "rounded-full",
    none: "rounded-none",
  };

  const buttonVariant = buttonVariants[variant] || buttonVariants.solid;
  const buttonSizeClass = buttonSizes[size] || buttonSizes.md;
  const buttonRoundnessClass = buttonRoundness[rounded] || buttonRoundness.md;
  const [rippleState, event] = useRipple();

  // Use JSX for button and anchor tags, not strings
  const ButtonComponent = href ? "a" : "button";

  return (
    <ButtonComponent
      ref={rippleState} // Use rippleState as ref
      href={href}
      {...rest}
      {...(ripple && { onPointerDown: event })}
      className={clsx(
        commonStyle,
        buttonVariant,
        buttonSizeClass,
        buttonRoundnessClass,
        ButtonComponent === "a" && "underline",
        className
      )}
    >
      {children}
    </ButtonComponent>
  );
});

export default DevButton;
