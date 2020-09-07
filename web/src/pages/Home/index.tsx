import React from 'react';

import './styles.css';

function Home() {
    return (
        <div id="page-home">
            <div className="container">
                <header>
                    <h1 className="title">Aplicação Teste para stream de vídeo e aúdio</h1>
                    <img 
                        src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" 
                        alt="Imagem da logo React" 
                        className="logo"
                    />
                </header>

                <body>
                <div className="menuBox">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                    <div className="screen">
                
                    </div>
            
                </body>

                <footer>
                    <div className="chatGroup">
                        <div className="chatBox">

                        </div>

                        <div className="lineChat"></div>

                        <div className="chatInput">
                            <input type="text" className="chat"/>
                        </div>
                    </div>

                    <div className="myScreen">

                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;