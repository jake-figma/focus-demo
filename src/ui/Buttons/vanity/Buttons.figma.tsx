import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { InverseButton } from "./InverseButton";
import figma from "@figma/code-connect";

const vanityProps = {
  label: figma.string("Label"),
  iconEnd: figma.boolean("Icon End", {
    true: figma.instance("↳ Icon End Instance"),
    false: undefined,
  }),
  iconStart: figma.boolean("Icon Start", {
    true: figma.instance("↳ Icon Start Instance"),
    false: undefined,
  }),
  disabled: figma.enum("* State", {
    Disabled: true,
  }),
  size: figma.enum("Size", {
    Small: "small",
  }),
};

figma.connect(
  PrimaryButton,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf/FOCUS_-Core-Library?node-id=27%3A969&mode=dev",
  {
    variant: { Variant: "Primary" },
    props: vanityProps,
    example: ({ label, iconEnd, iconStart, disabled, size }) => (
      <PrimaryButton
        onClick={() => {}}
        iconEnd={iconEnd}
        iconStart={iconStart}
        disabled={disabled}
        size={size}
      >
        {label}
      </PrimaryButton>
    ),
  }
);

figma.connect(
  SecondaryButton,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf/FOCUS_-Core-Library?node-id=27%3A969&mode=dev",
  {
    variant: { Variant: "Secondary" },
    props: vanityProps,
    example: ({ label, iconEnd, iconStart, disabled, size }) => (
      <SecondaryButton
        onClick={() => {}}
        iconEnd={iconEnd}
        iconStart={iconStart}
        disabled={disabled}
        size={size}
      >
        {label}
      </SecondaryButton>
    ),
  }
);

figma.connect(
  InverseButton,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf/FOCUS_-Core-Library?node-id=27%3A969&mode=dev",
  {
    variant: { Variant: "Inverse" },
    props: vanityProps,
    example: ({ label, iconEnd, iconStart, disabled, size }) => (
      <InverseButton
        onClick={() => {}}
        iconEnd={iconEnd}
        iconStart={iconStart}
        disabled={disabled}
        size={size}
      >
        {label}
      </InverseButton>
    ),
  }
);
