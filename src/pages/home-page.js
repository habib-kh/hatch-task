import { useState } from 'react';
import { Layout, CityList, CityFilter } from '../components';
import { useCity } from '../context/use-city';

export default function HomePage() {
  const { isLoading, cities, filterCities } = useCity();
  const [filterValues, setFilterValues] = useState({});

  function handleFilterCities(newValues) {
    setFilterValues((prevFilters) => {
      const finalValues = {
        ...prevFilters,
        ...newValues,
      };

      filterCities(finalValues);

      return finalValues;
    });
  }

  return (
    <Layout
      loading={isLoading}
      searchPanel={
        <CityFilter values={filterValues} setValues={handleFilterCities} />
      }
    >
      <CityList cities={cities} />
    </Layout>
  );
}
