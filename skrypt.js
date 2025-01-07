
document.addEventListener("click", function(event){
 if(event.target.id=== "input" || event.target.id==="binar" || event.target.hasAttribute("readonly")){
 return;
 }else{
    var x =event.target.id 
 }
 
 document.getElementById("input").addEventListener("input", function(event){
    funkcja()
 })

 
document.getElementById("input").value += x
funkcja()
})

function funkcja(){
    var odp = document.getElementById("input").value
   
    var binar = document.getElementById("binar")
    binar.value =""
    for(i=0; i< odp.length; i++){
        binar.value+= odp[i].charCodeAt(0).toString(2);
    }

}
console.log("Hi!")