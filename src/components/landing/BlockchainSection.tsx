import React from 'react';
import { ImageWithFallback } from '../ImageWithFallback';

export const BlockchainSection = () => (
    <section id="blockchain" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-barlow font-bold text-[var(--color-primary)]">CÔNG NGHỆ ĐỘT PHÁ: BLOCKCHAIN & TOKEN</h2>
                    <p className="mt-6 text-[var(--color-secondary)] text-lg leading-relaxed">Chúng tôi ứng dụng công nghệ để xây dựng một nền tảng thực sự minh bạch và trao quyền.</p>
                    <div className="mt-6 space-y-6">
                        <div><h3 className="font-bold text-xl">Minh bạch tuyệt đối</h3><p className="mt-1">Mọi giao dịch và vòng đời sản phẩm, từ quyên góp đến thành phẩm, đều được ghi lại trên blockchain, không thể thay đổi.</p></div>
                        <div><h3 className="font-bold text-xl">Cơ Chế Token Kép</h3><p className="mt-1"><b className="text-[var(--color-primary)]">Cò Coin:</b> Phần thưởng cho các hành động xanh như quyên góp, sáng tạo nội dung. Dùng để mua sắm và sử dụng dịch vụ trong hệ sinh thái.<br/><b className="text-[var(--color-primary)]">Chứng chỉ xanh:</b> Đại diện cho cổ phần trong các dự án tái chế, cho phép nhà đầu tư nhận lợi nhuận và tham gia quản trị.</p></div>
                    </div>
                </div>
                <div className="hidden lg:block animate-on-scroll delay-1"><ImageWithFallback src="https://images.unsplash.com/photo-1639754391392-169b8a38ab52?q=80&w=1000&auto=format&fit=crop" alt="Công nghệ Blockchain" className="rounded-lg w-full" /></div>
            </div>
        </div>
    </section>
);