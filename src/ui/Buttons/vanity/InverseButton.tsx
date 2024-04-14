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
 * InverseButton component for most tap and click actions
 * @figma component 3bd7d6e3e2474e4ce1718af51ca69e4d337d192a
 */
export const InverseButton = (props: ButtonProps) => (
  <ButtonBase variant="inverse" {...props} />
);
