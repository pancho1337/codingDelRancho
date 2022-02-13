import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__item">
          login
        </div>
      </header>
      <main>
        <section className="main">
          <h1 className="main__title">Web Dev 508: Cosechas lo que siembras.</h1>
          <h2 className="main__subtitle">Recuerda el dicho</h2>
        </section>
        <section className="topics">
          <article className="topics__modules">
            <ol>
              <li className="module">Module 0 - Intro to JavaScript</li>
              <li>Module 1 - Front End Development</li>
              <li>Module 2 - Back End Development</li>
              <li>Module 3 - Full Stack</li>
            </ol>
          </article>
          <article>
            <ol>
              <li>Module 0 - Intro to JavaScript</li>
              <li>Module 1 - Front End Development</li>
              <li>Module 2 - Back End Development</li>
              <li>Module 3 - Full Stack</li>
            </ol>
          </article>
        </section>
      </main>
      <footer>
        <div>
          <a>contact us</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
