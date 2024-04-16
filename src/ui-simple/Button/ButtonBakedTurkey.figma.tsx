// import { Button } from "./Button";
// import figma from "@figma/code-connect";

// figma.connect(
//   Button,
//   "https://www.figma.com/file/azv53zX7Jry7jQUQqMGzqf/FOCUS_-Core-Library?node-id=5%3A302&mode=dev",
//   {
//     props: {
//       label: figma.string("label"),
//       icon: figma.boolean("showIcon", {
//         true: figma.instance("icon"),
//         false: undefined,
//       }),
//       variant: figma.enum("variant", {
//         secondary: "secondary",
//         destructive: "destructive",
//         hollow: "hollow",
//       }),
//       size: figma.enum("size", {
//         large: "large",
//       }),
//       disabled: figma.boolean("disabled", {
//         true: true,
//         false: undefined,
//       }),
//       fullwidth: figma.boolean("fullWidth", {
//         false: undefined,
//         true: true,
//       }),
//     },
//     example: (props) => (
//       <Button
//         icon={props.icon}
//         variant={props.variant}
//         size={props.size}
//         disabled={props.disabled}
//         fullWidth={props.fullwidth}
//         onClick={() => {}}
//       >
//         {props.label}
//       </Button>
//     ),
//   }
// );
