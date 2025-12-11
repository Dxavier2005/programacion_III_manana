export default function UserCard() {
  const user = {
    name: "Xavier",
    lastname: "Simbaña",
    age: 24,
    address: "Carapungo",
    phone: "0987654321"
  };

  return (
    <div>
      {user.name} {user.lastname} - {user.age} años <br />
      Dirección: {user.address} <br />
      Teléfono: {user.phone}
    </div>
  );
}
