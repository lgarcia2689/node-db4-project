exports.up = async function(knex) {
    await knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name', 100).notNullable().unique()
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredients_id')
      tbl.string('ingredients_name', 100).notNullable().unique()
      tbl.string('ingredients_unit', 100)
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id')
      tbl.string('step_text').notNullable()
      tbl.integer('step_number').notNullable()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT') // YOU WON'T NEED IT!!!!
    })
    .createTable('step_ingredients', tbl => {
      tbl.increments('step_ingredients_id')
      tbl.integer('quantity').notNullable()
      tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE') // YOU WON'T NEED IT!!!!
      tbl.integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('ingredients_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT') // YOU WON'T NEED IT!!!!
    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
