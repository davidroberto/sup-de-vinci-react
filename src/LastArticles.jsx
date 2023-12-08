const LastArticles = () => {
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

  const lastArticles = articles.slice(-2);

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
