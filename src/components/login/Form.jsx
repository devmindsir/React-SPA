import { useContext, useState } from "react";
import { FaLock, FaEnvelope, FaUserAlt } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result.success) {
      setError("");
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <>
      <div className="p-8 sm:p-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          ورود به حساب کاربری
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute right-4 top-3 text-gray-400" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="ایمیل"
              className="form-input"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute right-4 top-3 text-gray-400" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="رمز عبور"
              className="form-input"
            />
          </div>

          {error && (
            <p className="text-red-500 text-center font-bold">{error}</p>
          )}

          <div className="flex justify-between text-sm text-gray-500">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-blue-600" />
              مرا به خاطر بسپار
            </label>
            <a href="#" className="hover:text-blue-600">
              فراموشی رمز؟
            </a>
          </div>

          <button type="submit" className="btn-primary w-full py-2">
            ورود به حساب
          </button>

          <div className="text-center text-sm text-gray-600">
            حساب نداری؟{" "}
            <a href="#" className="text-blue-600 hover:underline">
              ثبت‌نام کن
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
