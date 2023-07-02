import './Dashboard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { RegistrationForm } from '../../components';
import { getIsValidated } from '../../api';

export function Dashboard() {
  const { user } = useAuthenticator((context) => [context.route]);
  const [userExists, setUserExists] = React.useState(false);

  React.useEffect(() => {
    if (user) {
      async function fetchData() {
        const result = await getIsValidated(
          user?.username,
          user?.attributes?.email,
        );
        if (result) setUserExists(true);
      }
      fetchData();
    }
  }, [user]);

  return (
    <Paper className="Paper">
      {user ? (
        userExists ? (
          <div>
            <p>Welcome {user?.username}</p>
          </div>
        ) : (
          <div>
            <RegistrationForm />
          </div>
        )
      ) : (
        <div className="DashboardMessage">
          <div className="DashboardMessageItem">
            Please login first to access dashboard
          </div>
          <div className="DashboardMessageItem">
            <Link className="DashboardMessageItem" to="/login">
              Click here to login
            </Link>
          </div>
        </div>
      )}
    </Paper>
  );
}
