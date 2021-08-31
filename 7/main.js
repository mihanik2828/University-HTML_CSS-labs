function isEmpty(str){
    return (str == null) || (str.length == 0);
   }
function check() {
    
    var str = document.getElementById("txt").value;
    var str1 = document.getElementById("reg").value;
    var re = new RegExp(str1);
    var status = document.getElementById("status");
    
    if (re.test(str)) status.innerHTML = "Satisfy";
      else status.innerHTML = "Don`t satisfy";
    if(isEmpty(str)) status.innerHTML = "Field is empty";
   }