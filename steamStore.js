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


WG[261570]="platinum";//ori and the blind forest
WG[387290]="platinum";//ori and the blind forest definitive edition
WG[]="";//ori and the Will of the Wisps

WG[15100]="platinum";//Assasin's Creed director cut
WG[15100]="platinum";//Assasin's Creed director cut
WG[33230]="gold";//Assasin's Creed II
WG[208480]="garbage";//Assasin's Creed III
WG[48190]="platinum";//Assasin's Creed Brotherhood
WG[201870]="platinum";//Assasin's Creed Revelations
WG[354380]="gold";//Assasin's Creed Chronicles: China
WG[277590]="untested";//Assasin's Creed Freedom Cry
WG[260210]="garbage";//Assasin's Creed Libertion
WG[242050]="silver";//Assasin's Creed IV Black Flag
WG[311560]="silver";//Assasin's Creed Rogue
WG[289650]="garbage";//Assasin's Creed Unity
WG[368500]="garbage";//Assasin's Creed Syndicate
WG[201870]="platinum";//Assassin's Creed: Revelations
//Assassin’s Creed® Chronicles: Russia
//Assassin’s Creed® Chronicles: india

WG[13600]="gold"; //Prince of Persia®: The Sands of Time
WG[13500]="platinum"; //Prince of Persia: Warrior Within™
WG[13530]="platinum";//Prince of Persia: The Two Thrones™
WG[19980]="platinum";//Prince of Persia®
WG[33320]="gold"; //Prince of Persia: The Forgotten Sands™ //steam silver? 1.6 vs 1.7

WG[323470]="platinum"; //// DRAGON BALL XENOVERSE 
WG[454650]="bronze"; //// DRAGON BALL XENOVERSE 2
WG[17390]="platinum"; // Spore
WG[251770]="platinum"; // Shadow Man
WG[294860]="platinum";// Valkyria Chronicles
WG[11020]="platinum";// TrackMania Nations Forever
WG[32360]="platinum";// The Secret of Monkey Island: Special Edition
WG[6183]="gold";// The Secret of Monkey Island: Special  bundle?
WG[32460]="gold";//Monkey Island™ 2 Special Edition: LeChuck’s Revenge
WG[6910]="platinum";// Deux Ex: Game Of The Year Edition
WG[8980]="platinum";// Borderlands
WG[205950]="platinum";// Jet Set Radio
WG[242980]="platinum";// Daikatana
WG[4560]="platinum";// company of heroes
WG[17410]="platinum";//Mirror's Edge
WG[19680]="platinum";//Alice: Madness Returns
WG[324160]="platinum";//CLANNAD
WG[420100]="platinum"; //CLANNAD Side Stories
WG[462990]="gold";//Tomoyo After ~It's a Wonderful Life~ English Edition
WG[256290]="platinum";//Child of Light


WG[70400]="gold"; //Recettear: An Item Shop's Tale
WG[218680]="gold"; //Scribblenauts Unlimited (3ds or remix android)
WG[249870]="silver";// Scribblenauts unmasked

//WG[]="gold"; //Alan Wake not on steam anymore
WG[278080]="gold"; //DYNASTY WARRIORS 8: Xtreme Legends Complete Edition
WG[322520]="untested";//DYNASTY WARRIORS® 8 Empires
WG[23310]="platinum"; //The Last Remnant
WG[283680]="gold"; //Astebreed
WG[71250]="garbage"; //Sonic Adventure DX //demo isgold
WG[259170]="gold"; //Alone in the dark
WG[275060]="untested"; //Alone in the dark illumination

WG[548090]="platinum"; //Alone in the dark 1
WG[548890]=""; //Alone in the dark 2
WG[548900]=""; //Alone in the dark 3
WG[259190]="platinum";  //Alone in the Dark: The New Nightmare


WG[251150]="gold";//The Legend of Heroes: Trails in the Sky
WG[251290]="gold";//The Legend of Heroes: Trails in the Sky sc
WG[436670]="gold";//The Legend of Heroes: Trails in the Sky 3rd
WG[285310]="platinum";//RollerCoaster Tycoon®: Deluxe
WG[285330]="gold";//RollerCoaster Tycoon 2: Triple Thrill pack
WG[2700]="gold";//RollerCoaster Tycoon 3:Platinum
WG[71230]="gold";//Crazy Taxi
WG[316720]="gold";//Planetarian ~the reverie of a little planet~
WG[385800]="untested";//NEKOPARA Vol. 0
WG[333600]="gold";//NEKOPARA Vol. 1
WG[420110]="untested";//NEKOPARA Vol. 2
WG[602520]="untested";//NEKOPARA Vol. 3
WG[311730]="gold";//Dead or Alive 5 Last Round (core fighters)


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

