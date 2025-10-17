import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Search, Bell, ChevronDown } from 'lucide-react';
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
        <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-200 bg-white">
            <div className="flex items-center">
                {/* Hiển thị tiêu đề trên desktop (lg và lớn hơn) */}
                <h2 className="hidden lg:block text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
                
                {/* Hiển thị logo trên mobile (nhỏ hơn lg) và link về trang chủ */}
                <Link to="/" className="lg:hidden">
                    <img src="/logo.svg" alt="CÒN NÉT GEN Logo" className="h-10" />
                </Link>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
                <div className="relative hidden md:block w-80">
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
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button 
                            variant="outline" 
                            className="h-10 px-2 md:px-4 rounded-xl font-semibold text-sm bg-gray-100 border-gray-200 hover:bg-gray-200 transition-colors"
                        >
                            <RoleIcon className={`w-5 h-5 md:mr-2 text-gray-700`} />
                            <span className="hidden md:inline text-gray-800">{currentRoleConfig.roleName}</span>
                            <ChevronDown className="w-4 h-4 md:ml-2 text-gray-500" />
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