import RegisterForm from "@/components/auth/RegisterForm";
import registerImg from "../assets/images/iti-img.png";
const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-card rounded-lg shadow-lg overflow-hidden">
        {/* Left side - Image */}
        <div className="hidden md:block md:w-1/2 bg-secondary">
          <div className="h-full flex items-center justify-center p-12">
            <div className="max-w-md text-center">
              <img
                src={registerImg}
                alt="Register illustration"
                className="mx-auto w-1/2 mb-8"
              />
              <h3 className="text-2xl font-bold text-white mb-4">
                Where conversations spark relationships
              </h3>
              <p className="text-gray-100">
                Create an account to start sharing your ideas, connect with
                like-minded people, and build your personal brand.
              </p>
            </div>
          </div>
        </div>

        {/*  Register Form */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
