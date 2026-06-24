function CreateArticle() {
  return (
    <>
      <h2>Create Article</h2>
      <form action="">
        <div>
          <label htmlFor="title">title</label>
          <input type="text" id="title" />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="" id="desc"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default CreateArticle;
