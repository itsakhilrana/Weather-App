import axios from 'axios'

//fetching openweather api for weather details
export const fetchWeather = async (
  savePositionToState,
  pos,
  setPos,
  setweatherDetails,
  API_KEY,
  URL,
  URL2,
  query,
  setQuery,
  setQueryHandler
) => {
  try {
    if (!query) {
      if (!pos.lat) {
        await new Promise(() => {
          navigator.geolocation.getCurrentPosition(savePositionToState)
        })
      }

      const { data } = await axios.get(URL, {
        params: {
          lat: pos.lat,
          lon: pos.long,
          exclude: 'minutely',
          units: 'metric',
          APPID: API_KEY,
        },
      })
      setweatherDetails(data)
    } else {
      //console.log('else excute')

      await axios
        .get(URL2, {
          params: {
            q: query,
            APPID: API_KEY,
          },
        })
        .then(({ data }) => {
          // console.log(data)
          setPos({
            lat: data.coord.lat,
            long: data.coord.lon,
          })
          setQuery('')
          setQueryHandler({ cityName: data.name })
        })
        .catch((err) => {
          console.log(err.message)
          setQueryHandler({ error: 'city not found' })
        })
      // console.log(data.coord.lat)
    }
  } catch (err) {
    console.error(err)
  }
}
