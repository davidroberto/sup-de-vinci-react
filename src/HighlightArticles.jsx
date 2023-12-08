const HighlightArticles = () => {
  const titleSection = "Les meilleurs articles";
  const isSectionDisplayed = true;

  const articles = [
    {
      title: "Chien débile 1",
      img: "https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif",
      isHighlighted: true,
    },

    {
      title: "Chien débile 2",
      img: "https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif",
      isHighlighted: false,
    },

    {
      title: "Chien débile 3",
      img: "https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif",
      isHighlighted: true,
    },

    {
      title: "Chien débile 4",
      img: "https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif",
      isHighlighted: true,
    },

    {
      title: "Chien débile 5",
      img: "https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif",
      isHighlighted: false,
    },
  ];

  // je créé une variable qui contient directement les articles
  // à afficher
  // plutôt que de faire le traitement dans le JSX
  // car plus compliqué et moins lisible en JSX
  const hightlightedArticles = articles.filter((article) => {
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
