import React, {useState} from 'react';
import './App.css';
import {Tiles} from "./components/Tiles";
import {SearchBar} from "./components/SearchBar";
import {unstable_createMuiStrictModeTheme as createMuiTheme} from "@material-ui/core";
import {MuiThemeProvider} from "@material-ui/core";
import data from './data/images.json';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#d0e7b7',
            main: '#c5e1a5',
            dark: '#899d73',
            contrastText: '#333333'
        },
        secondary: {
            light: '#e3f0d3',
            main: '#dcedc8',
            dark: '#9aa58c',
            contrastText: '#333333'
        },
    },
});

const App = () => {
    const [filters, setFilters] = useState('');

  return (
      <MuiThemeProvider theme={theme}>
          <div className="App">
              <SearchBar setFilters={setFilters} data={data}/>
              <Tiles filters={filters} data={data}/>
          </div>
      </MuiThemeProvider>
  );
};

export default App;
