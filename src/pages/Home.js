import { BrowserRouter } from "react-router-dom";
import { moduleData } from "assets/dummyData/modules";
import { toyProblemData } from "assets/dummyData/toyProblems";
import { Link } from 'react-router-dom';

/**
 * @description
 * @params
 * @return
 */
function App() {
  return (
    <div className="App">
      <main className='app'>
        <section className="main">
          <h1 className="main__title">Web Dev 508: Cosechas lo que siembras.</h1>
          <h2 className="main__subtitle">Recuerda el dicho</h2>
        </section>
        <section className="topics">
          <article className="topics__modules">
            <h2>Modules</h2>
            <ol>
              {moduleData.map((item) =>
                <li 
                key={item.id} 
                className="topics__modules__item"
                >
                  <Link to={`/module/${item.id}`}>
                    {item.moduleName}
                  </Link>
                </li>
              )}
            </ol>
          </article>
          <article className="toyProblems__rankings">
                <h2>Toy Problems</h2>
            <ol>
              {toyProblemData.map((item) =>
                <li key={item.id} className="toyProblems__rankings__item">
                  {item.rankingName}
                </li>
              )}
            </ol>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
