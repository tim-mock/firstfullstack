exports.seed = function (knex) {
  const todo = [
    {
      task: "clean room",
      completed: false,
      user: 1,
    },
    {
      task: "debug code",
      completed: false,
      user: 1,
    },
    {
      task: "have a healthy lunch",
      completed: false,
      user: 1,
    },
  ];
  return knex("todolist").insert(todo);
};
