
function myfun(){
    var copyText = document.getElementById("red");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
//window.onload(alert("Welcome to Magic colos ver:1.0.11 we will work on more update and add  more colors on it "))
//window.screenTop(alert("hello"))

function showNotification(){
    const non = new Notification("new massage0",{
        body:"THNK u for allow s we will update u as soo as it possible;"

    });

}

console.log(Notification.permission);
if(Notification.permission ==="granted"){
    showNotification();

}
else if(Notification.permission !=="denied"){
    Notification.requestPermission(alert("Verson:1.0.2021")).then(permission =>{
        if(permission==="granted")
        showNotification()
       // console.log(Permission)

    });
}

var actions = Notification.actions;
