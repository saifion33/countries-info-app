
import CountryDetails from './components/CountryDetails';
import HeadBar from './components/HeadBar';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useContext, useEffect } from 'react';
import context from './context/context';


function App() {
  const { allCountries, fetchCountries, countriesCodeNames } = useContext(context);
  useEffect(() => {
    fetchCountries();

    // eslint-disable-next-line
  }, [])
  return (
    <>
      <Router>
        <HeadBar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          {allCountries.map(country => <Route exact path={country.name.replace(/\s/g, '-')} key={country.name} element={<CountryDetails countryDetails={country} countriesCodeNames={countriesCodeNames} />}></Route>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
