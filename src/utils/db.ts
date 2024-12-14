// src/utils/db.ts
interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = []; // Array untuk menyimpan data sementara

export const getUsers = () => users;

export const getUserById = (id: number) => users.find((user) => user.id === id);

export const addUser = (user: User) => {
  users.push(user);
  return user;
};

export const updateUser = (id: number, updatedUser: Partial<User>) => {
  const index = users.findIndex((user) => user.id === id);
  if (index > -1) {
    users[index] = { ...users[index], ...updatedUser };
    return users[index];
  }
  return null;
};

export const deleteUser = (id: number) => {
  const index = users.findIndex((user) => user.id === id);
  if (index > -1) {
    return users.splice(index, 1)[0];
  }
  return null;
};
