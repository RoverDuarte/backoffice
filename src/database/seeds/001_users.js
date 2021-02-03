exports.seed = function(knex) {
  // deleta todos os registros existentes
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { 
          email : 'rover@hotmail.com.br',
          senha : 'CHiYxTNJ3mwO3EpkS',
        }
      ]);
    });
};

