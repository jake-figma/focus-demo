import { IconButton } from "./IconButton";
import figma from "@figma/code-connect";

/**
 * These props were auto-generated from the Figma component.
 * Update 'props' to match your code component and change the
 * 'example' function to return the code example you'd like to see in Figma
 */

figma.connect(
  IconButton,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf/FOCUS_-Core-Library?type=design&node-id=22-518&mode=design&t=YD7NBNStiSEwdYdM-11",
  {
    props: {
      variant: figma.enum("Variant", {
        Inverse: "inverse",
        Secondary: "secondary",
      }),
      icon: figma.instance("Icon"),
      disabled: figma.enum("* State", {
        Disabled: true,
      }),
    },
    example: ({ icon, variant }) => (
      <IconButton
        ariaLabel="Describe the action here."
        variant={variant}
        icon={icon}
        type="button"
        onClick={() => {}}
      />
    ),
  }
);
