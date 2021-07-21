var firebaseConfig = {
    apiKey: "AIzaSyC-qc-xzx6eqFG7xFiv55vc9DhXHFplCE0",
    authDomain: "ochima-test.firebaseapp.com",
    projectId: "ochima-test",
    storageBucket: "ochima-test.appspot.com",
    messagingSenderId: "450631018893",
    appId: "1:450631018893:web:0ca8ac203da6fb375d35c4",
    measurementId: "G-2LEVG85SRT"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var auth = firebase.auth();
var email;

function login(){
    email = document.querySelector('#eml').value();
    auth.signInWithEmailAndPassword(email, document.querySelector('#pass').value())
        .then(() => {
            Page.Response.Redirect("google.com");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert(errorCode, errorMessage);
        });
}
function signup(){
    email = document.querySelector('#eml').value();
    auth.createUserWithEmailAndPassword(email, document.querySelector('#pass').value())
        .then(() => {
            Page.Response.Redirect("login.html");
        })
        .catch((error) => {
            alert(error.code, error.message);
            console.log(error.code, error.message);
        });
    alert("sign up successful");
}
function burn(userid, name, email, num, add, pin, gender) {
    firebase.database().ref('users/' + userid).set({
        Name: name,
        Email: email,
        Phone_number : num,
        Address: add,
        Pin_code: pin,
        Sex: gender
    });
}
// function exists(usr){
//     var temp = firebase.database().ref('users');
//     for (x in temp){
//         return usr !== x;
//     }
// }
// function equality(){
//     return document.querySelector('#pass').value() === document.querySelector('#repass').value();
// }
function rdval(){
    var x = document.getElementsByName('gender');
    for(var i = 0; i < x.length; i++){
        if (x[i].checked){
            return x[i].value;
        }
    }
}

function subm(){
    var nm = document.querySelector('#name').value();
    var unm = document.querySelector('#usernm').value();
    email = document.querySelector('#eml').value();
    var num = document.querySelector('#phone').value();
    var address = document.querySelector('#addr').value();
    var pin = document.querySelector('#pin').value();
    var gen = rdval();
    burn(unm, nm, email, num, address, pin, gen);
    // console.log(unm, nm, email, num, address, pin, gen)
}

// document.querySelector('#jot').addEventListener('click', function (){
//     if (equality()) {
//         var nm = document.querySelector('#name').value();
//         var unm = document.querySelector('#usernm').value();
//         email = document.querySelector('#eml').value();
//         var num = document.querySelector('#phone').value();
//         var address = document.querySelector('#addr').value();
//         var pin = document.querySelector('#pin').value();
//         var gen = rdval();
//         // burn(unm, nm, email, num, address, pin, gen);
//         console.log(unm, nm, email, num, address, pin, gen)
//     }else{alert('The password and confirm password field do not match');}
// })