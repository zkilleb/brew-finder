import './Notification.css';
import { Snackbar, Alert, AlertColor } from '@mui/material';

export function Notification({
  message,
  severity,
  handleClose,
  open,
}: {
  message: string;
  severity: string;
  handleClose: () => void;
  open: boolean;
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={handleClose}
      className="ErrorAlert"
    >
      <Alert onClose={handleClose} severity={severity as AlertColor}>
        {message}
      </Alert>
    </Snackbar>
  );
}
