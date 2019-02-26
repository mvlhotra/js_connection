exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones'),
    knex.schema.createTable('milestones', table => {
      table.increments('id');
      table.integer('famous_person_id');
      table.string('description');
      table.date('date_achieved');
      table.foreign('famous_person_id').references('id').inTable('famous_people');

    })
  ])

};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ]);
};
