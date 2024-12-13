
const ChangeBaground = () => {
    const ChangeBagroundColorYellow=()=>{
        document.body.style.backgroundColor='rgb(240, 224, 43)';
    }
    const ChangeBagroundColorRed=()=>{
        document.body.style.backgroundColor='rgb(240, 43, 99)';
    }
    const ChangeBagroundColorBlue=()=>{
        document.body.style.backgroundColor='rgb(11, 102, 181)';
    }
  return(

    <div style={{marginBottom:'100px'}} className="p-5">
        <h1>Change banground color of the web page</h1>
        <button style={{marginBottom:'10px',borderRadius:'20px'}} onClick={ChangeBagroundColorYellow}>yellow baground</button> <br/>
        <button style={{marginBottom:'10px',borderRadius:'20px'}} onClick={ChangeBagroundColorRed}>red baground</button><br/>
        <button style={{marginBottom:'10px',borderRadius:'20px'}} onClick={ChangeBagroundColorBlue}>blue baground</button><br/>

    </div>
  )
};

export default ChangeBaground;
