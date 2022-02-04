const API_KEY = "82129b20ece7b87e8bb55c46b129712e";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
  fetchTopTen: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
  fetchUpcomming: `/movie/upcoming?api_key=${API_KEY}&languages=In&page=1`,
  fetchAction: `/discover/tv?api_key=${API_KEY}&with_networks=28`,
  fetchComedy: `/discover/tv?api_key=${API_KEY}&with_networks=35`,
  fetchCrime: `/discover/tv?api_key=${API_KEY}&with_networks=80`,
  fetchDocumentary: `/discover/tv?api_key=${API_KEY}&with_networks=99`,
  fetchDrama: `/discover/tv?api_key=${API_KEY}&with_networks=18`,
  fetchFamily: `/discover/tv?api_key=${API_KEY}&with_networks=10751`,
  fetchFantasy: `/discover/tv?api_key=${API_KEY}&with_networks=14`,
  fetchHistory: `/discover/tv?api_key=${API_KEY}&with_networks=36`,
  fetchHorror: `/discover/tv?api_key=${API_KEY}&with_networks=27`,
  fetchMystery: `/discover/tv?api_key=${API_KEY}&with_networks=9648`,
  fetchRomance: `/discover/tv?api_key=${API_KEY}&with_networks=10749`,
  fetchScience: `/discover/tv?api_key=${API_KEY}&with_networks=878`,
  fetchThriller: `/discover/tv?api_key=${API_KEY}&with_networks=53`,
};

export default requests;
