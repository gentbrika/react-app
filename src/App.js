import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import Login from './components/Login';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Register from './components/Register';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      </ThemeProvider>
    </>

  );
}
export default App;

