function MyArticle({ title, desc }) {
  console.log("MyArticle render");
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
    </section>
  );
}

export default MyArticle;
