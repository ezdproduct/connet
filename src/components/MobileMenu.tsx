import React from 'react';
import { Icons } from './Icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onRegisterClick }) => {
    const handleRegister = () => {
        onRegisterClick();
        onClose();
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
            <div className="p-6">
                <button onClick={onClose} className="absolute top-4 right-4"><Icons.Close /></button>
                <nav className="mt-16 flex flex-col space-y-8 text-center text-xl font-bold text-[var(--color-secondary)]">
                    <a href="/#gioithieu" onClick={onClose}>Giới Thiệu</a>
                    <a href="/#ecosystem" onClick={onClose}>Hệ Sinh Thái</a>
                    <a href="/#blockchain" onClick={onClose}>Công Nghệ</a>
                    <a href="/#investment" onClick={onClose}>Đầu Tư</a>
                    <a href="/#quytrinh" onClick={onClose}>Quy trình</a>
                    <a href="/#coin" onClick={onClose}>Cò Coin</a>
                    <button onClick={handleRegister} className="bg-[var(--color-primary)] text-white px-5 py-3 rounded-full">Tham Gia Ngay</button>
                </nav>
            </div>
        </div>
    );
};