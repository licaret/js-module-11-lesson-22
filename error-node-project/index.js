import fetch from 'node-fetch';

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log("Return users here");
    return users;
  } catch (err) {
    const error = new Error("custom message error");
    console.log("Throw error here");
    throw error;
  } finally {
    console.log("Final message async");
  }
};

fetchUsers()
  .then(users => console.log(users))
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log("Final message promise");
  });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(users => console.log(users))
//   .catch(err => console.error(err));