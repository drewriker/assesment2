///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

const pizza = {
    name: 'Hawaiian',
    price: 16,
    category: 'entree',
    popularity: 'High',
    rating: 4.8,
    tags: ['pineapple', 'ham']
}


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log(pizza.popularity);


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(pizza.tags[1]);


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

const price = pizza.price;
console.log(price)


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

const category = pizza.category;
console.log(category)


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

const foodArr = [
    {
        name: 'Burger',
        price: 8.99,
        popularity: 'High',
        rating: 4.5,
        tags: ['fast food', 'American', 'burger'],
        category: 'Main Course'
    },
    {
        name: 'Sushi',
        price: 15.50,
        popularity: 'Low',
        rating: 4.2,
        tags: ['Japanese', 'seafood', 'healthy'],
        category: 'Main Course'
    },
    {
        name: 'Pasta',
        price: 12.75,
        popularity: 'High',
        rating: 4.7,
        tags: ['Italian', 'pasta', 'comfort food'],
        category: 'Main Course'
    },
    {
        name: 'Tacos',
        price: 10.25,
        popularity: 'High',
        rating: 4.4,
        tags: ['Mexican', 'tacos', 'spicy'],
        category: 'Main Course'
    },
    {
        name: 'Salad',
        price: 7.50,
        popularity: 'Medium',
        rating: 4.0,
        tags: ['healthy', 'vegetarian', 'salad'],
        category: 'Appetizer'
    }
]



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE


const filteredFood = foodArr.filter(food => food.tags.includes('spicy'))

// console.log(filteredFood)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
function filterByProperty(property, number, type) {
    let filteredArray = [];

    if (type === 'above') {
        filteredArray = foodArr.filter(food => food[property] > number);
    } else {
        filteredArray = foodArr.filter(food => food[property] < number);
    }
    return filteredArray;
}


/*
    Invoke the `filterByProperty` function passing
    in a value for each parameter.

    You'll have to console.log to see the filtered array
*/

console.log(filterByProperty('price', 12, 'above'))