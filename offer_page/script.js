function validateForm(form){
				
			var fNm = form.fname.value;
			var eMl = form.email.value;
			var apos=eMl.indexOf("@");
			var dotpos=eMl.lastIndexOf(".");
				
			  if (fNm == "" || fNm == null){
			    alert( "Please enter your name." );
			    form.fname.focus();
			    return false;
			  }
			  else if(eMl == ""  || eMl == null){
				alert( "Please enter your email." );
			    form.email.focus();
			    return false;
			  }
			  else if(apos<1||dotpos-apos<2){
			    alert( "Not a valid email." );
			    form.email.focus();
			    return false;
			  }
			  else{
			  	return true;
			  }
			
			}
			
	var myVar=setInterval(function(){myTimer()},1000);
	function myTimer()
	{
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById("demo").innerHTML=t;
	}