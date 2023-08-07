import './Dashboard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { LoadingSpinner, RegistrationForm } from '../../components';
import { getIsValidated } from '../../api';

export function Dashboard() {
  const { user } = useAuthenticator((context) => [context.route]);
  const [userExists, setUserExists] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (user) {
      async function fetchData() {
        setIsLoading(true);
        const result = await getIsValidated(
          user?.username,
          user?.attributes?.email,
        );
        if (result) setUserExists(true);
        setIsLoading(false);
      }
      fetchData();
    }
  }, [user]);

  const determineState = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    } else if (user) {
      if (userExists) {
        return (
          <div>
            <p>Welcome {user?.username}</p>
          </div>
        );
      } else {
        return (
          <div>
            <RegistrationForm />
          </div>
        );
      }
    } else {
      <div className="DashboardMessage">
        <div className="DashboardMessageItem">
          Please login first to access dashboard
        </div>
        <div className="DashboardMessageItem">
          <Link className="DashboardMessageItem" to="/login">
            Click here to login
          </Link>
        </div>
      </div>;
    }
  };

  return <Paper className="Paper">{determineState()}</Paper>;
}
