import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw?.lat,
        tr_latitude: ne?.lat,
        bl_longitude: sw?.lng,
        tr_longitude: ne?.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "20f327dc8dmshd5669a9ef0f5c5cp12448cjsn1687da8ce440",
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};
