import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moduleOneData } from "assets/dummyData/moduleOne";
import '../style/App.css';

function Module() {
  let {moduleId} = useParams();
  const [ moduleInfo, setInfo ] = useState([]);
  useEffect(() => {
    setTimeout(()=>{
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
        <h1>Modules</h1>
      </main>
    </div>
  );
}

export default Module;
