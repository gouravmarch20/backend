const axios = require("axios");

let url = `https://api.openweathermap.org/data/2.5/weather?q=DELHI&appid=${process.env.API_KEY}&units=metric`;

exports.getWeather = async (req, res) => {
  try {
    const a = req.body();
    console.log(a);
    console.log("giving weather data");

    const { data } = await axios.get(url);

    // console.log(data.weather[0].main);
    // console.log(data.weather[0].icon);
    // console.log(data.main.temp_max);
    // console.log(data.sys.country);
    // console.log(data.name);

    return res.status(200).json({
      weather: data.weather[0].main,
      weatherIcon: data.weather[0].icon,
      weatherMax: data.main.temp_max,
      country: data.sys.country,
      name: data.name,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ error: "INvalid  Details" });
    // res.status(400).json({ message: false });
  }
};
