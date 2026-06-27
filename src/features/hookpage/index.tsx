/** @format */

import { useReducer, type ChangeEvent } from "react";

type UserInfoType = {
  name: string;
  age: number;
};

type UuserInfoActionType = {
  type: "incremented_age" | "change_name";

  
  payload?: {
    name?: string;
    age?: number;
  };
};

function reducer(state: UserInfoType, action: UuserInfoActionType) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + (action.payload?.age || 0),
      };
    }
    case "change_name": {
      return {
        name: action.payload?.name || state.name,
        age: state.age,
      };
    }
  }
}

const HookPage = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "John",
    age: 30,
  });

  function handleButtonClick() {
    dispatch({
      type: "incremented_age",
      payload: {
        age: 1,
      },
    });
  }

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) {
    dispatch({
      type: "change_name",
      payload: {
        name: e.target.value,
      },
    });
  }

  return (
    <div>
      <p> Username : {state.name}</p>
      <p> Age : {state.age}</p>

      <button className="bg-blue-500" onClick={handleButtonClick}>
        Increment Age
      </button>

      <div>
        <input
          className="h-10 bg-slate-100"
          type="text"
          value={state.name}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default HookPage;
