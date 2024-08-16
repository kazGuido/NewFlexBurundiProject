import React from 'react';
import { Button } from '@shadcn/ui';

const AuthPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Sign In
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">Or sign in with</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Google
            </Button>
            <Button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900">
              Facebook
            </Button>
            <Button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900">
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;