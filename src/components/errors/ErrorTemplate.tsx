import React from "react";

interface ErrorTemplateProps {
  code: string;
  message: string;
  description: string;
}

const ErrorTemplate: React.FC<ErrorTemplateProps> = ({
  code,
  message,
  description,
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-yellow-300 text-7xl font-bold mb-2">{code}</h1>
      <h2 className="text-2xl font-semibold mb-2">{message}</h2>
      <p className="text-gray-400 text-center max-w-md">{description}</p>
    </div>
  );
};

export default ErrorTemplate;
