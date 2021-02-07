import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper, Button } from '@material-ui/core';
import { PinDrop as PinDropIcon } from '@material-ui/icons';

export default function CityList({ cities }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>City Name</TableCell>
            <TableCell>Province</TableCell>
            <TableCell>Population</TableCell>
            <TableCell>Population Proper</TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cities.map((row) => (
            <TableRow key={row.city}>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.admin_name}</TableCell>
              <TableCell>{row.population}</TableCell>
              <TableCell>{row.population_proper}</TableCell>
              <TableCell width={192} align="right">
                <Button
                  variant="outlined"
                  size="small"
                  target="_blank"
                  href={`https://www.google.com/maps/search/${row.lat}+${row.lng}`}
                  startIcon={(
                    <PinDropIcon />
                  )}
                >
                  Google Maps
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
