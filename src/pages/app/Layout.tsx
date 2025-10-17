import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import AppHeader from '@/components/layout/AppHeader';
import BottomNavbar from '@/components/layout/BottomNavbar';
import { ROLES_CONFIG } from '@/config/roles';

const AppLayout = () => {
    const location = useLocation();
    
    // State để lưu vai trò hiện tại của người dùng.
    // Ưu tiên lấy từ sessionStorage. Nếu không có, xác định từ URL (dành cho trường hợp truy cập trực tiếp).
    const [role, setRole] = useState<keyof typeof ROLES_CONFIG>(() => {
        const savedRole = sessionStorage.getItem('selectedRole') as keyof typeof ROLES_CONFIG;
        if (savedRole && ROLES_CONFIG[savedRole]) {
            return savedRole;
        }
        
        if (location.pathname.startsWith('/app/creator')) return 'creator';
        if (location.pathname.startsWith('/app/consumer')) return 'consumer';
        return 'investor';
    });

    // Hàm để lấy tiêu đề trang dựa trên đường dẫn URL hiện tại.
    const getTitle = () => {
        const allNavItems = Object.values(ROLES_CONFIG).flatMap(config => (config as any).nav);
        const currentNavItem = allNavItems.find((item: any) => item.path === location.pathname);
        return currentNavItem ? currentNavItem.name : 'Trang chủ';
    };

    // Effect này sẽ lưu vai trò vào sessionStorage mỗi khi nó thay đổi.
    // Điều này đảm bảo vai trò được duy trì khi người dùng làm mới trang hoặc chuyển vai trò.
    useEffect(() => {
        sessionStorage.setItem('selectedRole', role);
    }, [role]);

    return (
        <div className="flex h-screen bg-white font-sans text-gray-800">
            {/* Sidebar cho màn hình lớn */}
            <Sidebar role={role} activePath={location.pathname} />
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header chung cho ứng dụng */}
                <AppHeader role={role} setRole={setRole} title={getTitle()} />
                <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 pb-20 lg:pb-4">
                    <div className="sub-view">
                       {/* Nội dung của các trang con sẽ được hiển thị ở đây */}
                       <Outlet />
                    </div>
                </main>
                {/* Thanh điều hướng dưới cho di động */}
                <BottomNavbar role={role} />
            </div>
        </div>
    );
};

export default AppLayout;