window.onload =function(){
    var divFromHtml =document.getElementById("product");
    var dataFromLs =JSON.parse(localStorage.getItem("product"));

    var stored =[];

    for(var i=0;i<dataFromLs.length; i++){
        stored +=`<div class="product-card"><div class="product-card-top"><img src="${dataFromLs[i].image}" alt="Product-img"></div><div class="product-card-bot"><p>${dataFromLs[i].name}</p><p>₹${dataFromLs[i].price}</p>
        <button onclick='addToCart(${JSON.stringify(dataFromLs[i])})'>Add to cart</button></div></div>`;
    }


    divFromHtml.innerHTML = stored;

};
function addToCart(pro){
    var product = JSON.stringify(pro);
    var dataFromLs =JSON.parse(localStorage.getItem("userData"));
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser){
        var allUser =[];
        for( var i=0 ;i<dataFromLs.length; i++){
            if(dataFromLs[i].email === currentUser["currentUserEmail"]){
                var newObj =dataFromLs[i];
                newObj["cartProduct"] = newObj["cartProduct"] || [];
                newObj["cartProduct"].push(JSON.parse(product));
                allUser.push(newObj);
            }
            else{
                allUser.push(dataFromLs[i]);
            }
        }
        localStorage.setItem("userData",JSON.stringify(allUser));
        alert("product Added");
    }
    else{
        alert("Login First to Add Cart");
        window.location.href ='/register.html';
    }
}