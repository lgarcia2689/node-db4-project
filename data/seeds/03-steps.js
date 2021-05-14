exports.seed = function(knex) {
  return knex('steps').insert([
    {step_text: 'Heat pan', step_number:1, recipe_id: 1},
    {step_text: 'Add Broccoli', step_number:2, recipe_id: 1},
    {step_text: 'Add pesto mixed with pasta', step_number:3, recipe_id: 1},
    {step_text: 'Heat oven', step_number:1, recipe_id: 2},
    {step_text: 'Put chicken and lemon in oven', step_number:2, recipe_id: 2},
    {step_text: 'put in oven at 500 degrees', step_number:3, recipe_id: 2},
    {step_text: 'Fish a salmon in the Bidasoa river', step_number:1, recipe_id: 3},
    {step_text: 'Cook Salmon', step_number:2, recipe_id: 3},
  ]);
};