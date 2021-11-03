import React from 'react';
import {Provider} from 'react-redux';
import { createTheme, ThemeProvider} from '@material-ui/core';
import {store} from './store/store';
import Routes from './routes';
import TopBar from './components/topBar/TopBar';
import './css/login.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0960a5'
    },
    secondary: {
      main: '#638797'
    }

  }
})

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div className="App">
                  <TopBar />

                  <Routes/>                    
                </div>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
