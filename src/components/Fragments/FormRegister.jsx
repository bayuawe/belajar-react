import React from "react";
import Label from "@/components/Elements/Input/Label";
import Input from "@/components/Elements/Input/Input";
import Button from "../Elements/Button";

const FormRegister = (props) => {
  const { label, name, type, placeholder, action } = props;
  return (
    <form action={action}>
      <div className="my-6 max-w-md">
        <Label htmlFor="First Name">First Name</Label>
        <Input name="First Name" type="text" placeholder="First Name" />
      </div>
      <div className="my-6 max-w-md">
        <Label htmlFor="Last Name">Last Name</Label>
        <Input name="Last Name" type="text" placeholder="Last Name" />
      </div>
      <div className="my-6 max-w-md">
        <Label htmlFor="Email">Email</Label>
        <Input name="Email" type="email" placeholder="Email" />
      </div>
      <div className="my-6 max-w-md">
        <Label htmlFor="Password">Password</Label>
        <Input name="Password" type="password" placeholder="Password" />
      </div>
      <div className="my-6 max-w-md">
        <Label htmlFor="Confirm Password">Confirm Password</Label>
        <Input
          name="Confirm Password"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <Button variant="bg-yellow-400 w-full" text="Register" />
    </form>
  );
};

export default FormRegister;
