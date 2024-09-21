import "./HomeScreen.css";
import BaseButton from "../../components/Button/BaseButton";
import DangerButton from "../../components/Button/DangerButton";
import useFetchUsers from "../../service/useFetchUsers";

const HomeScreen = () => {
  const handleClick = () => {
    console.log("teste");
  };

  const users = useFetchUsers();

  return (
    <div className="App">
      <header className="App-header">
        <p>Página não encontrada</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sobre
        </a>
        {/* SOLID - S */}
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.title}</li>
          ))}
        </ul>

        {/* SOLID - O */}
        <BaseButton title={"Clique aqui"} onClick={handleClick} />
        <DangerButton title={"Clique aqui"} onClick={handleClick} />
      </header>
    </div>
  );
};

export default HomeScreen;
