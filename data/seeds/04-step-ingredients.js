exports.seed = function(knex) {
  return knex('step_ingredients').insert([
    {quantity: 1, step_id:2, ingredients_id: 1},
    {quantity: 1.5, step_id:3, ingredients_id: 2},
    {quantity: 2, step_id:3, ingredients_id: 3},
    {quantity: 1, step_id:5, ingredients_id: 4},
    {quantity: 0.4, step_id:5, ingredients_id: 5},
    {quantity: 1, step_id:7, ingredients_id: 6},
  ]);
};