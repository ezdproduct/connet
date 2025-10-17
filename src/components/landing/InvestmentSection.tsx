import React from 'react';

interface InvestmentSectionProps {
  onRegisterClick: () => void;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({ onRegisterClick }) => (
     <section id="investment" className="py-20 bg-[var(--color-dark-bg)]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-barlow font-bold text-[var(--color-heading-on-dark)] animate-on-scroll">ĐẦU TƯ TÁC ĐỘNG - KIẾN TẠO TƯƠNG LAI</h2>
            <p className="mt-4 max-w-3xl mx-auto text-[var(--color-text-on-dark)] animate-on-scroll delay-1">Trở thành một phần của cuộc cách mạng thời trang. Đầu tư của bạn không chỉ tạo ra lợi nhuận mà còn tạo ra tác động xã hội và môi trường có thể đo lường được (CSR/ESG).</p>
            <div className="mt-8 animate-on-scroll delay-2"><button onClick={onRegisterClick} className="bg-[var(--color-heading-on-dark)] text-[var(--color-secondary)] font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors transform hover:scale-105 custom-shadow">Tìm Hiểu Cơ Hội Đầu Tư</button></div>
        </div>
    </section>
);