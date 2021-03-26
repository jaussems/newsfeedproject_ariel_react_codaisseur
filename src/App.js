import "./App.css";
<<<<<<< HEAD
import NewsArticle from "./components/newsArticleAPI";
=======
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

>>>>>>> 4bc27b8cc41cdd7922e6f999272388a74b6c7ff0
function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello world!</h1>
<<<<<<< HEAD
      <NewsArticle />
=======
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
>>>>>>> 4bc27b8cc41cdd7922e6f999272388a74b6c7ff0
    </div>
  );
}

export default App;
