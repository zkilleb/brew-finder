import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NotFound, LandingPage, BrewFinder, Breweries, About } from './routes';
import { Header, Footer } from './components';
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
          <Route path="/about" element={<About />} />
          <Route path="/finder" element={<BrewFinder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
