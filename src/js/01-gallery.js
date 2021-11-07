// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const imageContainer = document.querySelector('.gallery');
const imageMarkup = createImagesMarkup(galleryItems);

function createImagesMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" data-title="${description}" />
  </a>`;
    })
    .join('');
}
imageContainer.insertAdjacentHTML('beforeend', imageMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
// Change code below this line

console.log(galleryItems);
