
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('milestones', table => {
      table.increments('id');
    })
  ])

};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('milestones')
  ]);
};
