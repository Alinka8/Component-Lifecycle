import CharacterList from "./component/CharacterList";
import CharacterDetail from "./component/CharacterDetail";
import "./App.css";

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  return (
    <div className="app">
      <h1>Marvel Characters</h1>
      <div className="content">
        <CharacterList onCharacterSelect={setSelectedCharacterId} />
        <CharacterDetail characterId={selectedCharacterId} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
