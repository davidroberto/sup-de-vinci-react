const HighlightArticles = () => {
  const titleSection = "Les meilleurs articles";
  const isSectionDisplayed = true;

  const articles = [
    {
      title: "Chien débile 1",
      img: "https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif",
    },

    {
      title: "Chien débile 2",
      img: "https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif",
    },

    {
      title: "Chien débile 3",
      img: "https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif",
    },
  ];

  return (
    <section>
      {isSectionDisplayed ? (
        <div>
          <h2>{titleSection}</h2>
          {articles.map((article) => {
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
