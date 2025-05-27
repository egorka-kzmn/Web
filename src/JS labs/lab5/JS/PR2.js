function processCities(cityData) {
    const cities = [];
    for (const row of cityData) {
        const parts = row.split('|').map(part => part.trim());
        const city = {
            town: parts[0],
            latitude: parseFloat(parts[1]).toFixed(2),
            longitude: parseFloat(parts[2]).toFixed(2)
        };
        cities.push(city);
    }

    for (const city of cities) {
        console.log(city);
    }
}

processCities([
    'Moscow | 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'
]);