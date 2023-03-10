import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/HomePage";

const useStyles = makeStyles({
  App: {
    backgroundColor: "#14161a",
  },
});
function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
