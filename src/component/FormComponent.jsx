import {useState} from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const validateEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const re = /\S+@\S+\.\S+/;
    setValidEmail(re.test(value));
  };

  const validatePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setValidPassword(value.length >= 6);
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (validEmail && validPassword) {
      alert("Form is valid!");
    }
  };

  return (
    <div>
      <div className="max-w-sm mx-auto mb-8">
        <div className=" w-16 h-16 bg-gray-300 rounded-full mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jIqcLjdvSDxQv0YjHHzBoZGoTbtGc6RvsP_07-reJ9ebBEoXJlKg7N_cHA&s"
            alt="Avatar"
            className=" w-full h-full object-cover rounded-full"
          />
        </div>
        <form onSubmit={validateForm}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={validateEmail}
              className={`w-full px-3 py-2 border rounded ${
                validEmail ? "border-green-500" : "border-red-500"
              }`}
            />
            {!validEmail && email && <span className="text-red-500">Invalid email address</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={validatePassword}
              className={`w-full px-3 py-2 border rounded ${
                validPassword ? "border-green-500" : "border-red-500"
              }`}
            />
            {!validPassword && password && (
              <span className="text-red-500">Password must be at least 6 characters</span>
            )}
          </div>
          <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
