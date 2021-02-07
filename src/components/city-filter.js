import { TextField, MenuItem } from '@material-ui/core';

export default function CityFilter({ values, setValues }) {
  function handleChange(event) {
    setValues({
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div>
      <TextField
        label="City"
        name="city"
        value={values.city}
        onChange={handleChange}
      />
      <TextField
        label="Province"
        name="province"
        value={values.province}
        onChange={handleChange}
      />
      <TextField
        select
        name="sort"
        label="Sort By:"
        defaultValue="no"
        value={values.sort}
        onChange={handleChange}
      >
        <MenuItem value="no">
          Default
        </MenuItem>
        <MenuItem value="city">
          Name
        </MenuItem>
        <MenuItem value="admin_name">
          Province
        </MenuItem>
        <MenuItem value="population">
          Population
        </MenuItem>
      </TextField>
    </div>
  );
}
