//const arr = [1, 2, 3, 4, 5]
//const sum = arr.reduce((cur_sum, cur_val) => cur_sum + cur_val)
////const new_arr = arr.map(ele => ele + 2)
////console.log(new_arr)
//console.log(sum)

const cartItems = [
    {
        id: 1,
        name: "Wireless Mouse",
        price: 799.999,
        quantity: 2,
        discount: 10  // in percentage
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 2499.50,
        quantity: 1,
        discount: 15
    },
    {
        id: 3,
        name: "Bluetooth Headphones",
        price: 1999,
        quantity: 1,
        discount: 5
    },
    {
        id: 4,
        name: "Laptop Stand",
        price: '999',
        quantity: 3,
        discount: 20
    },
    {
        id: 5,
        name: "USB-C Cable",
        price: 299,
        quantity: 4,
        discount: 0
    }
];


const payable = cartItems.reduce((cur_amount, cur_item) => {
    //unit_price=price-price*(dicount/100)
    //gross_price=unit_price*quantity
    const { price, discount, quantity} = cur_item
    const unit_price = parseFloat(price) * (100 - discount) / 100;
    const gross_price = unit_price * quantity;
    return cur_amount + gross_price

}, 0)

console.log(payable.toFixed(2))
