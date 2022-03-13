import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moduleOneData } from "assets/dummyData/moduleOne";
import { Link } from "react-router-dom";
import BoxAccordion from "../sharedComponents/BoxAccordion"
console.log(moduleOneData[0])

function Module() {
  let { moduleId } = useParams();
  const [moduleInfo, setInfo] = useState({
    sectionName: "loading...",
    days: [{ name: "loading...", quiz: [], toyProblem: [], lecture: [], project: [] }]
  });
  useEffect(() => {
    setTimeout(() => {
      if (moduleId) setInfo(moduleOneData[moduleId])
    }, 100)
  });

  return (
    <div className="App">
      {/* BEM:
        Block, Element and    Modifer
        .app  .app__element    .app--modifier | .app__element--dark
      */}
      <main className="app">
        <section className="main">
          <h1 className="main__title">Web Dev 508: Cosechas lo que siembras.</h1>
          <h2 className="main__subtitle">Recuerda el dicho</h2>
        </section>
        <h1>Module {moduleInfo.sectionName ?? moduleInfo.sectionName}</h1>
        {
          // render something here, safe checking
          // if (user.name) print(user.name)
          // safe operator
          // return user?.name; undefined
          // nullish collision operator
          // return user.name ?? user.name;
        }
        <div className='app__modules'>
            {
              moduleInfo["days"].map((el, index) => {
                console.log(el.name)
                return (
                  <BoxAccordion module={el} key={index}/>
                )
              })
            }
        </div>
      </main>
    </div>
  );
}

export default Module;
