import React from "react";

const ErrorPage = () => {
  return (
    <div className='text-white flex flex-col justify-center	items-center h-[70vh] mb-[7rem]'>
      <h1 className='text-4xl mb-10'>
        <span className=' font-extrabold text-5xl'>404. </span>
        That's an error.
      </h1>
      The requested URL was not found on this server. That's all we know.
    </div>
  );
};

export default ErrorPage;
