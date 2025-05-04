import { query_To_Tmdb, query_Movie_Detail } from './api.js';
import { render_Movies, render_Modal, close_Modal } from './main_ui.js';

document.getElementById('search-btn').addEventListener('click', async () => {
  const query = document.getElementById('search-input').value.trim();
  if (!query) return;
  try {
    const data = await query_To_Tmdb(query);
    render_Movies(data.results);
  } catch (err) {
    alert(err.message);
  }
});

document.getElementById('search-input').addEventListener('keydown', async e => {
  if (e.key === 'Enter') document.getElementById('search-btn').click();
});

document.getElementById('movie-list').addEventListener('click', async e => {
  const card = e.target.closest('.movie-card');
  if (!card) return;
  const id = card.dataset.id;
  try {
    const detail = await query_Movie_Detail(id);
    render_Modal(detail);
  } catch (err) {
    alert(err.message);
  }
});

document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target.id === 'modal' || e.target.classList.contains('close-btn')) {
    close_Modal();
  }
});


document.querySelector('.close-btn').addEventListener('click', close_Modal);

