import React from 'react';
import { CheckCircle, ArrowRight, Users, Factory, DollarSign, ShoppingBag, Palette } from 'lucide-react';

const StepCard = ({ number, title, content, icon: Icon, side, delay }) => {
    const isLeft = side === 'left';
    return (
        <div className={`flex justify-between items-center w-full my-4 ${isLeft ? 'flex-row-reverse' : ''}`}>
            {/* Content Card */}
            <div className={`w-5/12 animate-on-scroll delay-${delay} group`}>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                    <p className="text-sm text-gray-600">{content}</p>
                </div>
            </div>

            {/* Icon, Line, and Connector */}
            <div className="relative w-2/12 flex justify-center">
                <div className="absolute top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-white p-2 rounded-full border-4 border-[var(--color-primary)] shadow-md">
                        <Icon className="w-8 h-8 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-barlow font-bold text-lg text-[var(--color-primary)] mt-2 text-center w-40 whitespace-nowrap">
                        Bước {number}: {title}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export const FullProcessSection = () => {
    const steps = [
        { number: 1, title: "Thu gom", icon: Users, content: "Người tiêu dùng mang quần áo đến các điểm thu gom của Đối tác nguồn cung." },
        { number: 2, title: "Tiếp nhận", icon: CheckCircle, content: "Nhân viên của Đối tác tiếp nhận, phân loại sơ bộ." },
        { number: 3, title: "Ghi nhận Blockchain", icon: ArrowRight, content: "Nhân viên Đối tác sử dụng nền tảng, quét mã QR của người dùng, nhập khối lượng và loại quần áo." },
        { number: 4, title: "Phát hành Cò Coin", icon: DollarSign, content: "Hệ thống tự động tạo giao dịch blockchain, ghi nhận đóng góp và phát hành Cò Coin vào ví người dùng." },
        { number: 5, title: "Thu gom Công nghiệp", icon: Factory, content: "Đối tác Xử lý đến các điểm thu gom để thu gom toàn bộ quần áo đã được ghi nhận." },
        { number: 6, title: "Xử lý Chi tiết", icon: Factory, content: "Tại xưởng, Đối tác Xử lý phân loại chi tiết, giặt ủi, và xử lý công nghiệp." },
        { number: 7, title: "Cập nhật Nguyên liệu", icon: CheckCircle, content: "Sau khi xử lý, Đối tác cập nhật số lượng nguyên liệu tái chế (VD: 50kg Denim loại A) lên hệ thống." },
        { number: 8, title: "Đặt hàng Nguyên liệu", icon: Palette, content: "Nhà Sáng tạo truy cập nền tảng, thấy nguyên liệu có sẵn và tạo yêu cầu đặt hàng." },
        { number: 9, title: "Kêu gọi Vốn", icon: DollarSign, content: "Nhà Sáng tạo đăng tải dự án, concept, mục tiêu huy động vốn và chỉ số tác động dự kiến." },
        { number: 10, title: "Giải ngân", icon: DollarSign, content: "Khi dự án đạt mục tiêu, nền tảng sẽ giải ngân vốn cho Nhà Sáng tạo để bắt đầu sản xuất." },
        { number: 11, title: "Hoàn thành & Bán", icon: ShoppingBag, content: "Sản phẩm hoàn thành được gắn mã QR, cập nhật lên hệ thống và bán ra. Lợi nhuận được chuyển vào hệ thống." },
    ];

    return (
        <section id="full-process" className="py-20 bg-gray-50/50">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-barlow font-bold text-[var(--color-primary)] uppercase animate-on-scroll">QUY TRÌNH THAM GIA NỀN TẢNG</h2>
                <p className="mt-4 max-w-3xl mx-auto text-[var(--color-secondary)] animate-on-scroll delay-1">Hành trình tuần hoàn của một món đồ cũ, từ khi được đóng góp đến khi trở thành sản phẩm mới.</p>
                
                <div className="mt-16 relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
                    
                    {steps.map((step, index) => (
                        <StepCard 
                            key={step.number}
                            number={step.number}
                            title={step.title}
                            content={step.content}
                            icon={step.icon}
                            side={index % 2 === 0 ? 'right' : 'left'}
                            delay={1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};