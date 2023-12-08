import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import HighlightArticles from "./HighlightArticles";
import LastArticles from "./LastArticles";

const App = () => {
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

  return (
    <>
      <Header />
      <HighlightArticles articlesProp={articles} />
      <LastArticles articlesProp={articles} />
      <Article />
      <Footer />
    </>
  );
};

export default App;
