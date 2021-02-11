import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import { useState } from 'react'; 



function App() {

  const [cities, setCities] = useState([]);
    const apiKey = 'd5312bbd2a21fd8d0f7527a78c739a6f'; 

      function onSearch(ciudad) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
          .then(r => r.json())
          .then((recurso) => {
            if(recurso.main !== undefined){
              const ciudad = {
                min: Math.round(recurso.main.temp_min),
                max: Math.round(recurso.main.temp_max),
                img: recurso.weather[0].icon,
                id: recurso.id,
                wind: recurso.wind.speed,
                temp: recurso.main.temp,
                name: recurso.name,
                weather: recurso.weather[0].main,
                clouds: recurso.clouds.all,
                latitud: recurso.coord.lat,
                longitud: recurso.coord.lon
              };
              setCities(oldCities => [...oldCities, ciudad]);
            } else {
              alert("Ciudad no encontrada");
            }
          });
    
        }
        function onClose(id) {
          setCities(oldCities => oldCities.filter(c => c.id !== id));
        }
    

  
  return (
    
    <div className="App">
        <Nav onSearch={onSearch}/>
        <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}


export default App;
