import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FATCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FATCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "SOME THING WENT WRONG",
      };

    default:
      return state;
  }
};

const FatchingData2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FATCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FATCH_ERROR" });
      });
  }, []);

  return (
    <div>
      <div>
        {state.loading ? "loading" : state.post.title}
        {state.error ? state.error : null}
      </div>
    </div>
  );
};

export default FatchingData2;
