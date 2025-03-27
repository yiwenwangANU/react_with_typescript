import { createContext, ReactNode, useState } from "react";

interface User {
  userId: string;
  userName: string;
  age: number;
  isMarried: boolean;
}

interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: string, user: User) => void;
  deleteUser: (id: string) => void;
}

export const UserContext = createContext<UserContextType>({
  users: null,
  addUser: () => {},
  updateUser: () => {},
  deleteUser: () => {},
});

interface userProviderProps {
  children: ReactNode;
}
export const UserProvider = (props: userProviderProps) => {
  const [users, setUsers] = useState<User[] | null>(null);

  const addUser = (user: User) => {
    if (users) setUsers([...users, user]);
    else setUsers([user]);
  };
  const updateUser = (id: string, newUser: User) => {
    if (users) {
      users.map((user) => (user.userId === id ? newUser : user));
    }
  };
  const deleteUser = (id: string) => {
    if (users) {
      setUsers(users.filter((user) => user.userId !== id));
    }
  };
  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
