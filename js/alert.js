
//modal function
function btnBuyNow(){
    alert("Thanks For Purchasing")
  }
  

//about us form
function btnSubscribe(){
  var IDemail = document.getElementById("IDemail").value
  if(IDemail == "")
  alert("Please enter your E-mail to Subscribe")
  else
  alert("thanks for subscribing")

}
 

//feedback form
// function btnlogin(){
//   var IDemail = document.getElementById("description").value
//   if(IDemail == "")
//   alert("please fill the form completely")
//   else
//   alert("thanks for your Feedback ")

// }


//contact form
function btnsubmit(){
  var IDemail = document.getElementById("description").value
  if(IDemail == "")
  alert("please fill the form completely")
  else
  alert("Your request has been submited!")

}

//signup functions

// function btnclick() {
// var IDemail = document.getElementById("exampleInputEmail1").value
// if(IDemail == "")
// alert("Please fill the form completely")
// else
// alert("You're Signed up, now please Login")



// }       
// function btnclick() {
  
//   var IDemail = document.getElementById("exampleInputPassword1").value
//   if(IDemail == "")
//   alert("Please fill the form completely")
//   else
//   alert("You're Signed up, now please Login")



// }


document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
var valueCount
var price = document.getElementById("price").innerText;
function priceTotal() {
  var total = valueCount * price;
  document.getElementById("price").innerText = total
}
document.querySelector(".plus-btn").addEventListener("click", function () {
  valueCount = document.getElementById("quantity").value;
  valueCount++;
  document.getElementById("quantity").value = valueCount;
  if (valueCount > 1) {
    document.querySelector(".minus-btn").removeAttribute("disabled");
    document.querySelector(".minus-btn").classList.remove("disabled")
  }
  priceTotal()
})
document.querySelector(".minus-btn").addEventListener("click", function () {
  valueCount = document.getElementById("quantity").value;
  valueCount--;
  document.getElementById("quantity").value = valueCount
  if (valueCount == 1) {
    document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
  }
  priceTotal()
})
