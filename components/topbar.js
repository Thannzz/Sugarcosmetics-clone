const topbar = () =>{

    return `<div id="free"><p> Free Makeup Set + Pouch on a spend of RS899</p></div>
    <div id="nav">
        <div id="homeButton"><a href="/index.html"><img src="https://in.sugarcosmetics.com/desc-images/SUGARLogo1.png" alt="home-icon"></a></div>
        <div id="searchbar">
            <input type="text" placeholder='Try "Liquid Lipstick"' id="inputBox">
            <button id="searchBtn">Search</button>
        </div>
        <div id="login">
            <div id="innerbox">
                <img src="https://in.sugarcosmetics.com/desc-images/person.png" alt="Login_Icon">
                <div id="register">Login/Register</div>
            </div>
            
        </div>
        <div id="cart">
            <div id="heart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>  
            </div>
            <div id="cart_icon">
                <a href="./addtocart.html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z"/></svg></a>
            </div>
            <div>
                <img src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg" alt="">
            </div>
        </div>
    </div>
    <div id="cate">
        <select name='makeup' id='makeupfilter' onchange='showmakeup()' >
            <option class="default">MAKEUP</option>
            <option value="lips">LIPS</option>
            <option value="face">FACE</option>
            <option value="eyes">EYES</option>
        </select>
        <select>
            <option class="default" value="BRUSHES">BRUSHES</option>
            <option value="faceBrushes">FACE BRUSHES</option>
            <option value="eyeBrushes">EYE BRUSHES</option>
            
        </select>
        <select>
            <option class="default" value="SKINCARE">SKINCARE</option>
            <option value="moist">MOISTURIZER</option>
            <option value="mask">MASKS</option>
        </select>
        <select>
            <option class="default" value="TRENDING">TRENDING</option>
            <option value="makeup">MAKE UP KITS</option>
            <option value="best">BESTSELLERS</option>
        </select>
        
    </div>`
}
export default topbar ;