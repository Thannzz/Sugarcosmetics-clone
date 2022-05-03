


let productpage = JSON.parse(localStorage.getItem('ProductPage'));

let count = document.getElementById('count')
count.innerHTML=' '+productpage.length+ ' '+"items"

let showdata = (el)=>{
    let best=document.getElementById('container')
    best.innerHTML=null
    console.log(el)

    el.forEach(({image,Price,ProductNmae,category})=>{
        let box = document.createElement('div')
        box.setAttribute('class','mainbox')

        let div = document.getElementById('maindiv')
        div.innerHTML=category

        let maindic = document.getElementById('maindiv2')
        maindic.innerHTML=category+' '+'-'

        let pic = document.createElement('img')
        pic.src=image
        pic.setAttribute('class','pic')

        let proName = document.createElement('p')
        proName.innerHTML=ProductNmae
        proName.setAttribute('class','namebox')

        
        
        let price = document.createElement('p')
        price.innerHTML=`₹ ${Price}`;

        let cart = document.createElement('button')
        cart.innerHTML='ADD TO CART'
        cart.setAttribute('class','cartbtn')

        box.append(pic,proName,price,cart)

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


