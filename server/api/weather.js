export default async (req, res) => {
  const weather = await $fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=30.033333&lon=31.233334&appid=${process.env.OPEN_WETHER_MAP_API_KEY}`
  );
  return weather;
};
