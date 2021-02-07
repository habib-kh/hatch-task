self.addEventListener('message', (event) => { // eslint-disable-line no-restricted-globals
  console.log(event);

  if (event.data.type === 'sort-&-filter') {
    const filterValues = event.data.filterValues;
    let finaleCities = event.data.cities;

    if (filterValues.city || filterValues.province) {
      finaleCities = finaleCities.filter((item) => {
        const cityName = item.city.toLocaleLowerCase();
        const cityProvince = item.admin_name.toLocaleLowerCase();

        const filterCity = (filterValues.city || '').toLocaleLowerCase();
        const filterProvince = (filterValues.province || '').toLocaleLowerCase();

        if (cityName.includes(filterCity) && cityProvince.includes(filterProvince)) {
          return true;
        } else {
          return false;
        }
      });
    }

    if (filterValues.sort !== 'no') {
      finaleCities.sort(function(a, b) {
        if (a[filterValues.sort] < b[filterValues.sort]) {
          return -1;
        }

        if (a[filterValues.sort] > b[filterValues.sort]) {
          return 1;
        }

        return 0;
      })
    }

    postMessage(finaleCities);
  }
});