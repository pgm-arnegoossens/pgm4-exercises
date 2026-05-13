const tableName = "users";
 
const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    { firstname: "Arne", lastname: "Goossens", bio: "Hallo ik ben Arne"},
    { firstname: "Bavo", lastname: "Goossens", bio: "Hallo ik ben Bavo"},
    { firstname: "Enea", lastname: "Goossens", bio: "Hallo ik ben Enea"},
  ]);
};
 
export { seed };