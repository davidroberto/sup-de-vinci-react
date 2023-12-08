import Nav from "./Nav";

const Header = () => {
  const profil = {
    lastName: "Robert",
    firstName: "David",
    age: 33,
    job: "web dev",
  };

  return (
    <header>
      <h1>Titre</h1>
      <Nav />
      <p>
        {profil.firstName} {profil.lastName} : {profil.job}
      </p>
    </header>
  );
};

export default Header;
