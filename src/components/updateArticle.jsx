import ArticleForm from "./ArticleForm";

function UpdateArticle({ title, desc, level, onSubmit }) {
  console.log("UpdateArticle render");

  return (
    <>
      <h2>Update Article</h2>
      <ArticleForm initTitle={title} initDesc={desc} initLevel={level} onSubmit={onSubmit} />
    </>
  );
}

export default UpdateArticle;
