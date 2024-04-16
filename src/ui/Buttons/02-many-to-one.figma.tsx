import { Button } from "./Button";
import figma from "@figma/code-connect";

const sharedProps = {
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
  Button,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf?node-id=124-919",
  {
    props: sharedProps,
    example: ({ label, iconEnd, iconStart, disabled, size }) => (
      <Button
        variant="primary"
        onClick={() => {}}
        iconEnd={iconEnd}
        iconStart={iconStart}
        disabled={disabled}
        size={size}
      >
        {label}
      </Button>
    ),
  }
);

figma.connect(
  Button,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf?node-id=124-1136",
  {
    props: sharedProps,
    example: ({ label, iconEnd, iconStart, disabled, size }) => (
      <Button
        variant="secondary"
        onClick={() => {}}
        iconEnd={iconEnd}
        iconStart={iconStart}
        disabled={disabled}
        size={size}
      >
        {label}
      </Button>
    ),
  }
);

figma.connect(
  Button,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf?node-id=124-1281",
  {
    props: sharedProps,
    example: ({ label, iconEnd, iconStart, disabled, size }) => (
      <Button
        variant="inverse"
        onClick={() => {}}
        iconEnd={iconEnd}
        iconStart={iconStart}
        disabled={disabled}
        size={size}
      >
        {label}
      </Button>
    ),
  }
);
