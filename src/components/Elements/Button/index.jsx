const Button = (props) => {
  const {
    variant = "bg-yellow-500",
    onClick = () => {},
    text = "...",
    type = "button",
  } = props;
  return (
    <button
      className={`${variant} text-black font-bold px-4 py-2 rounded-md`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
