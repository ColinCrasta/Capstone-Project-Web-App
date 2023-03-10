import React, {useState, useEffect} from "react";



function StaticMap(props) {



    

    //Stores the login information usign states
  
  const [curr, setCurr] = useState("2023/3/10/13/30/48");
  
  const [send,setSend] = useState(true);
  const [initialRender, setInitialRender] = useState(false);




  useEffect(() => {

    if (initialRender) {
        console.log(curr);
        fetchLogin(curr);
    } else{
        setInitialRender(true)
  
      } 
  
  }, [send]);




  //Send the login information to the server for 
//verification
  const fetchLogin = async(currTime) => {
    console.log(currTime);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(e);
    setCurr(e.target.elements.current.value);
    // console.log("Start:", start);
    // console.log("End:", end);
    setSend(!send);

    
    
  };

  
  



    return(

<div>
        <div>
      <h3> Current Satellite  Location </h3>
      </div>
      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <div>
          <label> Enter Time in year/month/day/hour/minute/second</label>
          <input type="text" name='current' defaultValue={curr} />
          <br />
          <br />
        </div>

        

        <button type="submit">Submit</button>
      </form>
      
    </div>


    );
}


export default StaticMap;