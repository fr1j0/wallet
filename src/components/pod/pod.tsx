import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const Pod = ({ children, description, title }: Props) => {
  return (
    <div className="rounded-3xl w-5/6 md:w-7/8 max-w-lg bg-white filter drop-shadow">
      <div className="px-8 py-6 border-b">
        <h2 className="font-bold text-xl mb-2 text-gray-700">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Pod;
