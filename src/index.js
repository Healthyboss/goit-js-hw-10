import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';

const breedSelect = document.querySelector('.breed-select');
const loaderInfo = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const errorInfo = document.querySelector('.error');

fetchBreeds().then(breeds => {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
  loaderInfo.style.display = 'none';
});
