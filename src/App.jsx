import "./App.css";
import Myheader from "./components/Myheader";
import Nav from "./components/Nav";
import MyArticle from "./components/MyArticle";
import { useState, useCallback, useMemo } from "react";
import ProductCard from "./components/ProductCard";
import Controls from "./components/controls";
import CreateArticle from "./components/createArticle";
import UpdateArticle from "./components/updateArticle";
import { preconnect } from "react-dom";
import { v4 as uuidv4 } from "uuid";

function App() {
  console.log("App render");
  const [id, setId] = useState(1);
  const [mode, setMode] = useState("welcome");
  const [subject, setSubject] = useState({
    title: "프론트엔드 개발자",
    desc: "기본언어인 html, css, javascript부터 학습합니다.",
  });
  const [content, setContent] = useState([
    {
      id: "1",
      title: "UI/UX 개발",
      desc: "사용자 경험을 고려한 직관적이고 반응성 높은 화면 구현",
      level: 1,
    },
    {
      id: "2",
      title: "재사용이 가능한 UI 개발",
      desc: "컴포넌트 기반으로 동일한 UI를 효율적으로 재사용 가능",
      level: 2,
    },
    {
      id: "3",
      title: "애니메이션 구현",
      desc: "상태 변화에 따른 자연스럽고 동적인 화면 효과 구현",
      level: 3,
    },
  ]);
  // const [maxId, setMaxId] = useState(3);

  const welcome = { title: "welcome", desc: "Welcome to React" };

  let _title = null;
  let _desc = null;
  let _article = null;
  let _level = null;

  const selectedArticle = useMemo(() => content.find(item => item.id === id), [content, id]);

  const handleDelete = () => {
    if (window.confirm("정말 삭제할까요")) {
      setContent(prev => prev.filter(item => item.id !== id));
      setMode("welcome");
    } else {
      setMode("welcome");
    }
  };

  if (mode === "welcome") {
    _title = welcome.title;
    _desc = welcome.desc;
    _article = <MyArticle title={_title} desc={_desc} />;
  } else if (mode === "read") {
    if (selectedArticle) {
      _title = selectedArticle.title;
      _desc = selectedArticle.desc;
      _level = selectedArticle.level;
    }
    _article = (
      <MyArticle
        title={_title}
        desc={_desc}
        level={_level}
        onChangeMode={() => {
          setMode("update");
        }}
        onDelete={handleDelete}
      />
    );
  } else if (mode === "create") {
    _article = (
      <CreateArticle
        onSubmit={(_title, _desc, _level) => {
          const newId = uuidv4();

          //직접 content에 추가하는경우 원본에 추가되어 유지관리X
          //concat:배열+배열 a = b.concat(c)
          let _contents = content.concat({ id: newId, title: _title, desc: _desc, level: _level });
          setContent(_contents);
          // setMaxId(newId);
          setId(newId);
          setMode("read");
        }}
      />
    );
  } else if (mode === "update") {
    if (!selectedArticle) return null;

    _article = (
      <UpdateArticle
        title={selectedArticle.title}
        desc={selectedArticle.desc}
        level={selectedArticle.level}
        onSubmit={(_title, _desc, _level) => {
          setContent(prev =>
            prev.map(p =>
              p.id === id
                ? {
                    ...p,
                    title: _title,
                    desc: _desc,
                    level: _level,
                  }
                : p,
            ),
          );
          setMode("read");
        }}
      />
    );
  }

  const handleChangeMode = useCallback(_id => {
    setMode("read");
    setId(_id);
  }, []);

  return (
    <>
      <Myheader
        title={subject.title}
        desc={subject.desc}
        onChangeMode={() => {
          setMode("welcome");
        }}
      />
      {/* <header>
        <h1
          className="logo"
          onClick={() => {
            setMode("welcome");
          }}
        >
          {subject.title}
        </h1>
        <p>{subject.desc}</p>
      </header> */}
      <Nav data={content} onChangeMode={handleChangeMode} />
      {_article}
      <hr />
      <Controls
        onChangeMode={() => {
          setMode("create");
        }}
      />
    </>
  );
}

export default App;
