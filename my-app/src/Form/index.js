import * as React from "react";
import { useForm } from "react-hook-form";
import Name from "./Name";
import Password from "./Password";

export default function Index() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      password: "",
    },
  });
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <div className="form-group">
        <div className="React-form">
          <h2>React form learning</h2>
          <Name register={register} />
          <Password register={register} errors={errors} setError={setError} />

          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
