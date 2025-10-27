import { type NavigateFunction, useNavigate } from "react-router";

const NavBar = () => {
  const items: string[] = ["Usuarios", "Productores", "Expedientes"];
  const navigate: NavigateFunction = useNavigate();

  const handleClick = (item: string) => {
    navigate(`/dashboard/${item.toLowerCase()}`);
  };

  return (
    <nav className="flex justify-center space-x-4 p-4 bg-gray-800 text-white">
      {items.map((item, index) => (
        <div
          key={index}
          className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 cursor-pointer"
          onClick={() => handleClick(item)}
        >
          {item}
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
