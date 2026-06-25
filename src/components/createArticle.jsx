import ArticleForm from "./ArticleForm";

function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");
  return (
    <>
      <h2>Create Article</h2>
      <ArticleForm onSubmit={onSubmit} />
    </>
  );
}

export default CreateArticle;
