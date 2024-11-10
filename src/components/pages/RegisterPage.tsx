"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Reader");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = { name, email, password, role };
      const response = await axios.post("/api/auth/register", data);

      router.push("/auth/login");
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-sm text-red-500">{error}</div>}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-gray-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-gray-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-gray-500"
          required
        />
      </div>

      <div>
        <span className="block text-sm font-medium text-gray-700">Role</span>
        <div className="mt-2 space-y-2 space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="role"
              value="Reader"
              checked={role === "Reader"}
              onChange={(e) => setRole(e.target.value)}
              className="text-gray-900 focus:ring-gray-500"
            />
            <span className="ml-2 text-gray-700">Reader</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="role"
              value="Author"
              checked={role === "Author"}
              onChange={(e) => setRole(e.target.value)}
              className="text-gray-900 focus:ring-gray-500"
            />
            <span className="ml-2 text-gray-700">Author</span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring"
      >
        Register
      </button>
      <p>
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
