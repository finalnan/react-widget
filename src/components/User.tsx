import React from 'react';
import axios from 'axios';

type UserProps = {
  id: string;
  name: string;
  username: string;
};

const User = () => {
  const [users, setUsers] = React.useState<UserProps[]>([]);

  const renderedUser = users.map((user: UserProps) => {
    return <li key={user.id}>{user.name}</li>;
  });

  React.useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(data);
    };

    getUsers();
  }, []);

  return <div className="ui container">{renderedUser}</div>;
};

export default User;
