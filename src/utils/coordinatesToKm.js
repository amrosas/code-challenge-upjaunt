// These math rules were consulted from this source: https://stackoverflow.com/questions/1253499/simple-calculations-for-working-with-lat-lon-and-km-distance

const convertLatitudeToKm = latitude => {
  return 110574 * latitude
}

const convertLongitudeToKm = longitude => {
  return 11320 * Math.cos(longitude);
}

export const getDistanceBetweenTwoCoordinates = (coordinate1, coordinate2) => {
  return Math.sqrt(
    Math.pow(convertLatitudeToKm(coordinate2.latitude) - convertLatitudeToKm(coordinate1.latitude), 2) +
    Math.pow(convertLongitudeToKm(coordinate2.longitude) - convertLongitudeToKm(coordinate1.longitude), 2)
  )
}