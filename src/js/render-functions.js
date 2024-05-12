
export function renderImages(images) {
    const gallery = document.querySelector('.js-gallery');
    gallery.innerHTML = images.map(image => `
        <div class="card">
        <a class="gallery-link" href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-img img-fluid" />
           </a>
                <div class="card-info">
                    <p class="card-text">Likes: ${image.likes}</p>
                    <p class="card-text">Views: ${image.views}</p>
                    <p class="card-text">Comments: ${image.comments}</p>
                    <p class="card-text">Downloads: ${image.downloads}</p>
                </div>
            </div>
        </div>
    `).join('');
}