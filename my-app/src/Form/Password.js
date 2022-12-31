import React from "react";

export default function Password({ register, errors, setError }) {
  return (
    <div className="Name">
      <input {...register("password", { maxlength: 6 })} placeholder="Enter your password">
      </input>
      <button type="button" onClick={() => setError("password", { type: "custom" }, { message: "jsajd" })}>Focus</button>
    </div>
  );
}
