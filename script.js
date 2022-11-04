const horoscope = [
    {name: "Aries", from:"Mar 21", to: "Apr 19"},
    {name: "Taurus", from:"Apr 20", to: "May 20"},
    {name: "Gemini", from:"May 21", to: "jun 20"},
    {name: "Cancer", from:"jun 21", to: "jul 22"},
    {name: "Leo", from:"jul 23", to: "Aug 22 "},
    {name: "Virgo", from:"Aug 23", to: "Sep 22"},
    {name: "Libra", from:"Sep 23", to: "Oct 22"},
    {name: "Scorpio", from:"Oct 23", to: "Nov 21"},
    {name: "Sagittarius", from:"Nov 22", to: "Dec 21"},
    {name: "Capricorn", from:"Dec 22", to: "Dec 31"},
    {name: "Capricorn", from:"Jan 01", to: "Jan 19"},
    {name: "Aquarius", from:"Jan 20", to: "Feb 18"},
    {name: "Pisces", from:"Feb 19", to: "Mar 20"}
];
const getOut= () => {
    const date = document.querySelector(".bd").value;
    let bd = date,
    out = "none";
    bd = new Date(bd).toDateString().split(" ");
    let dob = bd[1]+" "+ bd[2];
    dob = new Date(dob);
    horoscope.forEach((val)=> {
        let start = new Date(val.from);
        let end = new Date(val.to);
        if (start <= dob && dob <= end)
        {
            out = val.name;
        }
    });
    disDiv.style.translate ="5 0";
    let printed = document.querySelector(".output");
    printed.style.height ="fit-content";
    printed.innerHTML= `Your Horoscope is <span>${out}</span>`;
};
 const changed =() => {
    document.querySelector("button").disabled =false;
 };
 let disDiv =
 document.querySelector("#but:has(button:disabled)");
 let box = document.querySelector(".box");
 let up = true;
 disDiv.addEventListener("mouseenter",(e) => {
    if (disBut.disabled){
        if(up){
            up= !up;
            disDiv.style.translate="0 5px";
        }else{
            up =!up;
            disDiv.style.translate="0 0";
        }
    }else{
        disDiv.style.translate="0 0 0";
    }
 });
 box.addEventListener("mouseleave", (e) =>{
    disDiv.style.translate = "0 0 0";
    up = true;
 });