import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";

const searchForm = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const searchInput = document.querySelector('.js-search-input');
    const query = searchInput.value.trim();

    if (query.trim() === '') {
        galleryEl.innerHTML = '';
        event.target.reset();
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query',
        });
        return;
    }

    
    loaderEl.classList.remove('is-hidden');
    galleryEl.innerHTML = '';

    fetchImages(query)
        .then(images => {
            if (images.length === 0) {
                iziToast.info({
                    title: 'Info',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                renderImages(images);
                const lightbox = new SimpleLightbox('.gallery a');
            lightbox.refresh();
            }
        })
        .catch(error => {
            console.error(error);
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images. Please try again later.',
            });
        })
        .finally(() => {            
            loaderEl.classList.add('is-hidden');
            event.target.reset();
            galleryEl.innerHTML = '';
        });
        
});

