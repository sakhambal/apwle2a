const Input = ({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    required = false,
    className = "",
  }) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label htmlFor={name} className="text-sm font-medium">
            {label}
          </label>
        )}
  
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
          className={`px-4 py-3 w-full rounded-lg border transition-all duration-300 outline-none focus:border-accent ${className}`}
        />
      </div>
    );
  };
  
  export default Input;