import React from "react";

function Authlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" h-full flex items-center justify-center bg-gradient-to-b from-sky-400 to-blue-800">
      {children}
    </div>
  );
}

export default Authlayout;
