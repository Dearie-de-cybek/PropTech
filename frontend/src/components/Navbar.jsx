import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="logo">
          <span className="font-montserrat font-bold text-2xl text-white">PropertyApp</span>
          {/* <img src="/public/logo.svg" alt="Logo" className="h-10" /> */}
        </div>
        
        {/* Navigation links in the middle */}
        <div className="flex space-x-4">
          {['Home', 'Buy', 'Rent', 'Sell', 'Agency'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="px-4 py-2 rounded-full bg-[#1E1E1E] text-white font-montserrat hover:bg-opacity-80 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
        
        {/* Register and Login on the right */}
        <div className="flex space-x-6">
          <Link to="/register" className="text-white font-roboto uppercase">
            REGISTER
          </Link>
          <Link to="/login" className="text-white font-roboto uppercase">
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;