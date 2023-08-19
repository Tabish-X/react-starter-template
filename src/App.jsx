import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
        <Route path="/" >
            <Route index element={<h1 className="text-red-800 tex-3xl font-bold">Hello World</h1>}/>
        </Route>
    </Routes>
  )
};

export default App;
