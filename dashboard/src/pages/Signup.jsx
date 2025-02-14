import React from 'react'
import { Link } from 'react-router'

const Signup = () => {
    return (
        <>
            {/* component */}
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Become an Admin
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                                placeholder="018••••••••"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                            Sign Up
                        </button>
                    </form>
                    <div className="mt-6 text-center text-sm text-gray-600">
                        Already an Admin?
                        <Link to="/signin" className="text-red-600 hover:text-red-500 font-medium">
                            -Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Signup
