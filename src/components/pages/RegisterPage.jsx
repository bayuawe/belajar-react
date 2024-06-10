import React from "react";
import FormRegister from "@/components/Fragments/FormRegister";
import AuthLayouts from "@/components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts
      title="Register"
      subtitle="Create a new account"
      type="register"
    >
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
