import { ReactEventHandler, ReactNode } from "react";

type ButtonPropsVariant = "primary" | "secondary" | "destructive" | "hollow";

type ButtonPropsSize = "default" | "large";

interface ButtonElementAnchorProps {
  /**
   * html "anchor" element
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
   */
  element: "a";
  /**
   * The destination url
   */
  href: string;
  /**
   * Optional click handler, href should provide destination, click handler can be used for analytics or secondary click events
   */
  onClick?: ReactEventHandler<HTMLAnchorElement>;
}

interface ButtonElementButtonSharedProps {
  /**
   * html "button" element.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
   */
  element?: "button";
  href?: undefined;
}

interface ButtonElementButtonTypeButtonProps {
  /**
   * Required click handler for buttons
   */
  onClick: ReactEventHandler<HTMLButtonElement>;
  /**
   * html type for button element. defaults to "button"
   * Only use "submit" when is descendant of form and action is to submit the form
   */
  type?: "button";
}
interface ButtonElementButtonTypeSubmitProps {
  /**
   * Optional click handler for buttons
   */
  onClick?: ReactEventHandler<HTMLButtonElement>;
  /**
   * html type for button element.
   * Only use "submit" when is descendant of form and action is to submit the form
   */
  type: "submit";
}

type ButtonElementButtonProps = ButtonElementButtonSharedProps &
  (ButtonElementButtonTypeButtonProps | ButtonElementButtonTypeSubmitProps);

export interface ButtonSharedProps {
  /**
   * A descriptive aria-label is only recommended when the button text is not descriptive of the action
   */
  ariaLabel?: string;
  /**
   * Whether or not the button is disabled
   */
  disabled?: boolean;
  /**
   * React children
   */
  children: ReactNode;
  /**
   * Whether or not the button is full width of its parent
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The icon following the label
   */
  icon?: ReactNode;
  /**
   * The size of the button
   * @default default
   */
  size?: ButtonPropsSize;
  /**
   * The visual style of the button
   * @default primary
   */
  variant?: ButtonPropsVariant;
}

export type ButtonElementProps =
  | ButtonElementAnchorProps
  | ButtonElementButtonProps;

type ButtonProps = ButtonSharedProps & ButtonElementProps;

function isElementAnchorProps(
  props: Partial<ButtonProps>
): props is ButtonElementAnchorProps {
  return props.element === "a";
}
function isElementButtonProps(
  props: Partial<ButtonProps>
): props is ButtonElementButtonProps {
  return props.element !== "a";
}

/**
 * Button component for most tap and click actions
 * @figma component d188aa7e97781b3f58f149c68048b9b6bdca5d87
 */
export const Button = ({
  ariaLabel,
  disabled = false,
  fullWidth = false,
  variant = "primary",
  size = "default",
  ...props
}: ButtonProps) => {
  const classNames = [
    "button",
    `button-size-${size}`,
    `button-variant-${variant}`,
  ];
  const contents: ReactNode[] = [];

  if (props.icon) {
    classNames.push("button-icon");
    contents.push(<span>{props.children}</span>, props.icon);
  } else {
    contents.push(props.children);
  }
  if (fullWidth) {
    classNames.push("button-full-width");
  }

  if (isElementAnchorProps(props)) {
    if (disabled) classNames.push("button-disabled");
    return (
      <a
        aria-label={ariaLabel}
        className={classNames.join(" ")}
        href={props.href}
        onClick={props.onClick}
      >
        {contents}
      </a>
    );
  }
  if (isElementButtonProps(props))
    return (
      <button
        aria-label={ariaLabel}
        className={classNames.join(" ")}
        disabled={disabled}
        onClick={props.onClick}
        type={props.type || "button"}
      >
        {contents}
      </button>
    );
};
