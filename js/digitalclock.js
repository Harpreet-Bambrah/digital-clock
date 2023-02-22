function digitalclock(){
    let hours = new Date().getHours();
    let seconds = new Date().getSeconds();
    let minutes = new Date().getMinutes()
    if( hours >12){

        let hours12 = hours-12

        if(hours12<10){
            document.getElementsByTagName("span")[0].innerHTML='0'+hours12+':';
        }else{
            document.getElementsByTagName("span")[0].innerHTML=hours12;
        }
    }else{
        document.getElementsByTagName("span")[0].innerHTML= new Date().getHours()+":";
    }
   
   
   if(seconds<10){
    document.getElementsByTagName("span")[2].innerHTML = '0'+seconds;
    

   }else{
    
       document.getElementsByTagName("span")[2].innerHTML =  new Date().getSeconds();
   }

   if(minutes<10){
    document.getElementsByTagName("span")[1].innerHTML =  '0'+new Date().getMinutes()+":";
   }else{
    document.getElementsByTagName("span")[1].innerHTML =  new Date().getMinutes()+":";
   }
   
   
   
    if( hours =>12){
        document.getElementsByTagName("span")[3].innerHTML = "PM";
    }else{
    document.getElementsByTagName("span")[3].innerHTML ="AM" 
    }

    document.getElementsByTagName("span")[4].innerHTML= new Date().getDate()+"-";
    document.getElementsByTagName("span")[5].innerHTML= new Date().getMonth()+1 +"-";
    document.getElementsByTagName("span")[6].innerHTML= new Date().getFullYear();
}
setInterval(digitalclock,1000);