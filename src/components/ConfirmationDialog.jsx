import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmationDialog(props) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
      if(!open && props.open) {
        setOpen(true)
      }
      return () => {
      }
  }, [props.open, open])

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{props.title || "Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
              handleClose();
              props.onConfirm && props.onConfirm()
          }} color="primary">
            {props.confirmButtonText || "Yes"}
          </Button>
          <Button onClick={()=>{
              handleClose();
              props.onCancel && props.onCancel()
          }} color="primary">
            {props.confirmButtonText || "No"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ConfirmationDialog.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    confirmButtonText: PropTypes.string,
    cancleButtonText: PropTypes.string
}