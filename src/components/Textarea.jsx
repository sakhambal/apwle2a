const Textarea = ({
    label,
    placeholder,
    value,
    onChange,
    name,
    rows = 5,
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
  
        <textarea
          id={name}
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
          className={`px-4 py-3 w-full rounded-lg border transition-all duration-300 outline-none resize-none focus:border-accent ${className}`}
        />
      </div>
    );
  };
  
  export default Textarea;