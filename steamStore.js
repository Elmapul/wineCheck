//@autor Igor Giuseppe (Elmapul)
var WG=[]; //(wine-able games)
WG[282900]="gold";	//neptunia rebirth 1
WG[351710]="gold";	//neptunia rebirth 2
WG[353270]="gold";	//neptunia rebirth 1
WG[225300]="silver";	//tombraider 2

var aux1= document.getElementsByClassName("search_result_row");
aux3=document.getElementsByClassName("responsive_search_name_combined");

for (i=0;i<25;i++){
  var aux2=aux1[i].getAttribute("data-ds-appid");
  var num=Number(aux1[i].getAttribute("data-ds-appid"));

  if(WG[num]=="gold" || WG[num]=="platinum" || WG[num]=="silver" ){
    aux4=aux3[i].children[0];
    aux5=aux4.children[1];
    aux5.innerHTML=aux5.innerHTML+'<span class="platform_img linux"></span>' +WG[num];
  }

}
