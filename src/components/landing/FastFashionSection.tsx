import React from 'react';
import { ImageWithFallback } from '../ImageWithFallback';

export const FastFashionSection = () => (
    <section className="py-20 bg-[var(--color-accent)]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-barlow font-bold text-[var(--color-primary)]">VẤN ĐỀ CỦA THỜI TRANG NHANH</h2>
            <p className="mt-4 max-w-2xl mx-auto text-[var(--color-secondary)]">Đằng sau vẻ hào nhoáng là một sự thật đáng báo động về môi trường.</p>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl overflow-hidden custom-shadow group animate-on-scroll delay-1"><div className="relative"><ImageWithFallback src="/fast-fashion-buried.svg" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" /><div className="absolute inset-0 bg-black bg-opacity-40"></div><h3 className="font-barlow font-bold text-3xl text-white absolute bottom-6 left-6">92 triệu tấn rác</h3></div><div className="p-6 bg-white"><p className="text-left text-sm">Mất hàng trăm năm để phân hủy và giải phóng khí nhà kính.</p></div></div>
                <div className="rounded-2xl overflow-hidden custom-shadow group animate-on-scroll delay-2"><div className="relative"><ImageWithFallback src="/fast-fashion-ocean.svg" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" /><div className="absolute inset-0 bg-black bg-opacity-40"></div><h3 className="font-barlow font-bold text-3xl text-white absolute bottom-6 left-6">1,2 tỷ tấn CO2</h3></div><div className="p-6 bg-white"><p className="text-left text-sm">Phân rã thành vi nhựa, đầu độc sinh vật biển và chuỗi thức ăn.</p></div></div>
                <div className="rounded-2xl overflow-hidden custom-shadow group animate-on-scroll delay-3"><div className="relative"><ImageWithFallback src="/fast-fashion-burned.svg" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" /><div className="absolute inset-0 bg-black bg-opacity-40"></div><h3 className="font-barlow font-bold text-3xl text-white absolute bottom-6 left-6">Ô nhiễm thứ 2 thế giới</h3></div><div className="p-6 bg-white"><p className="text-left text-sm">Giải phóng khí độc và kim loại nặng, gây ô nhiễm không khí.</p></div></div>
            </div>
        </div>
    </section>
);