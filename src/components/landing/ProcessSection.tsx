import React from 'react';

interface ProcessSectionProps {
    onModalClick: (modalId: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onModalClick }) => (
    <section id="quytrinh" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-barlow font-bold text-[var(--color-primary)] uppercase animate-on-scroll">HÀNH TRÌNH TÁI SINH</h2>
            <p className="mt-4 max-w-3xl mx-auto text-[var(--color-secondary)] animate-on-scroll delay-1">Mỗi món đồ bạn gửi gắm đều được trân trọng và xử lý theo một quy trình chuyên biệt.</p>
             <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="border-2 border-[var(--color-accent)] p-10 rounded-lg text-center hover:shadow-xl transition-shadow animate-on-scroll delay-1">
                    <h3 className="text-4xl font-barlow font-bold text-[var(--color-primary)]">Reshare (Trao tặng)</h3>
                    <p className="mt-4">Quần áo còn tốt sẽ được làm sạch, sửa chữa và trao tặng cho các tổ chức xã hội, mang lại niềm vui cho những người cần.</p>
                    <button onClick={() => onModalClick('reshare')} className="mt-6 bg-[var(--color-primary)] text-white px-5 py-2 rounded-full text-sm hover:bg-primary-hover font-bold uppercase tracking-wider">Xem chi tiết</button>
                </div>
                 <div className="border-2 border-[var(--color-accent)] p-10 rounded-lg text-center hover:shadow-xl transition-shadow animate-on-scroll delay-2">
                    <h3 className="text-4xl font-barlow font-bold text-[var(--color-primary)]">Recycle (Tái chế)</h3>
                    <p className="mt-4">Quần áo không còn khả năng sử dụng sẽ được đưa đến nhà máy đối tác để tái chế thành sợi, vải và các vật liệu mới.</p>
                    <button onClick={() => onModalClick('recycle')} className="mt-6 bg-[var(--color-primary)] text-white px-5 py-2 rounded-full text-sm hover:bg-primary-hover font-bold uppercase tracking-wider">Xem chi tiết</button>
                </div>
             </div>
        </div>
    </section>
);