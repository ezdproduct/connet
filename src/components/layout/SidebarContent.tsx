import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ROLES_CONFIG } from '@/config/roles';
import { Icon } from '@/components/Icons';

interface SidebarContentProps {
    role: keyof typeof ROLES_CONFIG;
    activePath: string;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ role, activePath }) => {
    const config = ROLES_CONFIG[role];
    const navigate = useNavigate();

    const handleNavClick = (path: string) => {
        navigate(path);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="px-6 py-5 border-b border-gray-200">
                <Link to="/">
                    <img src="/logo.svg" alt="CÒN NÉT GEN Logo" className="h-10" />
                </Link>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {config.nav.map(item => (
                    <a 
                        href="#" 
                        key={item.id} 
                        onClick={(e) => { e.preventDefault(); handleNavClick(item.path); }} 
                        className={`sidebar-link flex items-center px-4 py-2.5 text-sm text-gray-600 rounded-lg hover:bg-gray-100 ${activePath === item.path ? `active-${config.theme}` : ''}`}
                    >
                        <Icon path={item.icon} className="w-5 h-5 mr-3 text-gray-400" />
                        <span>{item.name}</span>
                    </a>
                ))}
            </nav>
            <div className="p-4 border-t border-gray-200">
                <div className="flex items-center">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full object-cover"/>
                    <div className="ml-3">
                        <p className="font-semibold text-sm">Nguyễn Văn An</p>
                        <p className="text-xs text-gray-500">{config.roleName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarContent;