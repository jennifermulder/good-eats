const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Protein' },
    { name: 'Veggies' },
    { name: 'Sauces' },
    { name: 'Cheese' },
    { name: 'The Basics' },
    { name: 'Extras (Smoothies!)' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Turkey Brocolli Stuffed Bell Peppers',
      description:
        'Can be made with or without pizza sauce. Load with cheese and spices for extra goodness.',
      image: 'turkey-brocolli-bellpeppers.jpg',
      // time: 90min
      //favorite way to cook
      //ingredients
      //steps to make
      category: categories[0]._id,
      cooktime: 20,
      // ingredients to take array? Loop through array to create bullets?
      ingredients: 'Bell Peppers, turkey, brocolli, hot sauce, curry powder, cumin, mozarella',
      method: 'Airfryer',
      instructions: 'Panfry the turkey so that it is no longer pink, chop up brocolli into small pieces and add brocolli with spices to the mix. Add cheese to the mixture towards the end so that it starts to melt but does not burn. Layer cheese, stuffing, cheese, stuffing like a noodleless lasagna. Pop in the airfryer till cheese has melted on top.',
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Panko Shrimp',
      description:
        'All of the crunch, not all of the carbs.',
      image: 'panko-shrimp.jpg',
      category: categories[0]._id,
      cooktime: 25,
      ingredients: 'Shrimp, panko bread crumbs, 2 eggs, almond meal/ flour, grated parmesean cheese',
      method: 'Airfryer',
      instructions: 'Unshell thawed shrimp. Coat in flour, egg, parmesean cheese and panko bread crumbs. Airfry for about 10 - 15 minutes until shrimp has cooked. Pairs well with peanut sauce ',
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Brocolli Cheese Bites',
      category: categories[1]._id,
      description:
        'I like to buy large bags of brocolli. This is a guilt free way to eat more cheese.',
      image: 'brocolli-cheese-bites.jpg',
      cooktime: 20,
      ingredients: 'Brocolli, shredded cheese, grated parmesean cheese, small amount of turkey (to bind), egg, seasoning',
      method: 'Airfryer',
      instructions: 'Combine all ingredients together in a large bowl. Roll the mixture into small balls. Airfry for 10 minutes, till outer layer is crisp.',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Eggwhites Spinach Cheese',
      category: categories[4]._id,
      description:
        'Pretty self explanatory.',
      image: 'egg-spinach-cheese.jpg',
      cooktime: 20,
      ingredients: 'Eggwhites, spinach, cheese',
      method: 'Stove top',
      instructions: 'Great breakfast or snack time item',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Peanut Butter and Spinach smoothie',
      category: categories[5]._id,
      description:
        'Includes a bunch of other yummy things.',
      cooktime: 5,
      ingredients: 'Peanut Butter, Sinach, Honey, water, pineapple, cilantro, lime',
      method: 'Mixer',
      instructions: 'Combine all ingredients to mixer. Add as much water as necessary to get desired consistency',
      image: 'peanutbutter-spinach-smoothie.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Basil Cinnamon Chicken Wings',
      category: categories[0]._id,
      description:
        'Pretty much all in the title, Sweet and Savory with plenty of flavor',
      image: 'basil-cinammon-wings.jpg',
      cooktime: 20,
      ingredients: 'Wings or drumsticks, chopped up basil leaves, cinnamon, fish oil, coconut aminos, honey, red pepper flakes, toasted sesame oil',
      method: 'Airfryer',
      instructions: 'Create a marinade using all ingredients with proportions to your liking. Marinade overnight or for 4 hours if you are really hungry. Airfry for about 10 minutes and enjoy!',
      price: 399.99,
      quantity: 30
    },
    {
      name: '"Healthy Noodle" PadThai',
      category: categories[1]._id,
      description:
        'Plant based noodle alternative from the almighty Costco',
      image: 'healthynoodle-padthai.jpg',
      cooktime: 20,
      ingredients: 'Healthy Noods, Peanut Butter, Peanuts, Coconut Aminos, Cliantro, Eggs or Eggwhites, Lime Juice',
      method: 'Pan Fry',
      instructions: 'Cook noods according to directions on the package (rinse and pan fry for a few minutes). Throw in remaining ingredients, can add any protein (I didnt have any at the time). Top off with Sriratcha',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Bell Pepper Pizza',
      category: categories[4]._id,
      description:
        'The perfect snack for when you are craving Digiornos.',
      image: 'bellpepper-pizza.jpg',
      cooktime: 5,
      ingredients: 'Bell Peppers, Pepperoni, Mozarella, Basil',
      method: 'Airfryer',
      instructions: 'Cut bell pepper into 4ths. Add layer of cheese before pepperoni slices and basil, top with cheese. Can also add marinara sauce if desired. Goes great with ranch.',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Panko Crusted Mushrooms',
      category: categories[1]._id,
      description:
        'Basically vegetarian calamari',
      image: 'panko-mushrooms.jpg',
      cooktime: 20,
      ingredients: 'Mushrooms, panko bread crumbs, 2 eggs, teryaki sauce, sriratcha, almond meal/flour, grated parmesean cheese',
      method: 'Airfryer',
      instructions: 'Coat chopped mushrooms in egg and any desired sauces (teriyaki, hot sauce), then coat in flour, parmesean cheese, and panko bread crumb mixture. Airfry for about 10 minutes to cook the eggs. Pairs well with peanut sauce or fish oil sauce. ',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Bell Pepper Pizza',
      category: categories[4]._id,
      description:
        'The perfect snack for when you are craving Digiornos.',
      image: 'bellpepper-pizza.jpg',
      cooktime: 5,
      ingredients: 'Bell Peppers, Pepperoni, Mozarella, Basil',
      method: 'Airfryer',
      instructions: 'But bell pepper into 4ths. Add layer of cheese before pepperoni slices and basil, top with cheese. Can also add marinara sauce if desired. Goes great with ranch.',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Panko Crusted Zuchinni Fries',
      category: categories[1]._id,
      description:
        'Basically the same as the Panko Mushrooms',
      image: 'panko-zuchinni-fries.jpg',
      cooktime: 20,
      ingredients: 'Zuchinni, panko bread crumbs, 2 eggs, almond meal/flour, grated parmesean cheese',
      method: 'Airfryer',
      instructions: 'Coat chopped zuchinnis in egg, then coat in flour, parmesean cheese, and panko bread crumb mixture. Airfry for about 10 minutes to cook the eggs. Pairs well with peanut sauce or fish oil sauce. ',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Turkey Lettuce Wraps',
      category: categories[0]._id,
      description:
        'Pretty much anything can be made into a lettuce wrap with any sauce',
      image: 'turkey-lettuce-wraps.jpg',
      cooktime: 10,
      ingredients: 'Butter Lettuce, ground turkey, veggie toppings, desired sauces',
      method: 'Pan Fry',
      instructions: 'The only cooking involved is really the turkey. Throw in whatever sauces (I used teriyaki and sriracha). Once cooked, plate it on some washed butter lettuce and top with beansprouts, cilantro, etc.',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Peanut Butter Cookies',
      category: categories[4]._id,
      description:
        'The perfect snack for when you are craving Digiornos.',
      image: '',
      cooktime: 5,
      ingredients: 'Bell Peppers, Pepperoni, Mozarella, Basil',
      method: 'Airfryer',
      instructions: 'But bell pepper into 4ths. Add layer of cheese before pepperoni slices and basil, top with cheese. Can also add marinara sauce if desired. Goes great with ranch.',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Asian Wing Sauce',
      category: categories[2]._id,
      description:
        'Goes great on wings. Goes great on anything.',
      image: 'asian-wing-sauce.jpg',
      cooktime: 5,
      ingredients: 'Soy Sauce, Honey, Lime Juice, Hot Sauce (I prefer vinnegar based or buffalo sauce), Peanut Sauce. Red Pepper Flakes',
      method: 'Airfryer',
      instructions: 'Mix it all up with some corn starch to make it thicker. Airfry wings before coating in sauce. Indulge',
      price: 9.99,
      quantity: 100
    },
    
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
