

document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();

    const inputVal=document.querySelector("#msg-input");
    const encrypted=btoa(inputVal.value);
    


    const inputLink=document.querySelector("#link-input");
    inputLink.value=`${window.location}#${encrypted}`;
    inputLink.select();


    
})