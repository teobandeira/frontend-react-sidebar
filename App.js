import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

// Estilos CSS
const estiloDiv = {
    background: '#fff',
};

const App = () => {

    return (
        <React.Fragment>
            <div style={estiloDiv}>
                <Navbar />
            </div>
        </React.Fragment>
    );
}

export default App;