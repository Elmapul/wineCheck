//@autor Igor Giuseppe (Elmapul)
var WG=[]; //(wine-able games)
WG[282900]="gold";	//neptunia rebirth 1
WG[351710]="gold";	//neptunia rebirth 2
WG[353270]="gold";	//neptunia rebirth 3

WG[496810]="untested";//MegaTagmension Blanc + Neptune VS Zombies (Neptunia)
WG[387340]="bronze";	//Hyperdimension Neptunia U: Action Unleashed
WG[460120]="bronze";   //Megadimension Neptunia VII
WG[415480]="garbage";	 //Hyperdevotion Noire: Goddess Black Heart (Neptunia)
WG[571530]="untested"; //Superdimension Neptune VS Sega Hard Girls

WG[224960]="";//Tomb Raider I
WG[225300]="silver";	//tombraider II
WG[225320]="platinum";	//Tomb Raider III: Adventures of Lara Croft
WG[224980]="bronze";//Tomb Raider IV: The Last Revelation //GOG
WG[225000]="platinum";//Tomb Raider V: Chronicles //first relase
WG[225020]="gold";//Tomb Raider VI: The Angel of Darkness
WG[8140]="platinum";//Tomb Raider: Underworld //STEAM -bronze
WG[7000]="platinum"//Tomb Raider legend 
WG[289690]="";//LARA CROFT AND THE TEMPLE OF OSIRIS™
WG[35130]="platinum";//Lara Croft and the Guardian of Light
//203160 Tomb Raider (2013) nativo //platinum
WG[391220]="bronze";//Rise of Tomb Raider


WG[]="";//


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
