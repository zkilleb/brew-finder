import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NotFound, LandingPage, BrewFinder } from './routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './themes';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/finder" element={<BrewFinder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
