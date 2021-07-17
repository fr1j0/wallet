import React, { ReactNode } from "react";
import Spinner from "../spinner";

type Props = {
  children: ReactNode;
  onClick: () => void;
  loading: boolean;
};

const Button = ({ children, onClick, loading }: Props) => {
  return (
    <button
      className="hover:bg-purple-800 flex items-center justify-center w-full mt-6 bg-purple-700 text-sm text-white p-4 rounded-2xl font-semibold"
      onClick={onClick}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};
export default Button;
