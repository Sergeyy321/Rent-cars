import { HomePage } from './components/HomePage/HomePage.jsx'
import { Routes, Route } from "react-router-dom";
import { Favorite } from "./components/Favorite/Favorite.jsx";
import { Catalog } from './components/Catalog/Catalog.jsx';
import { Container } from './App.styled.jsx';
export const App=()=> {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </Container>
  );
}

export default App;
