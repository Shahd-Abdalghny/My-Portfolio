import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../public/logo.png'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#Home' },
        { name: 'About', href: '#About' },
        { name: 'Services', href: '#Services' },
        { name: 'Projects', href: '#Projects' },
        { name: 'Skills', href: '#Skills' },
        { name: 'Contact Me', href: '#Contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-nav bg-secondary border-nav-border sticky top-0 z-50 backdrop-blur-md bg-nav/95 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#Home" >
                            <img src={logo} alt="" width={30} height={30} />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-nav-foreground hover:text-primary py-2 text-sm font-medium transition-smooth relative group"
                                >
                                    {item.name}

                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Button - Desktop */}
                    <div className="hidden md:block">
                        <button
                            variant="default"
                            className="bg-white text-secondary rounded-full hover:text-primary  font-medium px-6 py-2 transition-spring hover:scale-105"
                        >
                            <a href="https://www.linkedin.com/in/shahd-elghny-gad/" target='_blank' className='text-inherit no-underline'>

                                LinkedIn
                            </a>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-nav-foreground hover:text-nav-link-hover transition-smooth p-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'max-h-96 opacity-100 visible'
                    : 'max-h-0 opacity-0 invisible'
                    } overflow-hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-nav border-t border-nav-border">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-nav-foreground hover:text-nav-link-hover hover:bg-secondary/50 block px-3 py-2 text-base font-medium transition-smooth rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-4 pb-2">
                            <button

                                className="w-full bg-white text-secondary rounded-full hover:text-primary  font-medium px-6 py-2 transition-spring hover:scale-105"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <a href="https://www.linkedin.com/in/shahd-elghny-gad/" target='_blank' className='text-inherit no-underline'>

                                    LinkedIn
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;