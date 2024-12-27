req and res and next
-> req me sara data hota hai aane vale user ki request ki taraf ka, jaise ki uski location, device info and other thinsgs, res me controls hote hai jinke basis pe hum server se response bhej paate hai, next is just a push so that our request moves to the next thing which shhould be executed

url me jab bhi aapke pass ek aisa pattern ho

/:username -> params

route parameter -> to make any route dynamic you can use : at the place where you want to makr it dyanmic, and to access there value use req.params


template engine -> ye ek style of markup se converrt karke aapko html dete hai
->pug, handlebars,ejs
-> ek markup style jo ki baad me convert ho jayegi html me



<!-- ejs setup karne ke liye
1) ejs install  -> npm i ejs
2) configure ejs

app.set("view engine","ejs")

3) ek views folder banao

4) usme ejs files banao

5) end ki jagah render karo => render karte waqt make sure aap view folder ke ander wali hi file kaa naam likhe, aur render fnction .ejs mention naa kare
-->

<!-- static file ko setup karne ke liye : -->
1) create a folder called public
2) create three folders inside it, images, stylesheets, javascript
3) configure the express static in index.js file 
4) understand the path



