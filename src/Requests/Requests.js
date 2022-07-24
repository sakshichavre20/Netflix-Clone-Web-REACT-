const API_KEY = "82129b20ece7b87e8bb55c46b129712e";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
  fetchTopTen: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_genres=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
  fetchUpcomming: `/movie/upcoming?api_key=${API_KEY}&languages=In&page=1`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchHistory: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchScience: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
};

export default requests;
