import React from "react";

const Button = (props) => {
  const { variant = "bg-yellow-500", text = "..." } = props;
  return (
    <button className={`${variant} text-black font-bold px-4 py-2 rounded-md`}>
      {text}
    </button>
  );
};

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-row gap-4">
          <Button variant="bg-yellow-500" text="login" />
          <Button variant="bg-red-500" text="signup" />
          <Button variant="bg-blue-500" text="HAHA" />
          <Button variant="bg-slate-500" text="HIHI" />
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
