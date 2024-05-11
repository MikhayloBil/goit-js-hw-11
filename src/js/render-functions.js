/*export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}*/

export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
      card.innerHTML = `
       
      <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-img img-fluid" />
      <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
      
      </div>
      </div>
    `;
        gallery.appendChild(card);
    });
}
