import React from 'react';
import { ImageWithFallback } from '../ImageWithFallback';

export const AboutSection = () => (
    <section id="gioithieu" className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-on-scroll"><ImageWithFallback src="/about-vision.svg" alt="Sơ đồ dự án" className="rounded-lg w-full" /></div>
                <div className="animate-on-scroll delay-1">
                    <h2 className="text-3xl md:text-4xl font-barlow font-bold text-[var(--color-primary)]">TẦM NHÌN CỦA CHÚNG TÔI</h2>
                    <p className="mt-6 text-[var(--color-secondary)] text-lg leading-relaxed">Chúng tôi không chỉ tái chế quần áo. Chúng tôi đang tái định hình tương lai của ngành thời trang.</p>
                    <p className="mt-4 text-[var(--color-secondary)] text-lg leading-relaxed">CÒN NÉT GEN là một hệ sinh thái toàn diện dựa trên công nghệ blockchain, kết nối những con người có cùng chí hướng để biến thời trang cũ thành tài nguyên mới, kiến tạo một cộng đồng tiêu dùng minh bạch, công bằng và có trách nhiệm.</p>
                </div>
            </div>
        </div>
    </section>
);