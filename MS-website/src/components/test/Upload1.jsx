import logoupload from "../../assets/download.svg";
import  { useState } from 'react';
import axios from 'axios';

function Upload1() {
    const [File, setFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      setFile(file);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', File);
  
      try {
        const response = await axios.post('http://127.0.0.1:5000/MSPrediction', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',  // Corrected header value
          },
        });
      
        console.log(response.data); // Log the response data to the console
      
        // Update the state with the prediction results
        setPrediction(response.data.data)
      
      } catch (error) {
        console.error('Error uploading image:', error);
      }
      
      };
  
  return (
    <>
    <div className="container">
    <div className="row justify-content-center m-0 p-0 ">
    <div className=" col-lg-3">
    <h6 className="mb-3 title-upload ">
      Upload Your file for Testing MS
    </h6>
    <div className="card-upload text-center bg-opacity-10 bg-dark p-5">
      <form onSubmit={handleSubmit} className="card-hover position-relative">
        <input type="file" className="position-absolute file" accept="file*" name ="file" onChange={handleImageUpload}></input>
        <img className="svg-upload" src={logoupload} alt=".."></img>
        <h6 className="drog-drop mt-3">
          Drag & drop files 
          <span className="browse btn-link" id="browse" type="files">
            Browse
          </span>
        </h6>
      </form>
      <span className="supported-text text-white-50 text-opacity-50">
        Supported formates:
        <span className="supported-type">
          {" "}
          CSV
        </span>
      </span>
    </div>
  </div>
  <div className="col-lg-2 d-flex my-3 my-lg-0 justify-content-center justify-content-lg-start  align-items-center ">
    <button className=" btn btn-primary w-100" type="submit" onClick={handleSubmit} >predict</button>
  </div>
  {prediction &&
  <div className="col-lg-2" >
  <h6 className="mb-3 mt-2 title-upload ">
      predict Your file
    </h6>
  <div className="card-upload row m-0 p-0  bg-opacity-10 bg-dark ">
    
    <p className="col-lg-6">Prediction: {prediction}</p>
    </div>
  </div>
  }
</div>
</div>
</>
);
}

export default Upload1