function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const lat1Rad = toRadians(lat1);
    const lon1Rad = toRadians(lon1);
    const lat2Rad = toRadians(lat2);
    const lon2Rad = toRadians(lon2);

    const deltaLat = lat2Rad - lat1Rad;
    const deltaLon = lon2Rad - lon1Rad;

    const a = Math.sin(deltaLat / 2) ** 2 +
              Math.cos(lat1Rad) * Math.cos(lat2Rad) *
              Math.sin(deltaLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return distance;
}

function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

// Example coordinates for New York City and Los Angeles
const nycLat = 40.7128;
const nycLon = -74.0060;
const laLat = 34.0522;
const laLon = -118.2437;

// const distance = haversine(nycLat, nycLon, laLat, laLon);
// console.log(`The distance between NYC and LA is ${distance.toFixed(2)} kilometers.`);

module.exports = haversine