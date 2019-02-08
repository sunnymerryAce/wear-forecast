const InitialState = {
  weather: {
    isFetching: true,
    forecast: {
      latitude: 0,
      longitude: 139.767125,
      timezone: 'Asia/Tokyo',
      currently: {
        time: 1549500662,
        summary: '晴れ',
        icon: 'clear-day',
        precipIntensity: 0.0076,
        precipProbability: 0.01,
        precipType: 'rain',
        temperature: 7.33,
        apparentTemperature: 7.33,
        dewPoint: 4.51,
        humidity: 0.82,
        pressure: 1014.02,
        windSpeed: 0.77,
        windGust: 3.98,
        windBearing: 5,
        cloudCover: 0.2,
        uvIndex: 3,
        visibility: 9.62,
        ozone: 276.69,
      },
      hourly: {
        summary: '一日中曇り。',
        icon: 'partly-cloudy-night',
        data: [],
      },
      daily: {
        summary: '一週間中降水なし。気温は5°C、土曜日に下がる。',
        icon: 'clear-day',
        data: [],
      },
      flags: {
        sources: ['cmc', 'gfs', 'icon', 'isd', 'madis'],
        'nearest-station': 0.196,
        units: 'si',
      },
      offset: 9,
    },
  },
};

export default InitialState;
