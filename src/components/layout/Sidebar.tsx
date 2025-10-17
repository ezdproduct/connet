import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROLES_CONFIG } from '../../config/roles';
import { Icon } from '@/components/Icons';

interface SidebarProps {
    role: keyof typeof ROLES_CONFIG;
    activePath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ role, activePath }) => {
    const config = ROLES_CONFIG[role];
    const navigate = useNavigate();

    const handleNavClick = (path: string) => {
        navigate(path);
    };

    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
            <div className="px-6 py-5 border-b border-gray-200">
                <img src="/logo.svg" alt="CÒN NÉT GEN Logo" className="h-10" />
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
                    <img src="https://placehold.co/40x40/007BFF/FFFFFF?text=A" alt="Avatar" className="rounded-full"/>
                    <div className="ml-3">
                        <p className="font-semibold text-sm">Nguyễn Văn An</p>
                        <p className="text-xs text-gray-500">{config.roleName}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;