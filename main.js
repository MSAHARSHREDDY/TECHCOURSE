 
/*--------------------------signup form-------------------*/
    function signup()
    {
        var user=document.getElementById("user").value;
        var email=document.getElementById("email").value;
        var pass=document.getElementById("pass").value;
        var cpass=document.getElementById("cpass").value;
        /*user*/
        if(user=="")
        {
            document.getElementById("message1").innerHTML="**User Name Cannot Be Empty"
            return false;
        }
        else
        {
            document.getElementById("message1.1").innerHTML="**User Name is Matched"
            document.getElementById("message1").style.display="none";
        }
        /*email*/
        if(email=="")
        {
            document.getElementById("message2").innerHTML="**Email Cannot Be Empty"
            return false;
        }
        else
        {
            document.getElementById("message2.2").innerHTML="**Email is Matched";
            document.getElementById("message2").style.display="none";
            
        }


        /*password*/
        if(pass=="")
        {
            document.getElementById("message3").innerHTML="**Password Cannot be Empty";
            return false
        }
        if(pass.length<4)
        {
            document.getElementById("message3").innerHTML="**Password length Should be Greater Than Three Characters"
            return false
        }
        else
        {
            document.getElementById("message3").style.display="none";
        }


        /*confirm password*/
        if(cpass=="")
        {
            document.getElementById("message4").innerHTML="**Password Cannot Be Empty"
            return false
        }
        if(pass!=cpass)
        {
            document.getElementById("message4").innerHTML="**Your Password is Not Matching"
            return false
        }
        else
        {
            document.getElementById("message4.4").innerHTML="**Your Password is Matched"
             document.getElementById("message4").style.display="none";
        }
           alert("Thank you for Signing")
    }

/*---------------------------------------login form-----------------*/
function login()
{
    var email=document.getElementById("email").value
    var pass=document.getElementById("pass").value
    if(email=="")
    {
        document.getElementById("message5").innerHTML="**Email Cannot Be Empty"
        return false

    }
    else
    {

        document.getElementById("message5.5").innerHTML="**Email is Matched"
        document.getElementById("message5").style.display="none"
    }

    if(pass=="")
    {
        document.getElementById("message6").innerHTML="**Password Cannot Be Empty"
        return false
    }
    

}
