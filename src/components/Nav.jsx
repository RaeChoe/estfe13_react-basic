function Nav({ data, onChangeMode }) {
  console.log("Nav render");
  const lists = data.map(d => (
    <li key={d.id}>
      <a
        href={`/${d.id}`}
        data-id={d.id}
        onClick={e => {
          e.preventDefault();
          onChangeMode(Number(e.target.dataset.id));
        }}
      >
        {d.title}
      </a>
    </li>
  ));
  // lists에 출력할 코드 생성

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
}

export default Nav;
