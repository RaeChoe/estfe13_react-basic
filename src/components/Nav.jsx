//Nav 컴포넌트
import { memo } from "react";

const Nav = memo(function Nav({ id, data, onChangeMode }) {
  console.log("Nav render");
  const lists = data.map(d => (
    <li key={d.id} className="nav-item">
      <a
        href={`/${d.id}`}
        className={`nav-link ${d.id === id ? "active" : ""}`}
        // data-id={d.id}
        onClick={e => {
          // console.log(e.target.dataset.id);
          e.preventDefault();
          onChangeMode(d.id);
        }}
      >
        {d.title}
      </a>
    </li>
  ));
  //list에 출력할 코드 생성
  return (
    <nav>
      <ul className="nav flex-column nav-pills">{lists}</ul>
    </nav>
  );
});

export default Nav;
