import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => {
  const [cities, setCities] = useState({ metropole: [], outreMer: [] });
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetchCities();
  }, [searchInput]);

  const fetchCities = () => {
    const url = new URL('http://localhost:9000/cities');
    const param = Number.isNaN(Number(searchInput)) ? { name: searchInput } : { code: searchInput };
    url.search = new URLSearchParams(param).toString();

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log('Res: ', res);
        setCities(splitCities(res));
      });
  };

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
      <div className="search-container">
        <div className="container-title">
          Je recherche...
        </div>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.currentTarget.value)}
          placeholder="...une ville, un code postal"
        />
      </div>
      <div className="cities-container">
        <div className="half-container">
          <div className="container-title">Villes de métropole</div>
          <div className="infoBlock" style={{ backgroundColor: cities.metropole.length ? '#72CB79' : '#C47779' }}>
            {
                cities.metropole.length
                  ? `${cities.metropole.length} villes correspondant au teste saisi`
                  : 'Aucune ville ne correspond au texte saisi'
            }
          </div>
          <div className="cities-grid">
            {
              cities.metropole.map((city) => (
                <div className="grid-item" key={`${city.nomCommune}_${city.codePostal}`}>
                  {city.nomCommune} - {city.codePostal}
                </div>
              ))
            }
          </div>

        </div>
        <div className="half-container">
          <div className="container-title">Villes d&apos;outre mer</div>
          <div className="infoBlock" style={{ backgroundColor: cities.outreMer.length ? '#72CB79' : '#C47779' }}>
            {
              cities.outreMer.length
                ? `${cities.outreMer.length} villes correspondant au teste saisi`
                : 'Aucune ville ne correspond au texte saisi'
            }
          </div>
          <div className="cities-grid">
            {
              cities.outreMer.map((city) => (
                <div className="grid-item" key={`${city.nomCommune}_${city.codePostal}`}>
                  {city.nomCommune} - {city.codePostal}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
