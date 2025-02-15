import './App.css';
import GameContainer from './components/GameContainer';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="App">
        <GameContainer />
      </div>
    </MantineProvider>
  );
}

export default App;
