
  var d1;
  var show;
  var splitted_time;
  var splitted_date;

  function changetime()
  {
    d1 = new Date();
    show = d1.toString('yyyy-MM-dd');  
    splitted_date = show.split(" ");
    splitted_date = String(splitted_date[4]);
    splitted_time = splitted_date.split(":");
    document.getElementById("time").innerHTML = (splitted_time[0] + ":" + splitted_time[1] + ":" + splitted_time[2]);
    return splitted_time[0];
  }

  function wishadmin()
  {
    var hours = changetime();
    if(hours>=5 && hours<12)
     {
      document.getElementById("wish").innerHTML="GOOD MORNING KARTIK";
     }
    else if(hours>=12 && hours<18)
     {
      document.getElementById("wish").innerHTML="GOOD AFTERNOON KARTIK";
     }
    else if(hours>=18 && hours<0 || hours>=0 && hours<5)
     {
      document.getElementById("wish").innerHTML="GOOD EVENING KARTIK";
     }
  }

  setInterval(wishadmin,1000);
  
