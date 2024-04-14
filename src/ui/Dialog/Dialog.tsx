import { IconClose } from "icons";
import { ReactNode } from "react";
import { IconButton } from "ui/Buttons/IconButton";
import "./dialog.css";

type DialogProps = {
  /**
   * React children
   */
  children: ReactNode;
};

export const Dialog = (props: DialogProps) => {
  return (
    <div className="dialog">
      {props.children}
      <IconButton
        icon={<IconClose />}
        variant="inverse"
        onClick={() => {}}
        ariaLabel="Close dialog"
      />
    </div>
  );
};
