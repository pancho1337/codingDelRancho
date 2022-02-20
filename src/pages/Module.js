import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moduleOneData } from "assets/dummyData/moduleOne";
import { Link } from "react-router-dom";
import '../style/App.css';
console.log(moduleOneData[0])
function Module() {
  let { moduleId } = useParams();
  const [moduleInfo, setInfo] = useState({
    sectionName: "loading...",
    days: [{ name: "loading...", quiz: [], toyProblem: [], lecture: [], project: [] }]
  });
  useEffect(() => {
    setTimeout(() => {
      setInfo(moduleOneData[moduleId])
    }, 100)
  });
  return (
    <div className="App">
      <main>
        <section className="main">
          <h1 className="main__title">Web Dev 508: Cosechas lo que siembras.</h1>
          <h2 className="main__subtitle">Recuerda el dicho</h2>
        </section>
        <h1>Module {moduleInfo.sectionName}</h1>
        <div>
          {
            moduleInfo["days"].map((el) => {
              console.log(el.name)
              return (
                <div>
                  <h2>{el.name}</h2>
                  <p>{el.description}</p>
                  <h3><Link to={`/module/quiz/${el.quiz.id}`} >Quiz</Link></h3>
                  <h3>Toy Problems</h3>
                  <h3>Lecture</h3>
                  <h3>Project</h3>
                </div>
              )
            })
          }
        </div>
      </main>
    </div>
  );
}

export default Module;
