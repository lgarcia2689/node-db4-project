exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredients_name: 'Broccoli', ingredients_unit:'lbs'},
        {ingredients_name: 'Pesto', ingredients_unit:'lbs'},
        {ingredients_name: 'Pasta', ingredients_unit:'lbs'},
        {ingredients_name: 'Lemon', ingredients_unit:'slices'},
        {ingredients_name: 'Chicken', ingredients_unit:'kilos'},
        {ingredients_name: 'Salmon', ingredients_unit:'grams'},
      ]);
    };