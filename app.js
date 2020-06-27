

document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();

    const inputVal=document.querySelector("input");
    console.log(inputVal.value);
    
})