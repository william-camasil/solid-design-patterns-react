import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

/*
SOLID > "S" = Single Responsibility Principle (Princípio da Responsabilidade Única)
Uma classe ou função deve ter uma única responsabilidade ou motivo para mudança. 
Ou seja, cada componente ou função deve fazer apenas uma coisa específica
*/

const useFetchUsers = () => {
  const [users, setUsers] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return users;
};

export default useFetchUsers;
