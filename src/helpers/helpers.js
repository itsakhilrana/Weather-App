export const URL = 'https://api.openweathermap.org/data/2.5/onecall'
export const URL2 = 'https://api.openweathermap.org/data/2.5/weather'
export const API_KEY = '529cac661d57d3580cfefb96049ce565'

export const initState = {
    timezone: 'timezone',
    current: {
      dt: 'datetime',
      temp: 'Loading..',
      pressure: 'pressure',
      humidity: 'humidity',
      wind_speed: 'wind',
      weather: [{ description: 'enable your location', icon: 'icon' }],
    },
    hourly: [{temp:"00", dt:"00", weather:[{icon:"0"}]}],
    daily: [{temp:{night:"00",day:"00"}}],
  }