import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const user = await fetch(`https://fakestoreapi.com/users/${id}`).then((res) =>
    res.json()
  );

  const fullName = `${user.name.firstname} ${user.name.lastname}`;

  return {
    title: fullName,
    description: `Username: ${user.username} | Email: ${user.email}`,
    openGraph: {
      images: [
        `https://ui-avatars.com/api/?name=${user.name.firstname}+${user.name.lastname}`,
      ],
    },
  };
}

export async function generateStaticParams() {
  const data = await fetch("https://fakestoreapi.com/users?limit=100").then(
    (res) => res.json()
  );
  return data?.map((user: any) => ({
    id: user.id.toString(),
  }));
}

const UsersDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await fetch(`https://fakestoreapi.com/users/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());

  return (
    <div className="h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-6 mt-10">
        <h1 className="text-2xl font-bold mb-4">
          {user.name.firstname} {user.name.lastname}
        </h1>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>City:</strong> {user.address.city}
        </p>
        <p>
          <strong>Street:</strong> {user.address.street}, {user.address.number}
        </p>
        <p>
          <strong>Zipcode:</strong> {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UsersDetail;
