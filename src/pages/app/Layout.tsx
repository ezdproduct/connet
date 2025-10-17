import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Search, Bell, ChevronDown, LayoutGrid, User, Palette, TrendingUp } from 'lucide-react';

// --- ICONS ---
const Icon = ({ path, className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: path }}></svg>
);

const ICONS = {
    dashboard: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>',
    market: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>',
    wallet: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>',
    creatorDashboard: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>',
    products: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>',
    projects: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>',
    feed: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3h4m-4 16v-7a1 1 0 011-1h4a1 1 0 011 1v7m-4 0a1 1 0 001 1h2a1 1 0 001-1m-6 0a1 1 0 001 1h2a1 1 0 001-1m-6 0H9"></path>',
    marketplace: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>',
    missions: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>',
    search: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>',
    bell: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>',
    chevronDown: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>',
};

const ROLES_CONFIG = {
    investor: { roleName: 'Nhà Đầu tư', theme: 'investor', iconComponent: TrendingUp, nav: [ { id: 'dashboard', name: 'Dashboard', icon: ICONS.dashboard, path: '/app/investor/dashboard' }, { id: 'market', name: 'Thị trường', icon: ICONS.market, path: '/app/investor/market' }, { id: 'wallet', name: 'Ví đầu tư', icon: ICONS.wallet, path: '/app/investor/wallet' } ] },
    creator: { roleName: 'Nhà Sáng tạo', theme: 'creator', iconComponent: Palette, nav: [ { id: 'dashboard', name: 'Bảng điều khiển', icon: ICONS.creatorDashboard, path: '/app/creator/dashboard' }, { id: 'products', name: 'Sản phẩm', icon: ICONS.products, path: '/app/creator/products' }, { id: 'projects', name: 'Dự án', icon: ICONS.projects, path: '/app/creator/projects' } ] },
    consumer: { roleName: 'Cộng đồng', theme: 'consumer', iconComponent: User, nav: [ { id: 'feed', name: 'Bảng tin', icon: ICONS.feed, path: '/app/consumer/feed' }, { id: 'market', name: 'Chợ trời', icon: ICONS.marketplace, path: '/app/consumer/market' }, { id: 'missions', name: 'Nhiệm vụ xanh', icon: ICONS.missions, path: '/app/consumer/missions' } ] }
};

const Sidebar = ({ role, setRole, activePath }) => {
    const config = ROLES_CONFIG[role];
    const navigate = useNavigate();

    const handleNavClick = (path) => {
        navigate(path);
    };

    return (<aside className="w-64 bg-white border-r border-gray-200 flex flex-col"><div className="px-6 py-5 border-b border-gray-200"><img src="/logo.svg" alt="CÒN NÉT GEN Logo" className="h-10" /></div><nav className="flex-1 p-4 space-y-2">{config.nav.map(item => (<a href="#" key={item.id} onClick={(e) => { e.preventDefault(); handleNavClick(item.path); }} className={`sidebar-link flex items-center px-4 py-2.5 text-sm text-gray-600 rounded-lg hover:bg-gray-100 ${activePath === item.path ? `active-${config.theme}` : ''}`}><Icon path={item.icon} className="w-5 h-5 mr-3 text-gray-400" /><span>{item.name}</span></a>))}</nav><div className="p-4 border-t border-gray-200"><div className="flex items-center"><img src="https://placehold.co/40x40/007BFF/FFFFFF?text=A" alt="Avatar" className="rounded-full"/><div className="ml-3"><p className="font-semibold text-sm">Nguyễn Văn An</p><p className="text-xs text-gray-500">{config.roleName}</p></div></div></div></aside>);
};

const AppHeader = ({ role, setRole, title }) => {
    const navigate = useNavigate();
    const currentRoleConfig = ROLES_CONFIG[role];
    const RoleIcon = currentRoleConfig.iconComponent;

    const handleRoleChange = (newRole: keyof typeof ROLES_CONFIG) => { 
        setRole(newRole); 
        navigate(ROLES_CONFIG[newRole].nav[0].path);
    };

    return (
        <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white">
            {/* Title (Dashboard, etc.) */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
                {/* Search Bar */}
                <div className="relative w-80">
                    <Input 
                        type="text" 
                        placeholder="Tìm kiếm dự án..." 
                        className="w-full pl-4 pr-10 py-2 h-10 rounded-xl bg-gray-50 border-gray-200 focus:ring-blue-300" 
                    />
                    <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>

                {/* Notification Bell */}
                <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full hover:bg-gray-100">
                    <Bell className="w-6 h-6 text-gray-500" />
                    <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </Button>

                {/* App Grid Icon (Placeholder for future app menu) */}
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-gray-100">
                    <LayoutGrid className="w-6 h-6 text-gray-500" />
                </Button>

                {/* Role Switch Dropdown */}
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
                        {Object.keys(ROLES_CONFIG).map((roleKey: keyof typeof ROLES_CONFIG) => {
                            const config = ROLES_CONFIG[roleKey];
                            const IconComponent = config.iconComponent;
                            return (
                                <DropdownMenuItem 
                                    key={roleKey} 
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


const AppLayout = () => {
    const location = useLocation();
    const [role, setRole] = useState<keyof typeof ROLES_CONFIG>(() => {
        if (location.pathname.startsWith('/app/creator')) return 'creator';
        if (location.pathname.startsWith('/app/consumer')) return 'consumer';
        return 'investor';
    });

    const getTitle = () => {
        const allNavItems = Object.values(ROLES_CONFIG).flatMap(config => config.nav);
        const currentNavItem = allNavItems.find(item => item.path === location.pathname);
        return currentNavItem ? currentNavItem.name : 'Dashboard';
    };

    // Update role state if URL changes outside of role switch logic
    useEffect(() => {
        if (location.pathname.startsWith('/app/creator') && role !== 'creator') {
            setRole('creator');
        } else if (location.pathname.startsWith('/app/consumer') && role !== 'consumer') {
            setRole('consumer');
        } else if (location.pathname.startsWith('/app/investor') && role !== 'investor') {
            setRole('investor');
        }
    }, [location.pathname]);


    return (
        <>
            <style>{`.sidebar-link.active-investor { background-color: #EBF5FF; color: #007BFF; font-weight: 600; } .sidebar-link.active-investor svg { stroke: #007BFF; } .sidebar-link.active-creator { background-color: #FFF3E0; color: #FD7E14; font-weight: 600; } .sidebar-link.active-creator svg { stroke: #FD7E14; } .sidebar-link.active-consumer { background-color: #E8F5E9; color: #198754; font-weight: 600; } .sidebar-link.active-consumer svg { stroke: #198754; } .sub-view { animation: fadeIn 0.5s ease-in-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            <div className="flex h-screen bg-white font-sans text-gray-800">
                <Sidebar role={role} setRole={setRole} activePath={location.pathname} />
                <main className="flex-1 flex flex-col overflow-hidden">
                    <AppHeader role={role} setRole={setRole} title={getTitle()} />
                    <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
                        <div className="sub-view">
                           <Outlet />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default AppLayout;