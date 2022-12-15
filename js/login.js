function btnlogin() {
    var useremailx = document.getElementById('exampleInputEmail1').value;
    var databasew = localStorage.getItem('usermail');
    var userpasswordx = document.getElementById('exampleInputPassword1').value;
    var databasee =localStorage.getItem('userpw');
debugger
    if(useremailx== databasew && userpasswordx==databasee){
        alert("You're Logged In")
    }
    else{
        alert("Incorrrect username or password")

    
}
}

function btnclick() {
    var useremail = document.getElementById('exampleInputEmail1').value;
    localStorage.setItem('usermail', useremail);
    var userpassword = document.getElementById('exampleInputPassword1').value;
    localStorage.setItem('userpw', userpassword);
  
    
  }

  $(document).ready(function () {

    $("#BtnSignUp").click(function () {
      var useremail = document.getElementById('ID_userSignUP').value;

      var userpassword = document.getElementById('ID_userPaswordSignUP').value;

      if (useremail == '' || userpassword == ''){

        alert("incorrect username or password")
      }

        else {
        localStorage.setItem('usermail', useremail);
        localStorage.setItem('userpw', userpassword);
        $('#loginModal').modal('show');
        $('#ID_SignUpModal').modal('hide')
      
      }
    

    })
  })