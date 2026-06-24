import { useState } from "react";

function UpdateArticle({ title, desc, onSubmit }) {
  console.log("UpdateArticle render");
  const [content, setContent] = useState({
    title: title,
    desc: desc,
  });
  // const [newTitle, setNewTitle] = useState(title);
  // const [newDesc, setNewDesc] = useState(desc);
  // const handleTitleChange = e => {
  //   setNewTitle(e.target.value);
  // };
  // const handleDescChange = e => {
  //   setNewDesc(e.target.value);
  // };

  const handleTitleChange = e => {
    const { name, value } = e.target;
    setContent(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h2>Update Article</h2>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          onSubmit(content.title, content.desc);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={content.title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea
            name="desc"
            id="desc"
            value={content.desc}
            onChange={handleDescChange}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default UpdateArticle;
