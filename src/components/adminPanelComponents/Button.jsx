const Button = (props) => {
  const { title } = props;
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 text-white bg-green-600 rounded-lg rounderd hover:bg-green-700 dark:bg-sky-400 dark:hover:bg-sky-500 dark:text-slate-700"
    >
      {title}
    </button>
  );
};

export default Button;
