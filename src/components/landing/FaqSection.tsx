import React, { useState, useRef } from 'react';

const AccordionItem = ({ title, content }: { title: string, content: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    return (
        <div className="bg-white rounded-lg">
            <h2>
                <button type="button" className={`accordion-button flex items-center justify-between w-full p-5 font-bold text-left text-[var(--color-secondary)] ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span>{title}</span>
                    <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </h2>
            <div ref={contentRef} className="accordion-content" style={{ maxHeight: isOpen && contentRef.current ? contentRef.current.scrollHeight + "px" : "0" }}><div className="p-5 pt-0">{content}</div></div>
        </div>
    )
};

export const FaqSection = () => {
    return (
        <section id="cauhoi" className="py-20">
             <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl md:text-4xl font-barlow font-bold text-[var(--color-primary)] text-center uppercase animate-on-scroll">Câu hỏi thường gặp</h2>
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
                    <div className="space-y-4 animate-on-scroll delay-1">
                        <AccordionItem title="“Tái sinh quần áo cũ” là gì?" content="Đây là dự án thu gom, tái chế quần áo cũ của CÒN NÉT GEN, giúp kéo dài vòng đời sản phẩm và giảm rác thải thời trang." />
                        <AccordionItem title="Tôi có thể gửi những loại quần áo nào?" content="Chúng tôi nhận cả quần áo còn tốt và đã hư hỏng. Mỗi món đồ đều có cơ hội được tái sinh." />
                        <AccordionItem title="Làm sao để gửi quần áo cũ?" content="Cá nhân có thể mang đến điểm thu gom. Doanh nghiệp vui lòng điền form liên hệ để được tư vấn." />
                    </div>
                    <div className="space-y-4 animate-on-scroll delay-2">
                        <AccordionItem title="Quần áo sau thu gom sẽ đi về đâu?" content="1. Reshare: Trao tặng cho người cần. 2. Recycle: Tái chế thành sản phẩm mới." />
                        <AccordionItem title="Doanh nghiệp tham gia được lợi ích gì?" content="Hợp tác giúp nâng cao điểm ESG, khẳng định cam kết bền vững, và tạo lợi thế cạnh tranh." />
                        <AccordionItem title="Tôi có thể theo dõi tác động của dự án không?" content="Có. Chúng tôi cung cấp báo cáo định kỳ về số lượng quần áo thu gom trên website connetgen.com." />
                    </div>
                </div>
            </div>
        </section>
    )
};