import  { useState } from "react";


const withLoginCheck = (Component) => {
  return function WrappedComponent() {
    const [login, setLogin] = useState(true);

    return (
      <div>
        {login ? <Component  /> : <h1>Please login</h1>}
      </div>
    );
  };
};

export default withLoginCheck;


