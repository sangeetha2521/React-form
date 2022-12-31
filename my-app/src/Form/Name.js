import React from "react";

export default function Name({ register }) {
  return (
    <div className="Name">
      <input {...register("firstName", { required: true })} placeholder="Enter your name"></input>
    </div>
  );
}
