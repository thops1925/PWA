import { useState } from 'react';
import { useGetWeatherQuery } from './service/getWeather';

function App() {
  const [query, setSearch] = useState('');
  const [value, setValue] = useState('');
  const { data } = useGetWeatherQuery(value);

  console.log(data);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex justify-center items-center  w-full max-w-xs">
        {data?.main && (
          <div>
            <span>{data?.name}</span>
            <sup>{data?.sys.country}</sup>
            <div>
              {Math.round(data?.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div>
              <p>{data?.weather[0].description}</p>
            </div>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                alt="weather"
              />
            </div>
          </div>
        )}
      </div>
      <div className="w-full max-w-xs">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Location"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={async (e) => {
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
