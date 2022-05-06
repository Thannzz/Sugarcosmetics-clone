let delivery =JSON.parse(localStorage.getItem('cartPage'))

// console.log(delivery)

let total = document.getElementById('total')

let totalamt = document.querySelector('.six')

let amtpay = document.getElementById('six')

//showing total price
let totalprice=0
function showprice(el){
    el.forEach(function(el){
        totalprice=totalprice+(el.quant*el.Price)
        
    })

    totalamt.append('₹',' ',totalprice,'.00')
    amtpay.append('₹',' ',totalprice,'.00')
    
    
}
showprice(delivery)

//display cart items

let container = document.getElementById('display')

function showdata(el,index){
    
    el.forEach(function(el,index){
        let maindiv = document.createElement('div')
        maindiv.setAttribute('class','maindiv')

        let pic = document.createElement('img')
        pic.src=el.image[0]
        pic.setAttribute('class','pic')

        let name = document.createElement('p')
        name.innerHTML=el.ProductNmae
        name.setAttribute('class','name')

        let removeicon = document.createElement('button')
        removeicon.innerHTML='Remove'
        removeicon.setAttribute('class','removeicon')
        removeicon.onclick=()=>{
            removeFunction(el,index)
        }

        let addbtn = document.createElement('button')
        addbtn.innerHTML='+'
        addbtn.setAttribute('class','addbtn')
        addbtn.onclick=()=>{
            addqunat(el)
        }

        let qaantity = document.createElement('p')
        qaantity.innerHTML=el.quant
        qaantity.setAttribute('class','qaantity')

        let deducebtn = document.createElement('button')
        deducebtn.innerHTML='-'
        deducebtn.setAttribute('class','deducebtn')
        deducebtn.onclick=()=>{
            reducequnat(el)
        }
        let amount = document.createElement('p')
        amount.innerHTML=el.quant+' '+'x'+' '+el.Price+' '+'='+' '+el.quant*el.Price+'.00'
        amount.setAttribute('class','amount')
        

        

        maindiv.append(pic,name,removeicon,addbtn,qaantity,deducebtn,amount)

        container.append(maindiv)


    })
}

showdata(delivery)

//removing from cart
function removeFunction(el,index){
    
    delivery.splice(index,1);
    localStorage.setItem("cartPage",JSON.stringify(delivery));
    window.location.reload();
}

//adding quantity
function addqunat(el){
    el.quant++
    localStorage.setItem("cartPage",JSON.stringify(delivery));
    window.location.reload();
}

//removing function
function reducequnat(el){
    el.quant--
    localStorage.setItem("cartPage",JSON.stringify(delivery));
    window.location.reload();
}

function payment(){
    window.location.href='payment.html'
}