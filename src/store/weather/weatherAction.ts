import { createAsyncThunk } from "@reduxjs/toolkit";
import { IWeather } from "./weatherSlice";

export const weatherRequestAsync = createAsyncThunk<IWeather, string>(
	'weather/fetch',
	async (city: string) => {
		const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cea6a0f88c0eebf05f909cb0ce9afa3a&lang=ru&units=metric`);
		if (response.ok && response.status === 200 && response.status < 300) {
			return response.json();
		} else {
			throw new Error(response.statusText);
		}
	}
);