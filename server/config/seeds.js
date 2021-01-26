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
      ingredients: 'Shrimp, panko bread crumbs, 2 eggs, flour',
      method: 'Airfryer',
      instructions: 'Unshell thawed shrimp. Coat in flour, egg, and panko bread crumbs. Airfry for about 10 - 15 minutes until shrimp has cooked. Pairs well with peanut sauce ',
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
      cooktime: 20,
      ingredients: 'stuff',
      method: 'airfryer',
      instructions: 'more instructions',
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
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      cooktime: 20,
      ingredients: 'stuff',
      method: 'airfryer',
      instructions: 'more instructions',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      cooktime: 20,
      ingredients: 'stuff',
      method: 'airfryer',
      instructions: 'more instructions',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      cooktime: 20,
      ingredients: 'stuff',
      method: 'airfryer',
      instructions: 'more instructions',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      cooktime: 20,
      ingredients: 'stuff',
      method: 'airfryer',
      instructions: 'more instructions',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      cooktime: 20,
      ingredients: 'stuff',
      method: 'airfryer',
      instructions: 'more instructions',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      cooktime: 20,
      ingredients: 'stuff',
      method: 'airfryer',
      instructions: 'more instructions',
      price: 9.99,
      quantity: 600
    }
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
