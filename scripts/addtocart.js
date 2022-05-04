let addtocart =JSON.parse(localStorage.getItem('cartPage'))

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
    total.append("Cart Total :" +" "+"Rs."+" "+ totalprice+".00")
    
}
showprice(addtocart)

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

showdata(addtocart)

//removing from cart
function removeFunction(el,index){
    
    addtocart.splice(index,1);
    localStorage.setItem("cartPage",JSON.stringify(addtocart));
    window.location.reload();
}

//adding quantity
function addqunat(el){
    el.quant++
    localStorage.setItem("cartPage",JSON.stringify(addtocart));
    window.location.reload();
}

//removing function
function reducequnat(el){
    el.quant--
    localStorage.setItem("cartPage",JSON.stringify(addtocart));
    window.location.reload();
}

//promocode function
let PromoCode = [{ pc: "MASAI30", discount: "30" }, { pc: "NEWUSER50", discount: "50" }]
let discount = 0 ;
let promo = (e)=>{
    let code = document.getElementById('promo').value
    PromoCode.forEach(function(p){
        if(p.pc===code){
            if(code==="MASAI30"){
                discount=totalprice*30/100
                document.querySelector('.discount').innerHTML=Math.round(discount)+'.00'
                document.getElementById('six').innerHTML=Math.round(totalprice-discount)+'.00'
            }
            else if (code==="NEWUSER50"){
                discount=totalprice*50/100
                document.querySelector('.discount').innerHTML=Math.round(discount)+'.00'
                document.getElementById('six').innerHTML=Math.round(totalprice-discount)+'.00'
            }
        }   
    })
}

//continue shopping
let shop = (e)=>{
    window.location.href='index.html'
}
//delivery page
let delivery = (e)=>{
    window.location.href='delivery.html'
}
    






