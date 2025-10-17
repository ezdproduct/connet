import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Header } from '../../components/Header';
import { MobileMenu } from '../../components/MobileMenu';
import { Modal } from '../../components/Modal';
import { HeroSection } from '../../components/landing/HeroSection';
import { AboutSection } from '../../components/landing/AboutSection';
import { CollageSection } from '../../components/landing/CollageSection';
import { EcosystemSection } from '../../components/landing/EcosystemSection';
import { BlockchainSection } from '../../components/landing/BlockchainSection';
import { InvestmentSection } from '../../components/landing/InvestmentSection';
import { CoCoinSection } from '../../components/landing/CoCoinSection';
import { FastFashionSection } from '../../components/landing/FastFashionSection';
import { ProcessSection } from '../../components/landing/ProcessSection';
import { FullProcessSection } from '../../components/landing/FullProcessSection';
import { CommunityStorySection } from '../../components/landing/CommunityStorySection';
import { JoinUsSection } from '../../components/landing/JoinUsSection';
import { FaqSection } from '../../components/landing/FaqSection';
import { Footer } from '../../components/Footer';
import { Chatbot } from '../../components/Chatbot';
import { ImageWithFallback } from '../../components/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { ROLES_CONFIG } from '@/config/roles';

const LandingPage = () => {
    // Kích hoạt hook để tạo hiệu ứng hoạt ảnh khi cuộn trang
    useScrollAnimation();
    const navigate = useNavigate();

    // State quản lý việc hiển thị menu trên di động
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State quản lý modal nào đang được hiển thị (ví dụ: 'register', 'reshare')
    const [activeModal, setActiveModal] = useState<string | null>(null);

    // State cho form đăng ký trong modal
    const [selectedRole, setSelectedRole] = useState('Cộng đồng');
    const [phone, setPhone] = useState('');
    const { toast } = useToast();

    // Effect để ngăn cuộn trang khi menu hoặc modal đang mở
    useEffect(() => {
        document.body.style.overflow = isMenuOpen || activeModal ? 'hidden' : 'auto';
    }, [isMenuOpen, activeModal]);

    // Hàm để bật/tắt modal
    const handleToggleModal = (modalId: string) => {
        setActiveModal(prev => (prev === modalId ? null : modalId));
    };

    /**
     * Xử lý việc gửi form đăng ký.
     * Chuyển hướng người dùng vào app ngay lập tức để có trải nghiệm mượt mà.
     * Việc gửi dữ liệu đến webhook được thực hiện ngầm ở chế độ nền.
     */
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // 1. Xác định vai trò và đường dẫn đích
        const roleKeyMap: { [key: string]: keyof typeof ROLES_CONFIG } = {
            'Cộng đồng': 'consumer',
            'Nhà Sáng tạo': 'creator',
            'Nhà Đầu tư': 'investor',
        };
        const roleKey = roleKeyMap[selectedRole] || 'consumer';
        
        // 2. Lưu vai trò đã chọn vào sessionStorage để AppLayout có thể truy cập
        sessionStorage.setItem('selectedRole', roleKey);

        // 3. Điều hướng người dùng đến trang Bảng tin cộng đồng
        navigate('/app/consumer/feed');
        toast({ title: "Đăng ký thành công!", description: "Chào mừng bạn đến với CÒN NÉT GEN." });

        // 4. Chuẩn bị dữ liệu và danh sách webhook
        const roleValueMap: { [key: string]: string } = {
          'Cộng đồng': 'congdong',
          'Nhà Sáng tạo': 'nhasangtao',
          'Nhà Đầu tư': 'nhadautu',
        };
        const data = { phone, role: roleValueMap[selectedRole] || 'khac' };
        const webhookUrls = [
            'https://n8n.probase.tech/webhook/lead',
            'https://n8n.probase.tech/webhook-test/lead'
        ];

        // 5. Gửi yêu cầu đến từng webhook trong danh sách ở chế độ nền
        webhookUrls.forEach(url => {
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (!response.ok) {
                    console.error(`Webhook to ${url} failed:`, response.statusText);
                }
            })
            .catch(error => {
                console.error(`Failed to send webhook to ${url}:`, error);
            });
        });
    };

    return (
        <div>
            <Header onMenuClick={() => setIsMenuOpen(true)} onRegisterClick={() => handleToggleModal('register')} />
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onRegisterClick={() => handleToggleModal('register')} />
            
            <main>
                <HeroSection onRegisterClick={() => handleToggleModal('register')} />
                <FastFashionSection />
                <AboutSection />
                <CollageSection />
                <EcosystemSection onRegisterClick={() => handleToggleModal('register')} />
                <BlockchainSection />
                <InvestmentSection onRegisterClick={() => handleToggleModal('register')} />
                <ProcessSection onModalClick={handleToggleModal} />
                <CoCoinSection />
                <FullProcessSection />
                <CommunityStorySection />
                <JoinUsSection />
                <FaqSection />
            </main>

            <Footer />
            
            {/* Modal Đăng ký */}
            <Modal id="register-modal" isOpen={activeModal === 'register'} onClose={() => handleToggleModal('register')}>
                <div className="p-8">
                    <h3 className="text-2xl font-barlow font-bold text-[var(--color-primary)] text-center">THAM GIA CÙNG CÒN NÉT GEN</h3>
                    <p className="mt-2 text-center text-[var(--color-secondary)] text-sm">Hãy cùng chúng tôi lan tỏa sứ mệnh bền vững.</p>
                    
                    <div className="my-6 flex flex-wrap justify-center gap-2">
                        <Button onClick={() => setSelectedRole('Cộng đồng')} className={cn('transition-all', selectedRole === 'Cộng đồng' ? 'bg-[var(--color-primary)] text-white' : 'bg-white text-[var(--color-primary)] border border-[var(--color-primary)]')}>Cộng đồng</Button>
                        <Button onClick={() => setSelectedRole('Nhà Sáng tạo')} className={cn('transition-all', selectedRole === 'Nhà Sáng tạo' ? 'bg-[var(--color-primary)] text-white' : 'bg-white text-[var(--color-primary)] border border-[var(--color-primary)]')}>Nhà Sáng tạo</Button>
                        <Button onClick={() => setSelectedRole('Nhà Đầu tư')} className={cn('transition-all', selectedRole === 'Nhà Đầu tư' ? 'bg-[var(--color-primary)] text-white' : 'bg-white text-[var(--color-primary)] border border-[var(--color-primary)]')}>Nhà Đầu tư</Button>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        <input type="tel" placeholder="Số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none" />
                        <button type="submit" className="w-full bg-[var(--color-primary)] text-white font-bold py-3 rounded-full hover:bg-primary-hover transition-colors">GỬI YÊU CẦU</button>
                    </form>
                </div>
            </Modal>

            {/* Các Modals khác */}
            <Modal id="reshare-modal" isOpen={activeModal === 'reshare'} onClose={() => handleToggleModal('reshare')}>
                <div className="p-6">
                    <h2 className="text-4xl font-barlow font-bold text-[var(--color-primary)] text-center">Reshare</h2>
                    <p className="mt-4 text-center">Quần áo cũ được trao tặng cho các tổ chức xã hội, giúp kéo dài vòng đời sản phẩm</p>
                    <p className="mt-4 font-bold">✅ Quần áo vẫn còn trong tình trạng rất tốt</p>
                    <p className="font-bold">✅ Không sờn, rách, không ố vàng.</p>
                    <p className="font-bold">✅ Khóa kéo, nút áo vẫn còn tốt.</p>
                </div>
                <ImageWithFallback src="https://w.ladicdn.com/s500x450/5f7590f2fb063a1cb1d71c99/ao5x-20250815094609-k6ip-.png" className="absolute bottom-0 right-0 w-32 -mb-4 -mr-4 opacity-50" alt="" />
            </Modal>
             <Modal id="recycle-modal" isOpen={activeModal === 'recycle'} onClose={() => handleToggleModal('recycle')}>
                <div className="p-6">
                    <h2 className="text-4xl font-barlow font-bold text-[var(--color-primary)] text-center">Recycle</h2>
                    <p className="mt-4 text-center">Quần áo cũ được mang đến nhà máy tái chế thành các sản phẩm hữu ích.</p>
                    <p className="mt-4 font-bold">✅ Đồng phục cũ có logo công ty.</p>
                    <p className="font-bold">✅ Vải đã quá cũ, sờn. Có vết ố lớn.</p>
                    <p className="font-bold">✅ Bị rách ở những vị trí khó sửa hoặc rách quá to.</p>
                </div>
                 <ImageWithFallback src="https://w.ladicdn.com/s500x450/5f7590f2fb063a1cb1d71c99/ao5x-20250815094609-k6ip-.png" className="absolute bottom-0 right-0 w-32 -mb-4 -mr-4 opacity-50" alt="" />
            </Modal>
            <Modal id="namphong-modal" isOpen={activeModal === 'namphong'} onClose={() => handleToggleModal('namphong')}>
                 <ImageWithFallback src="https://w.ladicdn.com/s750x700/5f7590f2fb063a1cb1d71c99/tri-an-su-hop-tac-du-an-tai-sinh-dong-phuc-cu-20250822075950-awqol.jpg" className="w-full h-48 object-cover" alt="" />
                <div className="p-6">
                    <h2 className="text-3xl font-barlow font-bold text-[var(--color-primary)]">Nam Phong Industry</h2>
                    <h3 className="text-xl font-semibold text-gray-600">Đối tác tái chế chiến lược</h3>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><span className="font-bold">✅ 17+ năm kinh nghiệm</span> tái chế phế liệu & dệt may.</li>
                        <li><span className="font-bold">✅ Khả năng xử lý</span> 3.500 tấn/tháng vải vụn & sợi.</li>
                        <li><span className="font-bold">✅ Quy trình tái chế chuyên sâu:</span> Xử lý được nhiều loại quần áo.</li>
                        <li><span className="font-bold">✅ Cam kết 5R:</span> Research – Reuse – Renew – Reduce – Recycle.</li>
                    </ul>
                </div>
            </Modal>

            <Chatbot />
        </div>
    );
};

export default LandingPage;