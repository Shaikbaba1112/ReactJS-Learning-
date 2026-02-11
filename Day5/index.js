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
catData("https://catfact.ninja/fact")
    
