const HighlightArticles = () => {
  const titleSection = "Les meilleurs articles";
  const isSectionDisplayed = true;

  return (
    <section>
      {isSectionDisplayed ? (
        <div>
          <h2>{titleSection}</h2>
          <article>
            <img src="https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif" alt="dog" />
            <h3>Chien débile</h3>
          </article>
          <article>
            <img src="https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif" alt="dog" />
            <h3>Chien débile</h3>
          </article>
          <article>
            <img src="https://media.tenor.com/SZI1sUMkTAkAAAAM/wall-lice-figglebottom.gif" alt="dog" />
            <h3>Chien débile</h3>
          </article>
        </div>
      ) : (
        <p>Vous n'avez le droit de voir cette section</p>
      )}
    </section>
  );
};

export default HighlightArticles;
