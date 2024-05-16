import './App.css';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Body from './component/Body.js';

// const Header = () => {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// };

// function Header() {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
