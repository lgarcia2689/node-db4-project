exports.seed = function(knex) {
      return knex('recipes').insert([
        {recipe_name: 'Broccoli Pesto Pasta'},
        {recipe_name: 'Lemon Chicken'},
        {recipe_name: 'Salmon en Papillote'},
      ])    
    };
