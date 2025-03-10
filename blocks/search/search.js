import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
    console.log(block);
    const searchInput = document.createElement("input")
    searchInput.id="search";
    searchInput.setAttribute("placeholder","search");
    block.querySelector("p").prepend(searchInput);
    searchInput.addEventListener("keyup",function(e){
        if(e.key === "Enter"){
            let keyword=e.target.value;
            window.open(`https://www.google.com/search?q=${keyword}`,"_blank").focus();
        }
    });
}


