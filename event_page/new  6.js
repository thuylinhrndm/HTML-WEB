<script language="JavaScript" type="text/javascript">
	var myVar=setInterval(function(){myTimer()},1000);
	function myTimer()
	{
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById("demo").innerHTML=t;
	}
	
	function validateForm(form){
	
	 var fname=form.fname.value;
	 var lname =form.lname.value;
	 var tel =form.tel.value;
	 var email =form.email.value;
	 var date = form.no_guests.value;
     var apos=email.indexOf("@");
	 var dotpos=email.lastIndexOf(".");
	  if (fname==null || fname=="")
        {
         alert("first name must be filled out");
		 form.fname.focus();
		 return false;
        } 
	
	 else if (lname==null || lname=="")
        {
         alert("second name must be filled out");
		 form.lname.focus();
			return false;
        }
	else if (tel==null || tel=="")
        {
         alert("telephone must be filled out");
		 form.tel.focus();
			return false;
         
		}
	else if(email==null || email=="")
        {
         alert("email must be filled out");
		 form.email.focus();
			return false;
          } 
	else if(apos<1||dotpos-apos<2){
		  alert( "Not a valid email." );
			form.email.focus();
			    return false;
			  }
	else if(no_guests==null || no_guests=="")
		{
		 alert("number of guests must be filled out");
		 form.no_guests.focus();
		   return false;
		   } 
		   else{
		   return true;
		}
	}
	
</script>
	