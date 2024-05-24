import React, { useEffect, useState } from "react";
import Routing from "./Pages/Router";
import { auth } from "./Utility/firebase/firebase";
import { useStateValue } from "./Utility/StateProvider";
import Loading from "./Components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("User logged in:", authUser);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        console.log("User logged out");
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return <Routing />;
}

export default App;
