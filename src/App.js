import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './services/routes'; 

function App() {
  return (
    <Router>
    <Routes />
  </Router>
  );
}

export default App;


.navigation {
  /*flexbox styles*/
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;

  list-style: none;
  margin: 0;
  background: rgb(80, 85, 110);
}

/* Navigation styling for resolutions 590+ px wide*/
.navigation a {
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}
.navigation li:first-of-type a {
  border-left: none;
}
.navigation li:last-of-type a {
  border-right: none;
}

.navigation a:hover {
  background: rgb(124, 130, 161);
}

/* Navigation styling for resolutions 
  less than 590 px wide*/
@media all and (max-width: 590px) {
  .navigation {
    flex-flow: column wrap;
    padding: 0;
  }

  .navigation a {
    text-align: center;
    padding: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .navigation li:last-of-type a {
    border-bottom: none;
  }
}
