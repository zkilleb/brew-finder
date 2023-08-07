import './LoadingSpinner.css';
import { CircularProgress } from '@mui/material';

export function LoadingSpinner() {
  return (
    <div className="LoadingSpinner">
      <div className="LoadingText">Loading</div>
      <div className="LoadingIcon">
        <CircularProgress />
      </div>
    </div>
  );
}
