

const {hash}=window.location;
const msg=atob(hash.replace("#",""));

if(msg){
    document.querySelector("#msg-form").classList.add("hide");
    document.querySelector("#msg-show").classList.remove("hide");

    document.querySelector("h1").innerHTML=msg;
}

document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();

    

    document.querySelector("#msg-form").classList.add("hide");
    document.querySelector("#link-form").classList.remove("hide");

    const inputVal=document.querySelector("#msg-input");
    const encrypted=btoa(inputVal.value);
    


    const inputLink=document.querySelector("#link-input");
    inputLink.value=`${window.location}#${encrypted}`;
    inputLink.select();


    
})