import React, { useEffect, useState } from 'react';

import ChildComponent from './ChildComponent';

import './App.css';

const App = () => {
  const [cities, setCities] = useState({ metropole: [], outreMer: [] });
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetch('http://localhost:9000/test')
      .then((res) => res.json())
      .then((res) => {
        console.log('Res: ', res);
        setCities(splitCities(res));
      });
  }, []);

  const splitCities = (c) => {
    const metropole = [];
    const outreMer = [];
    c.forEach((city) => {
      if (Number(city.codePostal) >= 97000) {
        outreMer.push(city);
      } else {
        metropole.push(city);
      }
    });
    console.log('');
    return {
      metropole,
      outreMer
    };
  };

  return (
    <div className="App">
      <div className="title">City search</div>
      <div>
        Je recherche
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.currentTarget.value)}
          placeholder="...une ville, un code postal"
        />
      </div>
      <div className="cities-container">
        <div className="half-container">
          {
            cities.metropole.map((city) => (
              <div key={`${city.nomCommune}_${city.codePostal}`}>
                {city.nomCommune}
              </div>
            ))
          }
        </div>
        <div className="half-container">
          {
            cities.outreMer.map((city) => (
              <div key={`${city.nomCommune}_${city.codePostal}`}>
                {city.nomCommune}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default App;
