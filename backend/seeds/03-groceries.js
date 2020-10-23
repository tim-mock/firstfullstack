exports.seed = function (knex) {
  const items = [
    {
      item: "peanut butter",
      purchased: false,
      user: 1,
    },
    {
      item: "sponges",
      purchased: false,
      user: 1,
    },
    {
      item: "eggs",
      purchased: false,
      user: 1,
    },
  ];
  return knex("groceries").insert(items);
};
