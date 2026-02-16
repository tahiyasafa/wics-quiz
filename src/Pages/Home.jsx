const topics = [
  { key: "linux", label: "Linux 🐧" },
  { key: "cpp", label: "C++ 💻" },
];

function Home({ onSelectTopic }) {
  return (
    <div className="home">
      <h1>WiCS Quiz Game</h1>
      <p>Select a topic to begin</p>

      <div className="topic-list">
        {topics.map((topic) => (
          <button
            key={topic.key}
            className="topic-button"
            onClick={() => onSelectTopic(topic.key)}
          >
            {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
