import { FaRegClock } from "react-icons/fa";

function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="relative">
        <div
          className="w-20 h-20 border-8 border-t-transparent border-l-transparent rounded-full animate-spin"
          style={{
            borderRightColor: "#3b82f6",
            borderBottomColor: "#22c55e", 
            borderTopColor: "#f87171", 
            borderLeftColor: "#facc15",
                    }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600">
          <FaRegClock className="w-10 h-10 text-pink-500 animate-bounce" />
        </div>
      </div>
    </div>
  );
}

export default Spinner;
