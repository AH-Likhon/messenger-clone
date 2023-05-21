"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import AuthSocialBtn from "./AuthSocialBtn";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "LOGIN") {
      // NextAuth Signin
    } else if (variant === "REGISTER") {
      // Call axios for register
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth of social signin
  };

  return (
    <div
      className="
        mt-6
        sm:mx-auto
        sm:w-full
        sm:max-w-md
    "
    >
      <div
        className="
            bg-white
            px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10
        "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              type="name"
              register={register}
              errors={errors}
            />
          )}
          <Input
            id="email"
            label="Email Address"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign In" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                flex
                items-center
              "
            >
              <div
                className="
                w-full 
                border-t 
                border-gray-300"
              />
            </div>
            <div
              className="
              relative
              flex
              justify-center
              text-sm
            "
            >
              <span
                className="
                bg-white
                px-2
                text-gray-500
              "
              >
                Or Continue With
              </span>
            </div>
          </div>

          <div
            className="
            mt-6
            flex
            gap-2
          "
          >
            <AuthSocialBtn
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialBtn
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
