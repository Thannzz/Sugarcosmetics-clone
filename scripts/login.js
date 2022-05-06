if(localStorage.getItem('users') === null){
    localStorage.setItem('users', JSON.stringify([]))
}

let  userArr = []
function storeCredentials(){
    let email = document.getElementById('SignupEmail').value

    let Phone = document.getElementById('SignupPhone').value

    let pass = document.getElementById('SignupPassword').value

    let p1 = new userdata(email,Phone,pass)

    userArr.push(p1)

    
    localStorage.setItem("user",JSON.stringify(userArr))
}

function userdata(e,ph,pa){
    this.email = e ;
    this.Phone = ph;
    this.pass=pa ;
}



function getData(){
    console.log(1)
    let alluser = JSON.parse(localStorage.getItem('user'))

    let email = document.getElementById('email_phone').value

    let pass = document.getElementById('password').value

    
    alluser.forEach(function(user){
    if((email===user.email && pass ===user.pass)||
     (email===user.Phone && pass===user.pass)){
         
         alert('Login Successful')
         window.location.href='index.html'
         return 
     }
     else if((email!=user.email && pass ===user.pass)||
     (email!=user.Phone && pass===user.pass)){
        alert('Invalid Email/Phone')
        return 
     }
     else if((email===user.email && pass !=user.pass)||
     (email===user.Phone && pass!=user.pass)){
        alert('Invalid Password')
        return 
     }
     else if((email!=user.email && pass !=user.pass)){
        alert('User data unavailbale. Please register before Login')
        return 
     }
    });
    console.log(2)
}
    
