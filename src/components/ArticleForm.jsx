function ArticleForm({ onSubmit }) {
  return (
    <form
      action=""
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e.target.title.value, e.target.desc.value, e.target.level.value);
      }}
    >
      <div>
        <label htmlFor="title">title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div>
        <label htmlFor="desc">desc</label>
        <textarea name="desc" id="desc"></textarea>
      </div>
      <div>
        <label htmlFor="level">level</label>
        <input type="number" name="level" id="level" />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default ArticleForm;
