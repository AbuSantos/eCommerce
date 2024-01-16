// Import React library
import React from "react";

// Define the InputProps interface that extends standard HTML input attributes
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

// Create a functional component named Input using React.forwardRef
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ type, ...props }, ref) => {
    // Return an input element with specified type and additional props
    return (
        <input type={type} {...props} ref={ref}
            className="w-full p-2 border border-gray-700 border-opacity-40 focus:outline-none bg-transparent "

        />
    );
});

// Set the display name for the Input component
Input.displayName = "Input";

// Export the Input component
export { Input };
