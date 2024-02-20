import  { useState } from 'react';
import Upload1 from './Upload1.jsx';
import Upload2 from './Upload2.jsx';
import Upload3 from './Upload3.jsx';
import Upload4 from './Upload4.jsx';

function Test() {      
      const [selectedComponent, setSelectedComponent] = useState(0);
  return (
    <>
    <div className="container mb-lg-5 mb-2">
        <div className="row m-0 p-0 justify-content-between ">
            <button onClick={() => setSelectedComponent(1)} className="col-lg-2 btn  model-btn ">Testing MS</button>
            <button onClick={() => setSelectedComponent(2)} className="col-lg-2 btn  model-btn my-3 my-lg-0  ">Flooghtlight Test</button>
            <button onClick={() => setSelectedComponent(3)} className="col-lg-2 btn  model-btn mb-3 mb-lg-0  ">Image Detection</button>
            <button onClick={() => setSelectedComponent(4)} className="col-lg-2 btn  model-btn  ">Segmentaion Image</button>
        </div>
    </div>
    {selectedComponent === 1 &&  <Upload1 />}
    {selectedComponent === 2 && <Upload2/>  }
    {selectedComponent === 3 &&  <Upload3/>}
    {selectedComponent === 4 && <Upload4 />}
    </>
  )
}

export default Test