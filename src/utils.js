// import {navBarInfo} from "./constants/index.js";
//
// export function getNavBarInfoArray(){
//     return navBarInfo;
// }

export function getImageURL(name){
    return new URL(`../assets/${name}`,import.meta.url).href;
}

export function getPdfURL(name){
    return new URL(`../assets/${name}`,import.meta.url).href;
}