// const fetchUsers = async () => {
//   const baseUrl = "https://jsonplaceholder.typicode.com";

//   const firstResponse = await fetch(`${baseUrl}/users/1`);
//   const secondResponse = await fetch(`${baseUrl}/users/2`);
//   const thirdResponse = await fetch(`${baseUrl}/users/3`);

//   const firstUser = await firstResponse.json();
//   const secondUser = await secondResponse.json();
//   const thirdUser = await thirdResponse.json();

//   console.log(firstUser);
//   console.log(secondUser);
//   console.log(thirdUser);
// };

const fetchUsers = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const firstPromise = fetch(`${baseUrl}/users/1`);
  const secondPromise = fetch(`${baseUrl}/users/2`);
  const thirdPromise = fetch(`${baseUrl}/users/3`);

  const promises = [firstPromise, secondPromise, thirdPromise];
  const arrPromises = promises.map(async res => (await res).json());
  const jsonResponses = await Promise.all(arrPromises);
  jsonResponses.forEach(jsonResponse => console.log(jsonResponse));
};

fetchUsers();