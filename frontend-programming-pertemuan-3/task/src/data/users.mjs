const users = [
  {
    name: "Aufa",
    age: 22,
    major: "Frontend Engineer",
  },
  {
    name: "Isfa",
    age: 20,
    major: "Android Engineer",
  },
  {
    name: "Agung",
    age: 24,
    major: "Data Engineer",
  },
  {
    name: "Nurul",
    age: 24,
    major: "English",
  },
  {
    name: "Jaki",
    age: 27,
    major: "English",
  },
];

/**
 * TODO 1.
 * Export variable users.
 * Gunakan export default.
 */
// CODE HERE
const hasil= users.find(function(user){
  return user.age <23;
});
// export default users;

export default  users ;