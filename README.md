# wineCheck
verify if the game from the steam store runs on linux via wine.

## how to use
-navigate to the steam store on your browser, eg:
http://store.steampowered.com/search/?sort_by=Released_DESC&category1=998

1. press F12
2. click on the console tab
3. if that is your first time running code on console, type allow pasting then press enter
4. copy the code from the file steamStore.js and paste on the console, then press enter
5. you can also configure an grease monkey script to do run this code everytime you open the store.

## how to contribute
1. search for the game that you want on steam store, and get it app id
example on the URL
http://store.steampowered.com/app/282900/Hyperdimension_Neptunia_ReBirth1___ReBirth1/

282900 is the app id, in the example above.

2. search for the game on wineHQ and see the higher rating for the game
example on: 
https://appdb.winehq.org/objectManager.php?sClass=version&iId=31648
"gold" is the rating.
3. if the game is an game with constant updates (eg: an MMORPG or MOBA) , see what is the most recent rating.

4. write an line of code in the format

WG[appid]="rating"; 

for the example above, its look like something like that:
WG[282900]="gold"; 
5. add it to the beggining of the file, for personal use, or open an issue on the issue tracker, with the line of code that you created.

* please, avoid single game contributions:

* if the game have more than one title 
(eg: tombraider 1, tombraider 2)
group all of then, then open the issue.

* if the game have only one version
you may group other games from the same company (developer or publisher)

## to-do next
* adapt the script for the wishlist
* create the same script for gog, humble bundle etc.
* add the "text: easy install" for games on playonlinux.
* automatic search for the game on winehq (it may be slower or have cross site script issues)
