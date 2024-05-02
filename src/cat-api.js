import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_a2nzEE4jUi0oyiTPLCgf4qP9czRV2sVed5jDbViEXj1u0nLJQysjyAPUXHY5eH5C';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
