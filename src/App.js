import { useState } from 'react';
import { CityProvider } from './context/city-context';
import { HomePage } from './pages';

export default function App() {
  const [filterValues, setFilterValues] = useState({});

  return (
    <CityProvider>
      <HomePage />
    </CityProvider>
  );
}
