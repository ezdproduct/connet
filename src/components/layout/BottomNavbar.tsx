import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROLES_CONFIG } from '@/config/roles';
import { Icon } from '@/components/Icons';
import { cn } from '@/lib/utils';

interface BottomNavbarProps {
    role: keyof typeof ROLES_CONFIG;
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({ role }) => {
    const location = useLocation();
    const config = ROLES_CONFIG[role];

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-1px_3px_rgba(0,0,0,0.1)] z-40">
            <div className="flex justify-around h-16">
                {config.nav.map(item => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={cn(
                                'flex flex-col items-center justify-center text-center p-2 w-full transition-colors duration-200',
                                'hover:bg-gray-50',
                                isActive ? `bottom-nav-active-${config.theme}` : 'text-gray-500'
                            )}
                        >
                            <Icon path={item.icon} className="w-6 h-6 mb-1" />
                            <span className="text-xs font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNavbar;