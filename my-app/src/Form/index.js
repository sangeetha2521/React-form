import * as React from "react";
import { useForm } from "react-hook-form";

export default function Index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();
  const [userInfo, setUserInfo] = React.useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    alert("Successfully submitted");
  };
  return (
    <>
      <p> {JSON.stringify(userInfo, undefined, 2)}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div className="React-form">
            <h2>React Hook Form Learning</h2>
            <input
              name="username"
              autoComplete="off"
              placeholder="Enter username"
              {...register("username", {
                required: "User name required",
              })}
            />
            <p>{errors.username && errors.username?.message}</p>
            <input
              name="password"
              autoComplete="off"
              placeholder="Enter password"
              {...register("password", {
                required: "password required",
                maxLength: { value: 6, message: "Maximum 6 charectors are allowed" },
              })}
            />
            <p>{errors.password && errors.password?.message}</p>
            <button>Submit</button>
            <button type="button" onClick={() => clearErrors()}>
              Clear All Errors
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
