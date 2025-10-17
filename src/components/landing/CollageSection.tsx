import React from 'react';
import { ImageWithFallback } from '../ImageWithFallback';

export const CollageSection = () => (
    <section id="platform-intro" className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="relative grid grid-cols-12 items-center">
                <div className="hidden lg:block col-span-4 animate-on-scroll"><div className="grid grid-cols-2 gap-4"><ImageWithFallback src="https://placehold.co/400x500/e8fab0/1b673f?text=Fashion" alt="Fashion" className="rounded-lg shadow-lg transform -rotate-6" /><ImageWithFallback src="https://placehold.co/400x500/08244d/ffaf46?text=Tech" alt="Technology" className="rounded-lg shadow-lg transform rotate-3 mt-8" /></div></div>
                <div className="col-span-12 lg:col-span-4 text-center z-10 animate-on-scroll delay-1">
                     <div className="bg-white/80 backdrop-blur-md p-8 rounded-lg custom-shadow">
                        <h2 className="text-2xl md:text-3xl font-barlow font-bold text-[var(--color-primary)]">CÒN NÉT GEN - Nền Tảng Gắn Kết Cộng Đồng</h2>
                        <p className="mt-4 text-gray-600">Đây là nơi kết nối các dự án thời trang bền vững với doanh nghiệp, nhà đầu tư, và cộng đồng người dùng có trách nhiệm, cùng nhau đưa những sáng kiến vì cộng đồng vươn ra thế giới.</p>
                        <a href="#ecosystem" className="mt-6 inline-block bg-white text-[var(--color-primary)] font-bold px-6 py-3 rounded-full border-2 border-[var(--color-primary)] hover:bg-green-50 transition-colors transform hover:scale-105">Tìm Hiểu Về Hệ Sinh Thái</a>
                    </div>
                </div>
                 <div className="hidden lg:block col-span-4 animate-on-scroll delay-2"><div className="grid grid-cols-2 gap-4"><ImageWithFallback src="https://placehold.co/400x500/ffaf46/08244d?text=Community" alt="Community" className="rounded-lg shadow-lg transform rotate-6" /><ImageWithFallback src="https://placehold.co/400x500/1b673f/fff9f0?text=Sustainability" alt="Sustainability" className="rounded-lg shadow-lg transform -rotate-3 mt-8" /></div></div>
            </div>
        </div>
    </section>
);