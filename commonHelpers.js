import{i as c}from"./assets/vendor-8e8cd629.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const d="43797982-65d97265afa84a551e725288a";async function u(s){const o=`https://pixabay.com/api/?key=${d}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(o);if(!e.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return(await e.json()).hits}catch(e){return console.error(e),[]}}function f(s){const o=document.querySelector(".gallery");o.innerHTML=s.map(e=>`
        <div class="card">
            <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-img img-fluid" />
           
                <div class="card-info">
                    <p class="card-text">Likes: ${e.likes}</p>
                    <p class="card-text">Views: ${e.views}</p>
                    <p class="card-text">Comments: ${e.comments}</p>
                    <p class="card-text">Downloads: ${e.downloads}</p>
                </div>
            </div>
        </div>
    `).join("")}const m=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader");m.addEventListener("submit",s=>{s.preventDefault();const e=document.querySelector(".js-search-input").value.trim();if(e===""){i.innerHTML="",s.target.reset(),c.error({title:"Error",message:"Please enter a search query"});return}l.classList.remove("is-hidden"),i.innerHTML="",u(e).then(a=>{a.length===0?c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):f(a)}).catch(a=>{console.error(a),c.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{l.classList.add("is-hidden"),s.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
