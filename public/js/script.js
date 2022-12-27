var a=2;
function head_btn(){
    if(a%2==0){
        document.getElementById("head_nav_hide").style.display = "block";
    }else{
        document.getElementById("head_nav_hide").style.display = "none";
    }a++;
}
var b=2;
function head_btn2(){
    if(b%2==0){
        document.getElementById("head_categorie").style.display = "block";
    }else{
        document.getElementById("head_categorie").style.display = "none";
    }b++;
}


// profile_btn
var c=2;
function profileBtn(){
    if(c%2==0){
        document.getElementById("profile_bt").style.display = "block";
    }else{
        document.getElementById("profile_bt").style.display = "none";
    }
    c++;
}






function al(){
    document.getElementById("fresh").style.display = "block";
    document.getElementById("birthday").style.display = "block";
    document.getElementById("anniversary").style.display = "block";
}



function fresh(){
    document.getElementById("fresh").style.display = "block";
    document.getElementById("all").style.display = "none";
    document.getElementById("birthday").style.display = "none";
    document.getElementById("anniversary").style.display = "none";
}
function birthday(){
    document.getElementById("birthday").style.display = "block";
    document.getElementById("fresh").style.display = "none";
    document.getElementById("all").style.display = "none";
    document.getElementById("anniversary").style.display = "none";

}
function anniversary(){
    document.getElementById("anniversary").style.display = "block";
    document.getElementById("birthday").style.display = "none";
    document.getElementById("fresh").style.display = "none";
    document.getElementById("all").style.display = "none";

}




function changeName(){
    document.getElementById("change_name").innerHTML = "Add To Cart 🛒";
    document.getElementById("change_name").style.color = "grey";
    document.getElementById("change_name").style. fontSize = "14px";
}
function changename(){
    document.getElementById("change_name").innerHTML = "Raw Cake";
    document.getElementById("change_name").style.color = "black";
    document.getElementById("change_name").style. fontSize = "14px";
}
function changeNam(){
    document.getElementById("change_nam").innerHTML = "Add To Cart 🛒";
    document.getElementById("change_nam").style.color = "grey";
    document.getElementById("change_nam").style. fontSize = "14px";
}
function changenam(){
    document.getElementById("change_nam").innerHTML = "Raw Cake";
    document.getElementById("change_nam").style.color = "black";
    document.getElementById("change_nam").style. fontSize = "14px";
}
function changeNa(){
    document.getElementById("change_na").innerHTML = "Add To Cart 🛒";
    document.getElementById("change_na").style.color = "grey";
    document.getElementById("change_na").style. fontSize = "14px";
}
function changena(){
    document.getElementById("change_na").innerHTML = "Raw Cake";
    document.getElementById("change_na").style.color = "black";
    document.getElementById("change_na").style. fontSize = "14px";
}
function changeN(){
    document.getElementById("change_n").innerHTML = "Add To Cart 🛒";
    document.getElementById("change_n").style.color = "grey";
    document.getElementById("change_n").style. fontSize = "14px";
}
function changen(){
    document.getElementById("change_n").innerHTML = "Raw Cake";
    document.getElementById("change_n").style.color = "black";
    document.getElementById("change_n").style. fontSize = "14px";
}



function emai(){
    var mail = document.getElementById("email").value;
    if(mail==""){
        document.getElementById("error_email").innerHTML = "Please Enter Email";
        return false;
    }
    if(mail.length<13){
        document.getElementById("error_email").innerHTML = "* please Enter email properly";
        return false;
    }
}








function loginPage(){
    var mail = document.getElementById("logi_email").value;
    var passwor = document.getElementById("password").value;
    if(mail==""){
        document.getElementById("login_email").innerHTML = "* please Enter Valid Email";
        return false;
    }
    if(mail.length<13){
        document.getElementById("login_email").innerHTML = "* please Enter Valid Email";
        return false;
    }
    if(passwor==""){
        document.getElementById("login_pass").innerHTML = "*type password";
        return false;
    }
    if(passwor.length<5){
        document.getElementById("login_pass").innerHTML = "* length should be greater than 5"
        return false;
    }
    
}
  

function seen(){
    var show=document.getElementById("input");
    if(show.type === "password"){
        show.type = "text";
        document.getElementById("color").style.color="blue";
    }else{
        show.type = "password";
        document.getElementById("color").style.color="grey";
    }
}







function myFun(){
    var name = document.getElementById("username").value;
    var mail = document.getElementById("ail").value;
    var passwor = document.getElementById("passw").value;
    var confirm = document.getElementById("passwords").value;
    var ch = document.getElementById("check").checked;
    if(name==""){
        document.getElementById("demo").innerHTML = "* type username";
        return false;
    }
    if(name.length<3){
        document.getElementById("demo").innerHTML = "* enter valid name";
        return false;
    }
    if(!isNaN(name)){
        document.getElementById("demo").innerHTML = "* dont use numbers";
        return false;
    }
    if(mail==""){
        document.getElementById("demo4").innerHTML = "* please Enter email";
        return false;
    }
    if(passwor==""){
        document.getElementById("demo1").innerHTML = "*type password";
        return false;
    }
    if(passwor.length<5){
        document.getElementById("demo1").innerHTML = "* length should be greater than 5"
        return false;
    }
    if(confirm==""){
        document.getElementById("demo2").innerHTML = "*please confirm password";
        return false;
    }
    if(confirm!=passwor){
        document.getElementById("demo2").innerHTML = "* password not same"
        return false;
    }
    if(!ch){
        alert("Please Agree Terms & Condition");
        return false;
        
    }else{
        return true;
    }
     
}












function createUser(){
   var userEmail = document.getElementById("username").value;
   if(userEmail == " "){
   document.getElementById("create_email").innerHTML = "error";
   return false;
   }
}








function dash(){
    document.getElementById("dash").style.display="block";
    document.getElementById("admin_add").style.display = "none";
}
function dashAddress(){
    document.getElementById("admin_add").style.display = "block";
    document.getElementById("dash").style.display="none";
}








// function increaseValue() {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;
//   }
  
//   function decreaseValue() {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value < 1 ? value = 1 : '';
//     value--;
//     document.getElementById('number').value = value;
//   }

var incr = document.getElementsByClassName('cart_btntwo');
var decr = document.getElementsByClassName('cart_btnone');
//Incrementing
for(var i=0;i<incr.length;i++){
    var button = incr[i];
    button.addEventListener('click',function(event){
        var btnclicked = event.target;
        var input = btnclicked.parentElement.children[1];
        var inputvalue= input.value;
        var newvalue = parseInt(inputvalue)+1;
        input.value = newvalue;
        console.log(newvalue);
    })
}
//decrement
for(var i=0;i<decr.length;i++){
    var button = decr[i];
    button.addEventListener('click',function(event){
        var btnclicked = event.target;
        var input = btnclicked.parentElement.children[1];
        var inputvalue= input.value;
        var newvalue = parseInt(inputvalue)-1;
        input.value = newvalue;
        console.log(newvalue);
    })
}




  function pro_one(){
    document.getElementById("pro_one").style.display = "block";
    document.getElementById("pro_two").style.display = "none";
    document.getElementById("pro_three").style.display = "none";
  }
  function pro_two(){
    document.getElementById("pro_two").style.display = "block";
    document.getElementById("pro_one").style.display = "none";
    document.getElementById("pro_three").style.display = "none";
  }
  function pro_three(){
    document.getElementById("pro_three").style.display = "block";
    document.getElementById("pro_one").style.display = "none";
    document.getElementById("pro_two").style.display = "none";
  }


var proone = document.getElementById("prodis");
var protwo = document.getElementById("prorev");
var prothree = document.getElementById("proadd");
  function proRev(){
    document.getElementById("product_revi").style.display = "block";
    document.getElementById("discripton").style.display = "none";
    document.getElementById("pro_add").style.display = "none";
    proone.classList.remove("pro_active");
    protwo.classList.add("pro_active");
    prothree.classList.remove("pro_active");
  }
  function proDis(){
    document.getElementById("product_revi").style.display = "none";
    document.getElementById("discripton").style.display = "block";
    document.getElementById("pro_add").style.display = "none";
    protwo.classList.remove("pro_active");
    proone.classList.add("pro_active");
    prothree.classList.remove("pro_active");
  }
  function proAdd(){
    document.getElementById("pro_add").style.display = "block";
    document.getElementById("product_revi").style.display = "none";
    document.getElementById("discripton").style.display = "none";
    prothree.classList.add("pro_active");
    protwo.classList.remove("pro_active");
    proone.classList.remove("pro_active");
  }






  function sellerLogin(){
    var sellerEmail = document.getElementById("seller_email").value;
    var sellerPass = document.getElementById("seller_password").value;
    if(sellerEmail==""){
        document.getElementById("seller_error").innerHTML = "* please Enter Valid Email";
        return false;
    }
    if(sellerEmail.length<13){
        document.getElementById("seller_error").innerHTML = "* please Enter Valid Email";
        return false;
    }
    if(sellerPass==""){
        document.getElementById("seller_pass_eror").innerHTML = "*type password";
        return false;
    }
    if(passwor.length<5){
        document.getElementById("seller_pass_eror").innerHTML = "* length should be greater than 5"
        return false;
    }
  }



  function createError(){
    var createName = document.getElementById("create_seller_name").value;
    var createPass = document.getElementById("create_password").value;
    if(createName==""){
        document.getElementById("create_error").innerHTML = "* type Name";
        return false;
    }
    if(createName.length<3){
        document.getElementById("create_error").innerHTML = "* Enter Name Properly";
        return false;
    }
    if(isNaN(createName)){
        document.getElementById("create_error").innerHTML = "* dont use numbers";
        return false;
    }
    if(createPass==""){
        document.getElementById("create_pass_error").innerHTML = "*type password";
        return false;
    }
    if(createPass.length<6){
        document.getElementById("create_pass_error").innerHTML = "* length should be greater than 6"
        return false;
    }
  }



// contact me
  
  function contacMe(){
    var coName = document.getElementById("contactName").value;
    var coMob = document.getElementById("contMob").value;
    var coEm = document.getElementById("contEma").value;
    var txtarea = document.getElementById("textArea").value;
    if(coName == ""){
        document.getElementById("coName").innerHTML = "* Name can not be empty";
        return false;
    }
    if(coName.length<3){
        document.getElementById("coName").innerHTML = "* Enter Name Properly";
        return false;
    }
    if(coMob==""){
        document.getElementById("contMo").innerHTML = "* Enter Phone Number";
        return false;
    }
    if(coEm==""){
        document.getElementById("conEm").innerHTML = "* please Enter Valid Email";
        return false;
    }
    if(coEm.length<13){
        document.getElementById("conEm").innerHTML = "* please Enter Valid Email";
        return false;
    }
    if(txtarea == ""){
        document.getElementById("context").innerHTML = "* Message greter than 100 words";
        return false;   
    }
  }




  