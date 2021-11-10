import { useState } from 'react';
import { useGetWeatherQuery } from './service/getWeather';
import HTMLReactParser from 'html-react-parser';

function App() {
  const [query, setSearch] = useState('');
  const [value, setValue] = useState('');
  const { data } = useGetWeatherQuery(value);
  const weather = data?.forecast?.forecastday[0]?.day?.condition;

  console.log(data);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      {data?.location.name && (
        <div className="flex justify-center item w-full max-w-xs shadow appearance-none p-10 mb-10 rounded-lg">
          <div className="space-x-1">
            <div className="flex justify-center space-x-1 ">
              <span className="text-lg font-bold">{data?.location.name}</span>
              <sup className="  text-xs rounded-full p-1">
                {data?.location.country}
              </sup>
            </div>

            <div className="flex justify-center my-4 text-6xl font-bold">
              {Math.round(data?.current.temp_c)}
              <sup className="text-sm">&deg;C</sup>
            </div>

            <div className="flex justify-center">
              <img src={HTMLReactParser(weather.icon)} alt="weather" />
            </div>
            <div className="mb-10 flex justify-center">
              <p className="text-xl font-bold uppercase">{weather.text}</p>
            </div>
          </div>
        </div>
      )}
      <div className="w-full max-w-xs">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Location"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setValue(query);
              setSearch('');
            }
          }}
          value={query}
        />
      </div>
    </div>
  );
}

export default App;
