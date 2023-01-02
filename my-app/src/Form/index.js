import * as React from "react";
import { useForm } from "react-hook-form";

export default function Index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm();
  const [userInfo, setUserInfo] = React.useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    alert("Thanks for submiting the form");
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div className="React-form">
            <h2>React Hook Form</h2>
            <input
              name="username"
              type="text"
              autoComplete="off"
              placeholder="Enter your username"
              {...register("username", {
                required: "User name required",
              })}
            />
            <p>{errors.username && errors.username?.message}</p>
            <input
              name="password"
              autoComplete="off"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password required",
                maxLength: { value: 6, message: "Maximum 6 charectors are allowed" },
              })}
            />
            <p>{errors.password && errors.password?.message}</p>
            <button>Submit</button>
            <button type="button" onClick={() => clearErrors()}>
              Clear Errors
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
