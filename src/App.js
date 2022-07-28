
import HeadBar from './components/HeadBar';
import Home from './components/Home';
import StyleState from './context/style/styleState';

function App() {
  return (
    <>
      <StyleState>
        <HeadBar />
        <Home/>
      </StyleState>
    </>
  );
}

export default App;
