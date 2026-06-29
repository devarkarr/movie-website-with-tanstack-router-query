/** @format */

import { useLogin } from "../../../service/auth/mutations";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

// validate schema
const authSchema = z.object({
  username: z
    .string()
    .min(3, "username must be at least 3 characters.")
    .max(32, "username must be at most 32 characters."),
  password: z.string().min(6, "password must be at least 6 characters."),
  gender: z.enum(["male", "female", "other"]),
});

type AuthFormType = z.infer<typeof authSchema>;

const SignInPage = () => {
  // const { register, handleSubmit, formState } = useForm<Inputs>();

  // form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormType>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      username: "",
      password: "",
      gender: "male",
    },
  });

  const login = useLogin();

  const onSubmit = (data: AuthFormType) => {
    login.mutate(data);
  };

  return (
    <div className="w-full flex justify-center h-screen items-center">
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Username</label>
          <div>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className={` rounded h-10 bg-slate-200}`}
                />
              )}
            />
            <p className="text-red-500">{errors.username?.message}</p>

            {/* <input
              type="text"
              {...register("username", {
                required: true,
                minLength: 3,
                maxLength: 10,
              })}
              className={` rounded h-10 ${
                formState.errors.username ? "bg-red-100" : "bg-slate-200"
              }`}
            /> */}

            {/* {formState.errors.username && (
              <p className="text-red-500">min lenght 3</p>
            )} */}
          </div>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <div>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  type="password"
                  {...field}
                  className={` rounded h-10 bg-slate-200}`}
                />
              )}
            />
            <p className="text-red-500">{errors.password?.message}</p>

            {/* <input
              type="password"
              {...register("password")}
              className="bg-slate-200 rounded h-10 "
            /> */}
          </div>
        </div>

        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <select {...field} className="h-10 bg-red-100">
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          )}
        />
        <p className="text-red-500">{errors.gender?.message}</p>

        {/* <div>
          <label>Gender </label>
          <select {...register("gender")} className="h-10 bg-red-100">
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </div> */}
        <div>
          <button
            type="submit"
            className="h-8 px-4 bg-black text-white rounded"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
