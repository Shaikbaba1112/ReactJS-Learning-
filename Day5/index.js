// let cat = fetch("https://catfact.ninja/fact")
// cat.then((Response)=>{
//     return Response.json().then((d)=>{
//         console.log(d)
//     }) 
// }).catch((error)=>{
//     console.log(error)
// })

async function catData(url){
    const rowData = await fetch(url);
    const finalData = await rowData.json();
    console.log(finalData);

    let fact = finalData.fact;
    console.log(fact);
    const h1 = document.createElement("h1");
    h1.innerText = fact;
    document.body.appendChild(h1);
}
catData("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3472352&lng=78.5083082&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")


    
