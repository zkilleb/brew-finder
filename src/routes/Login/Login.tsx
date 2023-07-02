import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Paper } from '@mui/material';

export function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <Paper className="Paper">
        <Authenticator className="Authenticator">
          {() => {
            navigate('/dashboard');
            return <></>;
          }}
        </Authenticator>
      </Paper>
    </div>
  );
}
