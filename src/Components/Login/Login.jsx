import { useState } from "react";
// import axios from "../../Config/axios";
import axios from "axios";
import {  Navigate } from "react-router-dom";


const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://reqres.in/api/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
            window.location = "/homepage";
            
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="w-full min-h-screen bg-red-400 flex items-center justify-center">
			<div className="w-900 h-500 flex rounded-lg shadow-lg">
				<div className="flex-2   bg-black flex flex-col items-center justify-center text-white rounded-l-lg">
					<form className="flex px-10 py-10 flex-col items-center" onSubmit={handleSubmit}>
						<h1 className="text-xl mt-0 mb-3" >Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="outline-none border-none w-370 px-4 py-3 rounded bg-gray-100 my-1 text-sm text-black"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="outline-none border-none w-370 px-4 py-3 rounded bg-gray-100 my-1 text-black text-sm"
						/>
						{error && <div className="w-370 px-4 py-3 my-1 text-sm bg-red-600 text-white rounded-lg text-center">{error}</div>}
						<button type="submit" className="border-none outline-none bg-green-600 text-white m-2 rounded-full py-3 px-6 font-bold text-sm cursor-pointer">
							LogIn
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;