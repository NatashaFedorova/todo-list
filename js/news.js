import newsTemplate from './newsTemplate.js';

const URL = 'https://hn.algolia.com/api/v1/search';

const refs = {
  query: document.querySelector('.query'),
  loader: document.querySelector('.loader'),
  newsList: document.querySelector('.news-list'),
};

const showLoader = () => {
  refs.loader.classList.add('show');
  refs.newsList.classList.remove('show');
};

const hideLoader = () => {
  refs.loader.classList.remove('show');
  refs.newsList.classList.add('show');
};

const render = hits => {
  const list = hits.map(({ title, url }) => newsTemplate({ title, url })).join('');

  refs.newsList.innerHTML = '';
  refs.newsList.insertAdjacentHTML('beforeend', list);
};

const handleQueryChange = e => {
  const query = e.target.value;

  if (!query) {
    refs.newsList.innerHTML = '';
    return;
  }

  showLoader();
  fetch(`${URL}?hitsPerPage=10&query=${query}`)
    .then(res => res.json())
    .then(({ hits }) => render(hits))
    .finally(hideLoader);
};

// throttle - функція написана самостійно, без Lodash
function throttle(callback, delay) {
  let timerId = 0;

  return function (e) {
    if (timerId) return;

    timerId = setTimeout(() => {
      callback(e);
      timerId = 0;
    }, delay);
  };
}

// debounce - функція написана самостійно, без Lodash
function debounce(callback, delay) {
  let timerId = 0;

  return function (e) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      callback(e);
      timerId = 0;
    }, delay);
  };
}

refs.query.addEventListener('input', debounce(handleQueryChange, 400));
