import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export const JoinUsSection = () => {
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Sending data as a single JSON object
        const data = {
            phone: phone,
            role: role,
        };

        try {
            const response = await fetch('https://n8n.probase.tech/webhook/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast({
                    title: "Thành công!",
                    description: "Thông tin của bạn đã được gửi đi.",
                });
                setPhone('');
                setRole('');
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Failed to submit form:', error);
            toast({
                title: "Có lỗi xảy ra!",
                description: "Không thể gửi thông tin. Vui lòng thử lại sau.",
                variant: "destructive",
            });
        }
    };

    return (
        <section id="contact" className="py-20 bg-[var(--color-accent)]">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl md:text-4xl font-barlow font-bold text-center text-[var(--color-primary)] uppercase animate-on-scroll">THAM GIA CÙNG CÒN NÉT GEN</h2>
                <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
                    <div id="canhan" className="bg-[var(--color-primary)] text-white p-8 rounded-lg animate-on-scroll delay-1">
                        <h3 className="text-2xl font-barlow font-semibold">BẠN LÀ CÁ NHÂN?</h3>
                        <p className="mt-2">Chỉ với 3 bước đơn giản, bạn đã có thể tạo ra tác động lớn:</p>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-start space-x-4"><div className="font-bold text-lg bg-white/20 rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div><p>Thu gom quần áo không còn sử dụng.</p></div>
                            <div className="flex items-start space-x-4"><div className="font-bold text-lg bg-white/20 rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div><p>Phân loại thành 2 nhóm: còn tốt và đã hỏng.</p></div>
                            <div className="flex items-start space-x-4"><div className="font-bold text-lg bg-white/20 rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div><p>Gửi đến điểm thu gom của chúng tôi theo quy trình nhé.</p></div>
                        </div>
                    </div>
                    <div id="doanhnghiep" className="bg-white p-8 rounded-lg animate-on-scroll delay-2 custom-shadow">
                        <h3 className="text-2xl font-barlow font-bold text-[var(--color-primary)]">BẠN LÀ DOANH NGHIỆP HAY NHÀ ĐẦU TƯ?</h3>
                        <p className="mt-2 text-[var(--color-secondary)]">Hãy cùng chúng tôi lan tỏa sứ mệnh bền vững. Điền thông tin để nhận tư vấn hợp tác.</p>
                        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                            <input type="tel" placeholder="Số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none" />
                            <select value={role} onChange={(e) => setRole(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none">
                                <option value="">Bạn là...</option>
                                <option value="nhasangtao">Nhà Sáng Tạo / Doanh Nghiệp</option>
                                <option value="nhadautu">Nhà Đầu Tư</option>
                                <option value="doitac">Đối Tác Tiềm Năng</option>
                            </select>
                            <button type="submit" className="w-full bg-[var(--color-primary)] text-white font-bold py-3 rounded-full hover:bg-primary-hover transition-colors">GỬI YÊU CẦU</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};