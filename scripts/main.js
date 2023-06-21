let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('#homepagetitle');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Quarklidean，' + myName + '!';
    myButton.textContent = '切换账号'
}
localStorage.setItem('name', 'new reader');
if(!localStorage.getItem('name')) {
    myButton.textContent = '登录/注册'
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent =  'Welcome to Quarklidean，' + storedName + '!';
}
myButton.onclick = function() {
    setUserName();
} 
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/poster3.jpg') {
      myImage.setAttribute('src', 'images/rqcode3.jpg');
    }
    else if(mySrc === 'images/rqcode3.jpg'){
        myImage.setAttribute('src', 'images/entertain.jpg');
    }
    else {
      myImage.setAttribute('src', 'images/poster3.jpg');
    }
}
/*
document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
});*/
  