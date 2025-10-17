import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Search, Bell, ChevronDown, LayoutGrid } from 'lucide-react';
import { ROLES_CONFIG } from '../../config/roles';

interface AppHeaderProps {
    role: keyof typeof ROLES_CONFIG;
    setRole: (role: keyof typeof ROLES_CONFIG) => void;
    title: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ role, setRole, title }) => {
    const navigate = useNavigate();
    const currentRoleConfig = ROLES_CONFIG[role];
    const RoleIcon = currentRoleConfig.iconComponent;

    const handleRoleChange = (newRole: keyof typeof ROLES_CONFIG) => { 
        setRole(newRole); 
        navigate(ROLES_CONFIG[newRole].nav[0].path);
    };

    return (
        <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative w-80">
                    <Input 
                        type="text" 
                        placeholder="Tìm kiếm dự án..." 
                        className="w-full pl-4 pr-10 py-2 h-10 rounded-xl bg-gray-50 border-gray-200 focus:ring-blue-300" 
                    />
                    <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
                <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full hover:bg-gray-100">
                    <Bell className="w-6 h-6 text-gray-500" />
                    <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-gray-100">
                    <LayoutGrid className="w-6 h-6 text-gray-500" />
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button 
                            variant="outline" 
                            className="h-10 px-4 rounded-xl font-semibold text-sm bg-gray-100 border-gray-200 hover:bg-gray-200 transition-colors"
                        >
                            <RoleIcon className={`w-5 h-5 mr-2 text-gray-700`} />
                            <span className="text-gray-800">{currentRoleConfig.roleName}</span>
                            <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-52">
                        {(Object.keys(ROLES_CONFIG) as Array<keyof typeof ROLES_CONFIG>).map((roleKey) => {
                            const config = ROLES_CONFIG[roleKey];
                            const IconComponent = config.iconComponent;
                            return (
                                <DropdownMenuItem 
                                    key={roleKey as string} 
                                    onClick={() => handleRoleChange(roleKey)}
                                    className="cursor-pointer"
                                >
                                    <IconComponent className={`w-5 h-5 mr-3 text-gray-700`} />
                                    {config.roleName}
                                </DropdownMenuItem>
                            );
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default AppHeader;