import { useState, useEffect } from "react";
import { Menu, X, Home, Info, Mail, PlusCircle, LogIn, User, UserRound, Gift, Code } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { allowedEmails } from "./allowed-emails";
import Logo from '../assets/bitnboard.png';
import Swags from '../assets/swags.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  console.log(user, "user" );

  // Sign in with Google
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // user object is updated via onAuthStateChanged
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  // Sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/'); // optionally redirect to home on sign-out
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  // Navigation items
  const NavItems = () => (
    <>
      {[
        { to: "/", label: "Home", icon: Home },
        { to: "/about", label: "About", icon: Info },
        { to: "/projects", label: "Projects", icon: Code, neon: true },
        { to: "/swags", label: "Swags", icon: Gift },
        { to: "/contact-us", label: "Get in Touch", icon: Mail },
      ].map(({ to, label, icon: Icon, neon }) => (
        <Link
          key={to}
          to={to}
          className={`flex sm:inline-block text-white relative px-2 py-2 sm:py-0 text-sm font-medium sm:mx-4 group flex items-center gap-1.5 whitespace-nowrap`}
        >
          <div className="flex items-center gap-1.5">
            <Icon size={16} className="flex-shrink-0" />
            <span>{label}</span>
            {neon && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-300 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></span>
            )}
          </div>
        </Link>
      ))}

      {/* <div className="flex items-center gap-1.5">
        <img src={Swags} alt="Swags" className="w-16 h-6" />
      </div> */}

      {/* Show 'Create Post' for signed-in users */}
      {user && allowedEmails.includes(user.email) && (
        <button
          onClick={() => navigate('/create-post')}
          className={`flex sm:inline-block text-white relative px-2 py-2 sm:py-0 text-sm font-medium sm:mx-4 group flex items-center gap-1.5 whitespace-nowrap`}
        >
          <div className="flex items-center gap-1.5">
            <PlusCircle size={16} className="flex-shrink-0" />
            <span>Create Post</span>
          </div>
        </button>
      )}

      {/* Auth button or avatar */}
      {user && user.photoURL ? (
        <img
          src={user.photoURL}
          alt={user.displayName || 'avatar'}
          title={user.displayName}
          className="w-8 h-8 rounded-full cursor-pointer sm:ml-4"
          onClick={handleSignOut}
        />
      ) : (
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center text-sm font-semibold gap-2 px-4 py-2 bg-white text-[#151e28] rounded-[12px] hover:bg-gray-100 transition-colors"
        >
          <UserRound size={16} />
          <span>Sign in</span>
        </button>
      )}
    </>
  );

  return (
    <header className="py-2 bg-[#151e28] text-white border-b border-gray-200">
      <nav className="flex justify-between items-center w-5/6 mx-auto">
        <Link to="/" className="text-2xl font-bold flex">
          <img src={Logo} alt="BitNBoard" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex sm:items-center">
          <NavItems />
        </div>

        {/* Mobile hamburger */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#151e28] flex flex-col items-center p-4 sm:hidden">
            <div className="flex flex-col w-full space-y-4">
              <NavItems />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
