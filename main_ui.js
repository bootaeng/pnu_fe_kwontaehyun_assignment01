export function render_Movies(movies) {
  const list = document.getElementById('movie-list');
  list.innerHTML = '';
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.dataset.id = movie.id;
    card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
      <h3>${movie.title}</h3>
      <p>평점: ${movie.vote_average}</p>
      <p>${movie.overview.slice(0, 100)}...</p>
    `;
    list.appendChild(card);
  });
}

export function render_Modal(detail) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modal-detail');
  modal.classList.remove('hidden');

  const hasPoster = !!detail.poster_path;
  const posterHTML = hasPoster
    ? `<img src="https://image.tmdb.org/t/p/w300${detail.poster_path}" alt="${detail.title}" 
         style="width: 200px; height: auto; border-radius: 8px; margin-bottom: 1rem;" />`
    : '';

  content.innerHTML = `
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      ${posterHTML}
      <div style="flex: 1;">
        <h2>${detail.title}</h2>
        <p><strong>개봉일:</strong> ${detail.release_date}</p>
        <p>${detail.overview}</p>
      </div>
    </div>
  `;
}


export function close_Modal() {
  document.getElementById('modal').classList.add('hidden');
}
