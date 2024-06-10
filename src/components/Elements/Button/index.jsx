const Button = (props) => {
  const { variant = "bg-yellow-500", text = "..." } = props;
  return (
    <button className={`${variant} text-black font-bold px-4 py-2 rounded-md`}>
      {text}
    </button>
  );
};

export default Button;
