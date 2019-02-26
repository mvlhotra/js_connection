exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('milestones', table => {
      table.integer('famous_person_id');
      table.foreign('famous_person_id').references('id').inTable('famous_people');

    })
  ])

};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('milestones')
  ]);
};
