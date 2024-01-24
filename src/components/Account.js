import React from 'react';

const Account = ({user}) => {
  return (
    <div>
          <h2>Клиент</h2>
          <p>{user.fio} {user.phone}</p>
          <h2>Счета:</h2>
          <table>
            {user.accounts.accounts.map((account, index) => (
              <tr key={index}><td>{account.type}</td><td>{account.number}</td></tr>
            ))}
          </table>
        </div>
  );
};

export default Account;