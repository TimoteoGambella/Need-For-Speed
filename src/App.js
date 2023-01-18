import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApiContext } from './context/ApiContext.jsx';
import Home from './views/Home.jsx';
import GameDetail from './views/GameDetail.jsx';
import './styles/styles.scss';

function App() {
    return (
        <>
            <ApiContext>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gameDetail/:idGame" element={<GameDetail />} />
                    </Routes>
                </Router>
            </ApiContext>
        </>
    );
}

export default App;
