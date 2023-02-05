
let btn=document.getElementById("btn");
console.log(btn);

btn.addEventListener("click",(x)=>{
    window.fetch("data.json")
    .then((x)=>x.json())
    .then((x)=>{console.log(x);
     x.map((x)=>console.log(x));
         let para=document.getElementById("p");
        para.textContent=`${x[Math.floor(Math.random() * x.length)].body}`;
        console.log(para);
    })
})
