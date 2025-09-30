import React, { FC } from "react";

interface Props {
  data: any[];
}

const UsersView: FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-6">Users</h2>
      <ul className="space-y-4">
        {data.map((user) => (
          <li
            key={user.id}
            className="border p-4 rounded bg-white shadow flex flex-col gap-1"
          >
            <span className="font-semibold">
              {user.name.firstname} {user.name.lastname}
            </span>
            <span className="text-gray-600 text-sm">{user.email}</span>
            <span className="text-gray-500 text-sm">{user.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersView;
