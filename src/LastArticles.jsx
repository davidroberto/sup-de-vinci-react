const LastArticles = ({ articlesProp }) => {
  const lastArticles = articlesProp.slice(-2);

  return (
    <section>
      <h2>Les derniers articles :</h2>
      {lastArticles.map((article) => {
        return (
          <article>
            <h3>{article.title}</h3>
            <img src={article.img} />
          </article>
        );
      })}
    </section>
  );
};

export default LastArticles;
