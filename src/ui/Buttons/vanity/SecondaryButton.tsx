import {
  ButtonBase,
  ButtonBaseElementProps,
  ButtonBaseIconsProps,
  ButtonBaseSharedProps,
} from "../ButtonBase";

type ButtonProps = Exclude<ButtonBaseSharedProps, "variant"> &
  ButtonBaseElementProps &
  ButtonBaseIconsProps;

/**
 * SecondaryButton component for most tap and click actions
 * @figma component 3bd7d6e3e2474e4ce1718af51ca69e4d337d192a
 */
export const SecondaryButton = (props: ButtonProps) => (
  <ButtonBase variant="secondary" {...props} />
);
