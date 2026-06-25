function MyArticle({ title, desc, level, onChangeMode, onDelete }) {
  console.log("MyArticle render");
  return (
    <section className="card mt-3 mb-3">
      <article className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{desc}</p>
        {level && <p>난이도:{level}</p>}
      </article>
      <div className="d-flex justify-content-end p-3 gap-1">
        {onChangeMode && (
          <button className="btn btn-secondary btn-sm" onClick={onChangeMode}>
            수정
          </button>
        )}
        {onDelete && (
          <button className="btn btn-danger btn-sm" onClick={onDelete}>
            삭제
          </button>
        )}
      </div>
    </section>
  );
}

export default MyArticle;
