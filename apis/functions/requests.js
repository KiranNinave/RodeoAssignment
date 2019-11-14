export const httpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH"
};

export const sendJsonRequest = async (url = "", method = httpMethods.GET) => {
  const header = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2VjYzFlMzAwNmRiZjMyNjEyNzk2NDQ0OTFiZTc2NiIsInN1YiI6IjVkY2QyYzA1Y2MyNzdjMDAxNGUyYzdmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JGOmr3g3fU0eEUXIWD5sI5l-KhMecoon6tdCliwOdPQ"
    }
  };
  return await fetch(url, header);
};
