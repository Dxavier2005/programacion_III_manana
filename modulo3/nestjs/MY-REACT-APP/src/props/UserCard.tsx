interface User {
  name: string;
  lastName: string;
  age: number;
  address: string;
  phone: string;
}

export default function UserCard({ user }: { user: User }) {
  return <div>{user.name} {user.lastName} - {user.age} años, 
      Dirección: {user.address}, 
      Teléfono: {user.phone}</div>;
}