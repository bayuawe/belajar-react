import React from "react";
import Label from "@/components/Elements/Input/Label";
import Input from "@/components/Elements/Input/Input";
import Button from "../Elements/Button";

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
      
    </form>
  );
};

export default FormLogin;
