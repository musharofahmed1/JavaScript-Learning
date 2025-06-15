const glass ={
    name: "glass",
    color: "White",
    price: 12,
    isClean: true
};
console.log(glass)

//keys : all property names
const keys = Object.keys(glass)
//[ 'name', 'color', 'price', 'isClean' ]
console.log(keys)

//values : all property values

const values = Object.values(glass)
//[ 'glass', 'White', 12, true ]

console.log(values)

//entries
const entries = Object.entries(glass);
console.log(entries)

/*
//[
  [ 'name', 'glass' ],
  [ 'color', 'White' ],
  [ 'price', 12 ],
  [ 'isClean', true ]
]
*/

//can delete object

delete glass.isClean
console.log(glass)

//{ name: 'glass', color: 'White', price: 12 }

//distructuring: all remove color any create a copy of main object
const {color, ...newGlass} = glass;
console.log(newGlass)

//freeze: will not change anything

Object.freeze(glass)
glass.source = "China";
glass.price = 120;
delete glass.name;
console.log(glass)

//seal

Object.seal(glass)
glass.source = "China";
glass.price = 120;
delete glass.name;
console.log(glass)

//will update price only because this is existing value, not everything