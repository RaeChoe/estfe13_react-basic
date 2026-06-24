function Controls({ onChangeMode }) {
  console.log("Controls render");
  return (
    <div className="menu">
      <button
        onClick={() => {
          onChangeMode();
        }}
      >
        Create
      </button>
    </div>
  );
}
export default Controls;
