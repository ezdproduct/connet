import React from 'react';
import { ImageWithFallback } from '../ImageWithFallback';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRegisterClick }) => (
    <section className="container mx-auto px-4 sm:px-6 pt-3 pb-24 md:pb-32 bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left animate-on-scroll">
                 <h1 className="font-barlow font-bold text-5xl md:text-6xl text-[var(--color-primary)] leading-tight">MUA THÔNG MINH<br/>DÙNG BỀN VỮNG<br/>MẶC CÓ TRÁCH NHIỆM</h1>
                <p className="mt-6 text-gray-600 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed">
                    CÒN NÉT GEN kiến tạo một hệ sinh thái thời trang tuần hoàn, minh bạch và công bằng, nơi mỗi lựa chọn của bạn đều góp phần tạo nên một tương lai xanh hơn.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="#ecosystem" className="bg-[var(--color-primary)] text-white font-bold px-8 py-4 rounded-full hover:bg-[var(--color-primary-hover)] transition-colors transform hover:scale-105 custom-shadow">Khám Phá Hệ Sinh Thái</a>
                    <button onClick={onRegisterClick} className="bg-white text-[var(--color-primary)] font-bold px-8 py-4 rounded-full border-2 border-[var(--color-primary)] hover:bg-green-50 transition-colors transform hover:scale-105">Tham Gia Ngay</button>
                </div>
            </div>
            <div className="hidden lg:block animate-on-scroll delay-1">
                <ImageWithFallback src="/hero.svg" alt="Tái chế quần áo" className="rounded-lg w-full h-auto" />
            </div>
        </div>
    </section>
);