const HighlightArticles = ({ articlesProp }) => {
  const titleSection = "Les meilleurs articles";
  const isSectionDisplayed = true;

  // je créé une variable qui contient directement les articles
  // à afficher
  // plutôt que de faire le traitement dans le JSX
  // car plus compliqué et moins lisible en JSX
  const hightlightedArticles = articlesProp.filter((article) => {
    return article.isHighlighted === true;
  });

  return (
    <section>
      {isSectionDisplayed ? (
        <div>
          <h2>{titleSection}</h2>
          {hightlightedArticles.map((article) => {
            return (
              <article>
                <h3>{article.title}</h3>
                <img src={article.img} />
              </article>
            );
          })}
        </div>
      ) : (
        <p>Vous n'avez le droit de voir cette section</p>
      )}
    </section>
  );
};

export default HighlightArticles;
