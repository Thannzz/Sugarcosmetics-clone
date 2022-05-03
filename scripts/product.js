let productpage = JSON.parse(localStorage.getItem('ProductPage'));

let count = document.getElementById('count')
count.innerHTML=' '+productpage.length+ ' '+"items"


let showdata = (el)=>{
    let best=document.getElementById('container')
    best.innerHTML=null
    // console.log(el)

    el.map((el)=>{
        let box = document.createElement('div')
        box.setAttribute('class','mainbox')

        let div = document.getElementById('maindiv')
        div.innerHTML=el.id+ '/'+ el.category
        

        let maindic = document.getElementById('maindiv2')
        maindic.innerHTML=el.category+' '+'-'

        let pic = document.createElement('img')
        pic.src=el.image
        pic.setAttribute('class','pic')

        let proName = document.createElement('p')
        proName.innerHTML=el.ProductNmae
        proName.setAttribute('class','namebox')

        
        
        let price = document.createElement('p')
        price.innerHTML='₹' + ' '+ el.Price;

        let cart = document.createElement('button')
        cart.innerHTML='ADD TO CART'
        cart.setAttribute('class','cartbtn')
        

        box.append(pic,proName,price,cart)

        box.onclick=function(){
            ProductDescritionPage(el)
        }
       

        best.append(box)
    })
}

showdata(productpage)

//sorting function
let sorting=()=>{
    var sorting = document.getElementById("sortbox").value;

    if(sorting =="h2l")
    {
        productpage.sort(function(a,b){
            return b.Price - a.Price
        })
        showdata(productpage);
    }

    if(sorting =="l2h")
    {
        productpage.sort(function(a,b){
            return a.Price - b.Price
        })
        showdata(productpage);
    }
}

//Local Storage data access Function
function ProductDescritionPage(p) {
    var descriptionPage = JSON.parse(localStorage.getItem("ProductDescritionPage"));
    
    descriptionPage = [];
    
    descriptionPage.push(p);
    
    var qunat = 1 ;
    
    localStorage.setItem("ProductDescritionPage", JSON.stringify(descriptionPage));

    window.location.href = "productDescription.html";
}


