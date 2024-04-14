import { DialogContent } from "./DialogContent";
import figma from "@figma/code-connect";

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  DialogContent,
  "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf/FOCUS_-Core-Library?node-id=45%3A1668&mode=dev",
  {
    props: {
      headline: figma.string("Headline"),
      content: figma.string("Content"),
    },
    example: ({ headline, content }) => (
      <DialogContent
        headline={<h2>{headline}</h2>}
        content={<p>{content}</p>}
      />
    ),
  }
);
