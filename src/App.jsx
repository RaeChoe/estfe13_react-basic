import "./App.css";

// Myheader 컴포넌트
function Myheader() {
  return (
    <header>
      <h1 className="logo">프론트엔드 개발자</h1>
      <p>기본언어인 html, css, javascript부터 학습합니다.</p>
    </header>
  );
}

// Nav 컴포넌트
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="">UI/UX 개발</a>
        </li>
        <li>
          <a href="">재사용이 가능한 UI 개발</a>
        </li>
        <li>
          <a href="">애니메이션 구현</a>
        </li>
      </ul>
    </nav>
  );
}

function MyArticle() {
  return (
    <section>
      <article>
        <h2>HTML</h2>
        <p>Hypertext Markup Language</p>
      </article>
    </section>
  );
}

function App() {
  return (
    <>
      <Myheader />
      <Nav />
      <MyArticle />
    </>
  );
}

export default App;
