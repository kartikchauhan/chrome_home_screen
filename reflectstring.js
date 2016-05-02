 var purpose = document.getElementById("input-1");
 var details = document.getElementById("input-2");
 details.addEventListener("keydown",function(e){
  if(e.keyCode ===13)
  {
   
  	setCookie(purpose.value,details.value,1);
  	        document.getElementById("reflect").innerHTML = purpose.value + " " + details.value;
             $(document).ready(function(){
           
             $("#reflect").fadeOut(10000);
             
    });
  	  	    // document.getElementById("reflect").innerHTML = details.value;
   }
 });
 
 function setCookie(purpose,details,expiry)
 {
   var date = new Date();
   date.setTime(date.getTime()*expiry*1000*60*60*24);
   var expires = "expires=" + date.toGMTString();
   document.cookie = purpose+"="+details+"; "+expires;
 }

function getCookie() {
    // var name = cname + "=";
    var ca = document.cookie.split(';'); 
    var range = ca.length - 4;
    for(var i=(ca.length); i>(ca.length-4); i--) {
       // alert(i + ' ' + range);
 
        
        var c = ca[i-1];
        // document.getElemtById("para"+(i+1)).innerHTML = c;
        var x = c.split("=");
        var y = x[0];
        var z = x[1];
        
        if(y!='' && z!='')        
        {
          // alert(y + ' ' + z);
           document.getElementById("overlay"+(i-range)).style.visibility="visible";
          document.getElementById("purpose"+(i-range)).innerHTML = y;
          document.getElementById("details"+(i-range)).innerHTML = z;
        }
        

        
        // document.getElementById("para"+(i+1)).innerHTML = y + " " + z;
      }
    return "";
}

// function checkCookie() {
// 	// alert("do something new");
//     var user=getCookie(purpose);
//     if (user != "") {
//         alert("Welcome again " + user);
//     } else {
//         user = prompt("Please enter your name:","");
//         if (user != "" && user != null) {
//             setCookie("purpose", user, 30);
//       }
//     }
// }


getCookie();