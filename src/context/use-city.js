import { CityContext } from './city-context';
import { useContext } from 'react';

export function useCity() {
  const cityContext = useContext(CityContext);

  return cityContext;
}
