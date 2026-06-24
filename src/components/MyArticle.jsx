function MyArticle({ title, desc, level, onChangeMode, onDelete }) {
  console.log("MyArticle render");
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>난이도 : {level}</p>
      </article>
      {onChangeMode && <button onClick={onChangeMode}>수정</button>}
      {onDelete && <button onClick={onDelete}>삭제</button>}
    </section>
  );
}

export default MyArticle;
