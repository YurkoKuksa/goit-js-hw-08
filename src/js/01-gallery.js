// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// ==================================================

// Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
// Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm (синтаксис import/export).

// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

const namesElements = document.querySelector('.gallery');

const markup = galleryItems
  .map(el => {
    return `<li class="gallery__item"><a class="gallery__link" href="${el.original}">
      <img class="gallery__image"
      src="${el.preview}" 
     
      alt="${el.description}" >
      </a>
    </li>`;
    // el.preventDefault();
  })
  .join('');

namesElements.insertAdjacentHTML('afterbegin', markup);

// Реалізація делегування на ul.gallery і отримання url великого зображення.

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});
