// import React, { FC } from 'react';

// const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
//   // console.log("Wrapper children:", children);
//   return (
//     <div  className='max-w-screen-xl mx-auto px-4'>
//       {children}
//     </div>
//   );
// }

// export default Wrapper;


import React, { FC } from 'react';

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8'>
      {children}
    </div>
  );
}

export default Wrapper;
