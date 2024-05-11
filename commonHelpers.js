import{i}from"./assets/vendor-8e8cd629.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const d="43797982-65d97265afa84a551e725288a";async function u(o){const a=`https://pixabay.com/api/?key=${d}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(a);if(!e.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return(await e.json()).hits}catch(e){return console.error(e),[]}}function f(o){const a=document.querySelector(".gallery");o.forEach(e=>{const t=document.createElement("div");t.classList.add("card"),t.innerHTML=`
       
      <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-img img-fluid" />
      <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      
      </div>
      </div>
    `,a.appendChild(t)})}const m=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader");m.addEventListener("submit",async o=>{o.preventDefault();const e=document.querySelector(".js-search-input").value.trim();if(e===""){c.innerHTML="",o.target.reset(),i.error({title:"Error",message:"Please enter a search query"});return}c.innerHTML="",l.classList.remove("is-hidden");try{const t=await u(e);t.length===0?i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):c.innerHTML=f(t)}catch(t){console.error(t),i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{o.target.reset(),l.classList.add("is-hidden")}});
//# sourceMappingURL=commonHelpers.js.map
