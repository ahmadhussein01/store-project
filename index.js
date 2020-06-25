//ahmad & amir
//Tast 1
let backpack = {
    color: "black",
    size: "large",
    price: 50
};
let handbag ={
    color :"red",
    size: "small",
    price:20
};
let hat = {
    color: "navy blue",
    size: "one size",
    price: 50
}
//Task 2
backpack.imgSrc = 'https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/88a8c7de541c4236b60fa87f01033d4c_9366/Originals_National_Backpack_Black_CH7652_01_standard.jpg';
handbag.imdSrc='https://5.imimg.com/data5/IF/BR/MY-42061017/ladies-designer-handbag-500x500.jpeg';
hat.imdSrc='https://www.walkerandhawkes.co.uk/wp-content/uploads/2019/03/RT_BOSTON_HERITAGE-NAVY_HAT.jpg';

//Task 3
console.log(`Big sale on ${backpack.color} Backpack, they are available now for just ${backpack.price}$!`);
console.log(`Big sele on ${handbag.color} handbag,they are available now jest for ${handbag.price}!`);
console.log(`Big sele on ${hat.color} Hats,they are available for just ${hat.price}$!`);
//Task 4
handbag.brand="chanel";
backpack.brand = 'Adidas';
hat.brand='walker';

//Task 5
let jewelry = [];

//Task 6
//Initiate Subcats first
let rings = {
    name: null ,
    inventory: null,
    price: 20
}
let bracelets ={
    name :null ,
    inventory : null,
    price : 80


};
let earrings = {
    name: null ,
    inventory: 5,
    price: 100
}
//Place Subcats in Array
jewelry[0] = rings;
jewelry[1]=bracelets;
jewelry[2] = earrings;
 
//Task 7
// Initiate a variable for Mother's day
let mothersDay = "mother Day's";
if (mothersDay=="mother Day's"){ //Checking if true
   
    for (let i=0;i<=2;i++){
        let discount=jewelry[i].price*0.5;
       jewelry[i].price=discount;
       console.log(`Today's Mother's day ${jewelry[i].price}`);
    }
    
}

//Task 8
jewelry[2].inventory= 0;


//Task 9 
//Iniate the Object properties then Push into Array
let necklaces = {
    name: null,
    inventory: 35,
    price: 14
};
jewelry.push(necklaces);
