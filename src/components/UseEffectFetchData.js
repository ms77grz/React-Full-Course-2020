import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

export default function UseEffectFetchData() {
  const [users, setUsers] = useState([]);

  // *** it's extremely importan to set [] as a dependency when getting data ***

  // using then
  // useEffect(() => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => setUsers(data));
  // }, []);

  // async/await approach
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (users.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map(user => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
