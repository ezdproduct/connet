import React from 'react';
import { Icons } from './Icons';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './ImageWithFallback';

interface HeaderProps {
  onMenuClick: () => void;
  onRegisterClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, onRegisterClick }) => (
    <header className="py-1 bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2"><ImageWithFallback src="/logo.svg" alt="CÒN NÉT GEN Logo" className="h-20" /></Link>
            <nav className="hidden lg:flex items-center space-x-8 text-[var(--color-secondary)] font-bold">
                <a href="/#gioithieu" className="hover:text-[var(--color-primary-hover)] transition-colors">Giới Thiệu</a>
                <a href="/#ecosystem" className="hover:text-[var(--color-primary-hover)] transition-colors">Hệ Sinh Thái</a>
                <a href="/#blockchain" className="hover:text-[var(--color-primary-hover)] transition-colors">Công Nghệ</a>
                <a href="/#investment" className="hover:text-[var(--color-primary-hover)] transition-colors">Đầu Tư</a>
                <a href="/#quytrinh" className="hover:text-[var(--color-primary-hover)] transition-colors">Quy trình</a>
                <a href="/#coin" className="hover:text-[var(--color-primary-hover)] transition-colors">Cò Coin</a>
                <button onClick={onRegisterClick} className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-full hover:bg-[var(--color-primary-hover)] transition-colors transform hover:scale-105">Tham Gia Ngay</button>
            </nav>
            <button className="lg:hidden" onClick={onMenuClick}><Icons.Menu /></button>
        </div>
    </header>
);