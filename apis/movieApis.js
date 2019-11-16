import { httpMethods, sendJsonRequest } from "./functions/requests";
import { sendResponse } from "./functions/responses";

export const getSearchMoviesApi = async (
  data = { query: "marvel", page: 1 }
) => {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${data.query}&api_key=b3ecc1e3006dbf3261279644491be766&language=en-US&page=${data.page}`;
    const response = await sendJsonRequest(url, httpMethods.GET);
    return await sendResponse(response);
  } catch (err) {
    throw new Error(err);
  }
};

export const getPopularMoviesApi = async (data = { page: 1 }) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=b3ecc1e3006dbf3261279644491be766&language=en-US&page=${data.page}`;
    const response = await sendJsonRequest(url, httpMethods.GET);
    return await sendResponse(response);
  } catch (err) {
    throw new Error(err);
  }
};

export const getMovieById = async (data = { id: 1 }) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/${data.id}?api_key=b3ecc1e3006dbf3261279644491be766&language=en-US`;
    console.log(url);
    const response = await sendJsonRequest(url, httpMethods.GET);
    return await sendResponse(response);
  } catch (err) {
    throw new Error(err);
  }
};
