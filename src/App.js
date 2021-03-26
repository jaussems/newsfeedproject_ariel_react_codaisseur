<<<<<<< HEAD
import "./App.scss";
=======
import "./App.css";
<<<<<<< HEAD
<<<<<<< HEAD
import NewsArticle from "./components/newsArticleAPI";
=======
>>>>>>> e402afa105389ba97afc5c5b68a7ca54c4abd314
=======
>>>>>>> 704fbbd861e757267aa1e6d17142f3c6b205c402
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello world!</h1>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
