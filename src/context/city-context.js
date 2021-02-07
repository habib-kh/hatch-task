import { createContext, useEffect, useState } from 'react';
import rawCities from '../assets/cities.js';
import SortAndFilterWorker from 'worker-loader!./sort-and-filter-worker';  // eslint-disable-line import/no-webpack-loader-syntax

export const CityContext = createContext({});

const cityWorker = new SortAndFilterWorker();

export function CityProvider({ children }) {
  const [cities, setCities] = useState(rawCities);
  const [isLoading, toggleLoading] = useState(false);

  useEffect(() => {
    cityWorker.addEventListener('message', (event) => {
      console.log(event);

      setCities(event.data);
      toggleLoading(false)
    });
  }, []);

  function handleFilter(filterValues) {
    toggleLoading(true);
    cityWorker.postMessage({
      type: 'sort-&-filter',
      cities: rawCities,
      filterValues,
    });
  }

  return (
    <CityContext.Provider
      value={{
        isLoading,
        cities,
        filterCities: handleFilter,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
