import * as React from 'react';

interface NavItem{
    label: string;
    href: string;
}

interface HeaderProps {
    logo: string;
    navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ logo, navItems }) => {
    return (
        <header className='header header-bg'>
            <div>
                <p className='header-logo color-primary-01'>{logo}</p>
            </div>
            <nav className='color-primary-01'>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};


export default Header;