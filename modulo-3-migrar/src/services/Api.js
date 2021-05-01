const getDataFromApi = (serieName) => {
  return fetch("http://api.tvmaze.com/search/shows?q=" + serieName)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getDataFromApi;
