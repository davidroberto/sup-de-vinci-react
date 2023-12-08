import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import HighlightArticles from "./HighlightArticles";

const App = () => {
  return (
    <>
      <Header />
      <HighlightArticles />
      <Article />
      <Footer />
    </>
  );
};

export default App;
