import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import {
  NotFound,
  LandingPage,
  BrewFinder,
  Breweries,
  About,
  Login,
  Join,
  FAQ,
} from './routes';
import { Header, Footer } from './components';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './themes';

function App() {
  Amplify.configure({
    Auth: {
      region: awsExports.REGION,
      userPoolId: awsExports.USER_POOL_ID,
      userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/breweries" element={<Breweries />} />
          <Route path="/about" element={<About />} />
          <Route path="/finder" element={<BrewFinder />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
