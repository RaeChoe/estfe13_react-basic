function Myheader({ title, desc, onChangeMode }) {
  console.log("Myheader render");
  return (
    <header>
      <h1
        className="logo"
        onClick={() => {
          onChangeMode();
        }}
      >
        {title}
      </h1>
      <p>{desc}</p>
    </header>
  );
}

export default Myheader;
