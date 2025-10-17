import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import SidebarContent from './SidebarContent';
import { ROLES_CONFIG } from '@/config/roles';

interface MobileSidebarProps {
    role: keyof typeof ROLES_CONFIG;
    activePath: string;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ role, activePath }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
                <SidebarContent role={role} activePath={activePath} />
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;