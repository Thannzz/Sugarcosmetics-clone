import topbar from '../components/topbar.js'

let parent = document.getElementById('top')

parent.innerHTML=topbar()

let login = document.getElementById('register').addEventListener('click',open)

function open(){
    window.location.href="Login.html"
    
}
