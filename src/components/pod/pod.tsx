import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const Pod = ({ children, description, title }: Props) => {
  return (
    <div className="rounded-3xl w-5/6 max-w-lg bg-white shadow-lg drop-shadow-lg">
      <div className="px-8 py-6 border-b">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-sm text-purple-900">{description}</p>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Pod;
