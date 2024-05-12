import{i,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const u="43797982-65d97265afa84a551e725288a";async function f(s){const o=`https://pixabay.com/api/?key=${u}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(o);if(!e.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return(await e.json()).hits}catch(e){return console.error(e),[]}}function m(s){const o=document.querySelector(".js-gallery");o.innerHTML=s.map(e=>`
        <div class="card">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-img img-fluid" />
           </a>
                <div class="card-info">
                    <p class="card-text">Likes: ${e.likes}</p>
                    <p class="card-text">Views: ${e.views}</p>
                    <p class="card-text">Comments: ${e.comments}</p>
                    <p class="card-text">Downloads: ${e.downloads}</p>
                </div>
            </div>
        </div>
    `).join("")}const y=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader");y.addEventListener("submit",s=>{s.preventDefault();const e=document.querySelector(".js-search-input").value.trim();if(e.trim()===""){c.innerHTML="",s.target.reset(),i.error({title:"Error",message:"Please enter a search query"});return}l.classList.remove("is-hidden"),c.innerHTML="",f(e).then(a=>{a.length===0?(i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML=""):(m(a),new d(".gallery a").refresh())}).catch(a=>{console.error(a),i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{l.classList.add("is-hidden"),s.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
