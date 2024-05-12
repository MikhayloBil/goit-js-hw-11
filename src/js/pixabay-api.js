const apiKey = '43797982-65d97265afa84a551e725288a';

export async function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Sorry, there are no images matching your search query. Please try again!');
    }
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error(error);
    return [];    
  }  
}