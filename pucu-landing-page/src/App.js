import React from "react";

import CNavbar from "./Components/CNavbar";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

function App() {
     return (
          <div className="App container-fluid d-flex flex-column ">
               <header className="row " id="page-header">
                    <div className="col-12">
                         <CNavbar />
                    </div>
               </header>
               <main className="row flex-grow-1 " id="page-content">
                    <div className="main-content col-12">
                         <MainContent />
                    </div>
               </main>
               <footer className="row mt-5">
                    <div className="col-12">
                         <Footer />
                    </div>
               </footer>
          </div>
     );
}
export default App;
