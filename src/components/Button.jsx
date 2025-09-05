function Button(props) {
  return (
    <button
      className="bg-slate-500 text-white px-4 py-2 font-medium rounded-md"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
