export function getNavBarInfoArray(){
    const navBarInfo = [
        {
            title:"Accueil",
            href:"#home",
        },
        {
            title:"À propos de moi",
            href:"#about",
        },
        {
            title:"Projets",
            href:"#projects",
        },
        {
            title:"CV",
            href:"#resume",
        },
        {
            title:"Contacts",
            href:"#contact",
        }
    ];

    return navBarInfo;
}

export function getImageURL(name){
    return new URL(`../assets/${name}`,import.meta.url).href;
}

export function getPdfURL(name){
    return new URL(`../assets/${name}`,import.meta.url).href;
}