import React from "react";
import Label from "@/components/Elements/Input/Label";
import Input from "@/components/Elements/Input/Input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const FormLogin = (props) => {
  const { label, name, type, placeholder, action } = props;
  return (
    <form action={action}>
      <div className="my-6 max-w-md">
        <Label htmlFor="Email">Email</Label>
        <Input name="Email" type="email" placeholder="Email" />
      </div>
      <div className="my-6 max-w-md">
        <Label htmlFor="Password">Password</Label>
        <Input name="Password" type="password" placeholder="Password" />
      </div>
      <Button variant="bg-yellow-400 w-full" text="Login" />
      <div className="mt-4 flex justify-center">
        <p className="text-sm text-slate-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-yellow-400 font-bold">
            Register
          </Link>
        </p>
      </div>
    </form>
  );
};

export default FormLogin;
