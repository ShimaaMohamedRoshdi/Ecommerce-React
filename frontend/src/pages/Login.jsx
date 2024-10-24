

// import React, { useState } from 'react';

// const Login = () => {
//   const [currentState, setCurrentState] = useState('Sign Up');
//   const onSubmitHandler=async(event)=>{
//     event.preventDefault();
//   }

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//         <p className='prata-regular text-3xl'>{currentState}</p>
//         <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
//       </div>

//       {currentState === 'Login' ? null : (
//         <input
//           type="text"
//           className='w-full px-3 py-2 border border-gray-800'
//           placeholder='Name'
//           required
//         />
//       )}
//       <input
//         type="email"
//         className='w-full px-3 py-2 border border-gray-800'
//         placeholder='Email'
//         required
//       />
//       <input
//         type="password"
//         className='w-full px-3 py-2 border border-gray-800'
//         placeholder='Password'
//         required
//       />

//       <div className='w-full flex justify-between text-sm mt-[-8px]'>
//         <p className='cursor-pointer'>Forget Your Password?</p>
//         {currentState === 'Login' ? (
//           <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>
//             Create account
//           </p>
//         ) : (
//           <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>
//             Login Here
//           </p>
//         )}
//       </div>
//       <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ?'Sign In' : 'Sign Up'}</button>
//     </form>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const navigate = useNavigate(); // Initialize navigate


  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    // Here you can handle the signup logic, e.g., API call
    if (currentState === 'Sign Up') {
      // Simulate a successful signup process
      console.log("Signing up...");
      
      // After successful signup, switch to Login state
      setCurrentState('Login');
    } else {
      // Handle login logic
      console.log("Logging in...");
      navigate('/about');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState === 'Login' ? null : (
        <input
          type="text"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Name'
          required
        />
      )}
      <input
        type="email"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        required
      />
      <input
        type="password"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        required
      />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget Your Password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>
            Login Here
          </p>
        )}
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}

export default Login;