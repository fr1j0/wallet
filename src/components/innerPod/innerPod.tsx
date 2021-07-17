import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  column?: boolean;
};

const InnerPod = ({ children, title, column }: Props) => {
  return (
    <div className="w-full rounded-2xl py-3 px-4 bg-blue-100 bg-opacity-50 shadow-innerpod">
      <div className="w-full text-sm mb-3">{title}</div>
      <div
        className={`w-full text-4xl font-bold text-gray-600 flex ${
          column ? "flex-col" : "flex-row"
        } justify-between max-h-40 scrollbar-thin scrollbar-thumb-gray-400 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
      >
        {children}
      </div>
    </div>
  );
};

export default InnerPod;
