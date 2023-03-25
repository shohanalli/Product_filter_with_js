 const search = () => {
    const searchbox = document.getElementById("search_item").value.toUpperCase();
    const productStore = document.getElementById("product_list");
    const product = document.querySelectorAll(".product");
    const productName = document.getElementsByTagName("h3");

    for (let p=0; p < productName.length; p++){
       let match = product[p].getElementsByTagName('h3')[0];

       if(match){
         let textV =  match.textContent || match.innerHTML
            if(textV.toUpperCase().indexOf(searchbox) > -1){
                product[p].style.display = "";
            }else{
                product[p].style.display = "none";
            }
       }

    }

 }




