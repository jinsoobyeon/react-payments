import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCard from "./pages/addCard";
import CompleteCard from "./pages/completeCard";
import CardList from "./pages/cardList";

export const CardContext = createContext();

function Payments() {
  const [id, setId] = useState(1);
  const [cards, setCards] = useState([]);

  return (
    <CardContext.Provider
      value={{
        cards,
        id,
        setCards,
        setId,
      }}
    >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<AddCard />} />
          <Route path="/complete" element={<CompleteCard />} />
          <Route path="/list" element={<CardList />} />
        </Routes>
      </BrowserRouter>
    </CardContext.Provider>
  );
}

export default Payments;
