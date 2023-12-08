import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import HighlightArticles from "./HighlightArticles";
import LastArticles from "./LastArticles";

const App = () => {
  return (
    <>
      <Header />
      <HighlightArticles />
      <LastArticles />
      <Article />
      <Footer />
    </>
  );
};

export default App;
