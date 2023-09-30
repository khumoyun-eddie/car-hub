export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "cf51485a52mshfd82c727adaebc6p103b2ajsn6d090f7d528c",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera`, {
      headers,
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // base rental price per day in dollars
  const mileageFactor = 0.1; // addition rate per mile driven
  const ageFactor = 0.05; // additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getDate() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};
