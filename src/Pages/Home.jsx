const topics = [
  { key: "linux", label: "linux.png" },
  { key: "cpp", label: "c.png" },
];

function Home({ onSelectTopic }) {
  return (
    <div className="home">
      <img
        src="logo.png"
        className="logo"
      />
      <p>Select a topic to begin</p>

      <div className="topic-list">
        {topics.map((topic) => (
          <button
            key={topic.key}
            className="topic-button"
            onClick={() => onSelectTopic(topic.key)}
          >
            < img src={topic.label} alt="Logo button" style={{ width: '50px', height: '50px' }}></img>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
