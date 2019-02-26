
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', table => {
      table.string('description');
      table.date('date_achieved');
    })
  ])

};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('milestones')
  ]);
};

// The milestones table should have the following fields:

// description (string)
// date_achieved (date)