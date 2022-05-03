//importing top navbar
import topbar from '../components/topbar.js'

let parent = document.getElementById('top')

parent.innerHTML=topbar()

//importing footer
import footer from '../components/footer.js'

let end = document.getElementById('end')

end.innerHTML=footer()

//login button function
document.getElementById('register').addEventListener('click',open)
function open(){
    window.location.href="Login.html"
    
}

//corousal effect
let container =  document.getElementById('corousal')

let pic = document.createElement('img')

pic.src = 'https://d32baadbbpueqt.cloudfront.net/30017ad5-6f33-4fe4-ad13-87dc24ba5245.jpg'

pic.setAttribute('class','pics')

container.append(pic)

let images = ['https://d32baadbbpueqt.cloudfront.net/b8311284-7fee-40b5-ac37-c62f246b9e83.jpg',
            'https://d32baadbbpueqt.cloudfront.net/0f778fe7-2af2-48fc-abf5-7a2f5df09dcf.jpg',
            'https://d32baadbbpueqt.cloudfront.net/d53f8a36-fef3-45ea-b89e-ace53938287d.jpg',
            'https://d32baadbbpueqt.cloudfront.net/af5f80d6-032a-49da-ae46-e7dc61f6e339.gif',
            'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/d9103d2b-af25-40c3-b41b-90538502b315.gif',
            'https://d32baadbbpueqt.cloudfront.net/30017ad5-6f33-4fe4-ad13-87dc24ba5245.jpg']

let i=0;

setInterval(function(){
    container.innerHTML=null; 
    
    if(i==images.length){
        i=0;
    }

    let image = images[i]

    let img = document.createElement("img")
    img.src=image;
    img.setAttribute('class','img')

    container.append(img);
    i++;

},3000)


var bestArr = [
    {
        ProductNmae : "Lip Zip Matte Topper",
        Price :  499 ,
        image :["https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
                "https://cdn.shopify.com/s/files/1/0906/2558/products/2_6436b73a-3a9b-4275-95b0-737b0a675ca1.jpg?v=1642434143",
                "https://cdn.shopify.com/s/files/1/0906/2558/products/3_978987fd-3e45-4422-a960-4d92a3700f6f.jpg?v=1642434146"],
        category : "Lips"
    },

    {
        ProductNmae : "Matte As Hell Crayon Lipstick",
        Price :  799,
        image :["https://cdn.shopify.com/s/files/1/0906/2558/products/01_7db669dd-9541-4d04-ad5b-49653474339d.jpg?v=1640792033",
                "https://cdn.shopify.com/s/files/1/0906/2558/products/02_44b097e6-e013-4824-9ff4-690af7f47826.jpg?v=1640869800",
                "https://cdn.shopify.com/s/files/1/0906/2558/products/03_7104a968-372a-45b0-9465-0121912c05f1.jpg?v=1640792037"],
        category : "Lips"
    },

    {
        ProductNmae : "Kohl Of Honour Intense Kajals",
        Price :  249,
        image :["https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1644399711",
                "https://cdn.shopify.com/s/files/1/0906/2558/products/02.jpg?v=1644399711",
                "https://cdn.shopify.com/s/files/1/0906/2558/products/03.jpg?v=1639496519"],
        category : "Eyes",
        shades:['https://cdn.shopify.com/s/files/1/0906/2558/products/01_c7153234-8381-4845-8b9a-3bf9a16e7754.jpg?v=1639584440',
                'https://cdn.shopify.com/s/files/1/0906/2558/products/01_a14be79f-4a1d-4c29-9d56-f545576926e1.jpg?v=1639496544',
                'https://cdn.shopify.com/s/files/1/0906/2558/products/01_79189b6b-9a44-4b2a-8940-e9a06731982e.jpg?v=1639496562',
                'https://cdn.shopify.com/s/files/1/0906/2558/products/01_e11a9b9e-36db-4368-80cc-1e8f4b8f3e72.jpg?v=1639496582',
                'https://cdn.shopify.com/s/files/1/0906/2558/products/01_5188ecb2-07a2-4b2c-b56d-696f7185aa0f.jpg?v=1639496600',
                'https://cdn.shopify.com/s/files/1/0906/2558/products/01_a52cdfbb-a4a1-4792-b1e1-1ed93fe0dd5e.jpg?v=1639496616']
    },

    {
        ProductNmae : "Tipsy Lips Moisturizing Balm",
        Price :  199,
        image :["https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412",
                "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-02-cosmopolitan-15045393940563.jpg?v=1619122415",
                "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-03-pinacolada-15057283776595.jpg?v=1619122417"],
        category : "Lips",
        shades:["https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412",
                "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-02-cosmopolitan-15045393940563.jpg?v=1619122415",
                "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-03-pinacolada-15057283776595.jpg?v=1619122417",
                'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-04-l-i-i-t-15045416845395.jpg?v=1619122376',
                'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-05-irish-coffee-15045421924435.jpg?v=1619122384',
                'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-06-mango-margarita-15045418942547.jpg?v=1619122395']
    },

    // {
    //     ProductNmae : "Ace Of Face Foundation Stick",
    //     Price :  999,
    //     image :["https://cdn.shopify.com/s/files/1/0906/2558/products/1_970c1c21-0fc9-4a9b-98dc-43cebdc5f554.jpg?v=1640792528",
    //             "https://cdn.shopify.com/s/files/1/0906/2558/products/2_40b8d0b3-b672-41dd-8a98-e32a36421020.jpg?v=1640869911",
    //             "https://cdn.shopify.com/s/files/1/0906/2558/products/3_db28afbb-f8ba-430b-9770-07120d38eb5e.jpg?v=1640792532"],
    //     category : "Face",
    // },
] 



let showdata = (el)=>{
    let best=document.getElementById('best')
    el.forEach(({image,Price,ProductNmae})=>{
        let box = document.createElement('div')
        box.setAttribute('class','mainbox')
        
        let pic = document.createElement('img')
        pic.src=image
        pic.setAttribute('class','pic')

        let proName = document.createElement('p')
        proName.innerHTML=ProductNmae
        
        let price = document.createElement('p')
        price.innerHTML=`₹ ${Price}`;

        let cart = document.createElement('button')
        cart.innerHTML='ADD TO CART'
        cart.setAttribute('class','cartbtn')

        box.append(pic,proName,price,cart)

        best.append(box)

        box.onclick = function () {
            ProductDescritionPage(el)
                }
    })
}

showdata(bestArr)

//corousal effect
let container1 =  document.getElementById('corousal2')

let pic1 = document.createElement('img')

pic1.src = 'https://d32baadbbpueqt.cloudfront.net/079b4250-2cd5-467a-b620-af356a98206e.jpg';

pic1.setAttribute('class','pics')

container1.append(pic1)

let imagess = ['https://d32baadbbpueqt.cloudfront.net/ac0cec37-3f1d-4fa6-b103-10f988f84ea8.jpg',
            'https://d32baadbbpueqt.cloudfront.net/e90a47e7-1d6c-4e0c-8374-f5425dddc66a.jpg',
            'https://d32baadbbpueqt.cloudfront.net/079b4250-2cd5-467a-b620-af356a98206e.jpg']

let j=0;

setInterval(function(){
    container1.innerHTML=null; 
    
    if(j==imagess.length){
        j=0;
    }

    let imag = imagess[j]

    let pic2 = document.createElement("img")
    pic2.src=imag;
    pic2.setAttribute('class','img')

    container1.append(pic2);
    j++;

},3000)

//Local Storage data access Function
function ProductDescritionPage(p) {

    var descriptionPage = JSON.parse(localStorage.getItem("ProductDescritionPage"));
    
    descriptionPage = [];
    
    descriptionPage.push(p);
    
    var qunat = 1 ;
    
    localStorage.setItem("ProductDescritionPage", JSON.stringify(descriptionPage));
    
    window.location.href = "productDescription.html";
}








