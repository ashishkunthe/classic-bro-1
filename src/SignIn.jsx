function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 rounded focus:ring focus:ring-blue-500"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
          <span className="block w-16 h-px bg-gray-600"></span>
          <span>Or sign in with</span>
          <span className="block w-16 h-px bg-gray-600"></span>
        </div>

        {/* Social Media Sign-In */}
        <div className="flex justify-center space-x-4">
          <button
            className="p-3 bg-gray-700 rounded-full hover:bg-gray-600"
            aria-label="Sign in with Google"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M22.64 11.64h-.06H12v2.71h5.98c-.26 1.51-.98 2.79-2.1 3.69l-.02.02h-.02c-.61.49-1.31.88-2.1 1.15-.77.27-1.59.4-2.45.4-1.33 0-2.57-.34-3.72-1.01-1.16-.67-2.07-1.59-2.74-2.74-.67-1.16-1.01-2.4-1.01-3.73 0-1.33.34-2.57 1.01-3.72.67-1.16 1.59-2.07 2.74-2.74 1.15-.67 2.4-1.01 3.72-1.01.93 0 1.83.16 2.71.48.89.32 1.67.76 2.34 1.31l2.23-2.25c-.84-.74-1.78-1.33-2.8-1.77-1.01-.44-2.06-.77-3.16-.97C10.62 1.47 9.81 1.34 8.96 1.34c-1.65 0-3.21.36-4.68 1.08-1.48.72-2.73 1.72-3.76 2.94-1.03 1.22-1.84 2.6-2.44 4.16C.13 10.83 0 12.41 0 14c0 1.65.36 3.21 1.08 4.68.72 1.48 1.72 2.73 2.94 3.76 1.22 1.03 2.6 1.84 4.16 2.44 1.56.6 3.14.73 4.72.41 1.59-.32 3.03-1 4.34-2.03.99-.77 1.8-1.74 2.43-2.89.64-1.15 1.03-2.39 1.18-3.71h-5.98v-2.71h10.65-.06z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
