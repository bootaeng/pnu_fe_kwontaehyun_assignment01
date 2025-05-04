const API_KEY = 'a181b35b8495c094f5d5c5a796ee25cc';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function query_To_Tmdb(query) {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error('API 요청 실패');
  return res.json();
}

export async function query_Movie_Detail(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('API 요청 실패');
  return res.json();
}
