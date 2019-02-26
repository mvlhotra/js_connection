
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('milestones', table => {
      table.increments('id');
      column.primary('id_pkey');
      table.primary('id', 'id_pkey')
    })
  ])

};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('milestones', table => {
      table.dropPrimary('id_pkey');
      table.dropColumn('id');
    })
  ]);
}; 
