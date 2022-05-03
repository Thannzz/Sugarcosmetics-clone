let description =JSON.parse(localStorage.getItem('ProductDescritionPage'))

let slash = document.querySelector('.slash')
slash.innerHTML = description[0].id+"/"+description[0].category+'/'+description[0].ProductNmae

let showdata = (el) =>{
    let container = document.getElementById('innercontainer')
    container.innerHTML=null;

    el.forEach(function(el){
        
        let maindiv = document.createElement('div')
        maindiv.setAttribute('class','maindiv')

        let imgdiv = document.createElement('div')
        imgdiv.setAttribute('class','imgbox')

        let pic = document.createElement('img')
        pic.src=el.image[0]
        pic.setAttribute('class','pic')
        
        let allimgdiv = document.createElement('div')
        allimgdiv.setAttribute('class','allimgdiv')

        let pic1 = document.createElement('img')
        pic1.src=el.image[0]
        pic1.onmouseenter=function(){
            currentImage1(el,pic)
        }

        let pic2 = document.createElement('img')
        pic2.src=el.image[1]
        pic2.onmouseenter=function(){
            currentImage2(el,pic)
        }
        pic2.onmouseleave=function(){
            originalImage2(el,pic)
        }

        let pic3 = document.createElement('img')
        pic3.src=el.image[2]
        pic3.onmouseenter=function(){
            currentImage3(el,pic)
        }
        pic3.onmouseleave=function(){
            originalImage2(el,pic)
        }

        let des = document.createElement('div')
        des.setAttribute('class','des')

        let name = document.createElement('h1')
        name.innerHTML=el.ProductNmae;
        name.setAttribute('class','name')
        
        let star = document.createElement('img')
        star.src='https://gcrelectricalservices.com.au/wp-content/uploads/2019/09/rating-24185_1280-1.png'
        star.setAttribute('class','star')

        let rating = document.createElement('p')
        rating.innerHTML='4.8 (32)'
        rating.setAttribute('class','rating')

        let addbtn = document.createElement('button')
        addbtn.innerHTML='ADD TO CART'
        addbtn.setAttribute('class','addbtn')

        addbtn.onclick= function () {
            cartPage(el)
            
        }

        let sharediv = document.createElement('div')
        sharediv.setAttribute('class','sharediv')

        let word=document.createElement('p')
        word.innerHTML='Share with friends :'
        word.setAttribute('class','word')

        let watsapp = document.createElement('img')
        watsapp.src='https://in.sugarcosmetics.com/sharebtn/Whatsapp.svg'
        watsapp.setAttribute('class','watsapp')

        let facebk  = document.createElement('img')
        facebk.src='https://in.sugarcosmetics.com/sharebtn/Facebook.svg'
        facebk.setAttribute('class','facebk')

        let twitter  = document.createElement('img')
        twitter.src='https://in.sugarcosmetics.com/sharebtn/Twitter.svg'
        twitter.setAttribute('class','twitter')

        let tumblr = document.createElement('img')
        tumblr.src='https://in.sugarcosmetics.com/sharebtn/Tumblr.svg'
        tumblr.setAttribute('class','tumblr')

        let mail = document.createElement('img')
        mail.src='https://in.sugarcosmetics.com/sharebtn/Mail.svg'
        mail.setAttribute('class','mail')

        let linked = document.createElement('img')
        linked.src='https://in.sugarcosmetics.com/sharebtn/Linkedin.svg'
        linked.setAttribute('class','linked')
        

        sharediv.append(word,watsapp,facebk,twitter,tumblr,mail,linked) 

        des.append(name,star,rating,addbtn,sharediv)

        imgdiv.append(pic)

        allimgdiv.append(pic1,pic2,pic3)

        maindiv.append(imgdiv,allimgdiv,des,)

        container.append(maindiv)
    })
}

showdata(description)

//pushing data to cart page
function cartPage(e){
    var cartPage = JSON.parse(localStorage.getItem("cartPage"))||[];
    e.quant=1;
    
    cartPage.push(e);
    
    localStorage.setItem("cartPage", JSON.stringify(cartPage));
    
     window.location.href = "addtocart.html";
    
    }

    //onmouse over change img function
function currentImage1(elem,image){
    image.src=elem.image[0];
}
function currentImage2(elem,image){
    image.src=elem.image[1];
}
function currentImage3(elem,image){
    image.src=elem.image[2];
}
function originalImage2(elem,image){
    image.src=elem.image[0]
}


