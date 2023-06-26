import './Login.css';
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { AmplifyUser } from '@aws-amplify/ui';
import '@aws-amplify/ui-react/styles.css';
import { Paper, Button } from '@mui/material';
import { getIsValidated } from '../../api';
import { RegistrationForm } from '../../components';

export function Login() {
  const [userExists, setUserExists] = React.useState(false);
  const [isValidated, setIsValidated] = React.useState(false);
  const [authenticatedUser, setAuthenticatedUser] =
    React.useState<AmplifyUser>();

  React.useEffect(() => {
    if (authenticatedUser) {
      async function fetchData() {
        const result = await getIsValidated(
          authenticatedUser?.username,
          authenticatedUser?.attributes?.email,
        );
        if (result) setUserExists(true);
      }
      fetchData();
    }
  }, [authenticatedUser]);

  return (
    <div>
      <Paper className="Paper">
        <Authenticator className="Authenticator">
          {({ signOut, user }) => {
            setAuthenticatedUser(user);
            return userExists ? (
              <div>
                <p>Welcome {user?.username}</p>
                <Button variant="contained" onClick={signOut}>
                  Sign out
                </Button>
              </div>
            ) : (
              <div>
                <RegistrationForm />
                <Button variant="contained" onClick={signOut}>
                  Sign out
                </Button>
              </div>
            );
          }}
        </Authenticator>
      </Paper>
    </div>
  );
}
