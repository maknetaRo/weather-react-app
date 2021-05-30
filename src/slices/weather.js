import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  weather: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeather: (state, action) => {
      state.loading = true;
    },
    getWeatherSuccess: (state, { payload }) => {
      state.weather = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getWeatherFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getWeather, getWeatherSuccess, getWeatherFailure } =
  weatherSlice.actions;

export const weatherSelector = (state) => state.weather;

export default weatherSlice.reducer;

export const fetchWeather = ({ apiUrl, apiKey, query }) => {
  return async (dispatch) => {
    dispatch(getWeather);

    try {
      const response = await fetch(
        `${apiUrl}forecast?q=${query}&units=metric&APPID=${apiKey}`
      );
      const data = await response.json();
      dispatch(getWeatherSuccess(data.list));
    } catch (error) {
      dispatch(getWeatherFailure());
    }
  };
};
