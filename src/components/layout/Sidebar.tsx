import React from 'react';
import SidebarContent from './SidebarContent';
import { ROLES_CONFIG } from '@/config/roles';

interface SidebarProps {
    role: keyof typeof ROLES_CONFIG;
    activePath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ role, activePath }) => {
    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex-col hidden lg:flex">
            <SidebarContent role={role} activePath={activePath} />
        </aside>
    );
};

export default Sidebar;