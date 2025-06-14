import { Link } from "react-router-dom";

const CardLogo = () => {
  return (
    <Link className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">B</span>
      </div>
      <span className="text-xl font-bold  ">BlogApp</span>
    </Link>
  );
};

export default CardLogo;
