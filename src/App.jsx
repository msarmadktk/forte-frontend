import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import New from "./components/New";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer";
import Home from "./container/Home";

const App = () => {
  const [theme, setTheme] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header theme={theme} changeTheme={changeTheme} /> {/* Pass theme and changeTheme to Header */}
        
        <Home />

        <Footer/>
      </ThemeProvider>
    </>
  );
};

export default App;


// <main className="bg-color-1">
// {/* This app is using the {theme} mode */}

// </main>