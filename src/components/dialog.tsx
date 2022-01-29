import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { MdOutlineClose } from "react-icons/md";

import classes from "./dialog.module.css";

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({ children, open, onClose }) => {
  return (
    <Dialog fullWidth={true} maxWidth={"xl"} open={open} onClose={onClose}>
      <DialogActions className={classes.dialogactions}>
        <button className={classes.button} onClick={onClose}>
          <MdOutlineClose />
        </button>
      </DialogActions>
      <DialogContent className={classes.dialogcontent} data-test="dialog-content">{children}</DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
