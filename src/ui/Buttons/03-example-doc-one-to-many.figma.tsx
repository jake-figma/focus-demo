import { PrimaryButton } from "./vanity-components/PrimaryButton";
import { SecondaryButton } from "./vanity-components/SecondaryButton";
import { InverseButton } from "./vanity-components/InverseButton";
import figma from "@figma/code-connect";

/* One component in Figma to many components in code */

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
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf?node-id=27-969",
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
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf?node-id=27-969",
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
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf?node-id=27-969",
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
