import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NotFound, LandingPage, BrewFinder, Breweries } from './routes';
import { Header } from './components';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './themes';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/breweries" element={<Breweries />} />
          <Route path="/finder" element={<BrewFinder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
