import React from 'react';
import { Gift, Zap, ShoppingCart } from 'lucide-react';

export const CoCoinSection = () => (
    <section id="coin" className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-barlow font-bold text-[var(--color-primary)] uppercase animate-on-scroll">CÒ COIN: ĐIỂM THƯỞNG XANH CỦA BẠN</h2>
                <p className="mt-4 max-w-3xl mx-auto text-[var(--color-secondary)] animate-on-scroll delay-1">
                    Lời cảm ơn dành cho mỗi đóng góp của bạn, biến mỗi hành động bảo vệ môi trường trở nên vui vẻ và có ý nghĩa hơn.
                </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1: What is Co Coin? */}
                <div className="bg-white p-8 rounded-lg custom-shadow animate-on-scroll delay-1">
                    <Gift className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                    <h3 className="font-barlow font-bold text-2xl text-[var(--color-secondary)]">1. Cò Coin là gì?</h3>
                    <p className="mt-4 text-gray-600">
                        Hãy tưởng tượng Cò Coin giống như điểm thưởng thành viên ở quán cafe quen thuộc. Nó là một loại điểm thưởng bạn nhận được khi thực hiện các hành động "xanh".
                    </p>
                    <p className="mt-2 text-gray-600">
                        Nó <strong>KHÔNG PHẢI</strong> là tiền ảo để đầu tư. Cò Coin chỉ có giá trị sử dụng bên trong hệ sinh thái của Còn Nét Gen.
                    </p>
                </div>

                {/* Card 2: How to earn? */}
                <div className="bg-white p-8 rounded-lg custom-shadow animate-on-scroll delay-2">
                    <Zap className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                    <h3 className="font-barlow font-bold text-2xl text-[var(--color-secondary)]">2. Làm thế nào để có Cò Coin?</h3>
                    <div className="mt-4 space-y-4 text-gray-600">
                        <div>
                            <h4 className="font-semibold text-gray-800">Cách 1: Dọn tủ đồ, nhận Cò Coin</h4>
                            <p className="text-sm">Mang quần áo cũ đến các điểm thu gom để nhận Cò Coin tương ứng vào ví.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">Cách 2: Mua sắm xanh, tích thêm Coin</h4>
                            <p className="text-sm">Mua sản phẩm tái chế trên nền tảng và được "hoàn" lại một lượng Cò Coin.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">Cách 3: Lan tỏa thông điệp, rinh ngàn Coin</h4>
                            <p className="text-sm">Tham gia các thử thách, viết review, chia sẻ bài viết để nhận thưởng.</p>
                        </div>
                    </div>
                </div>

                {/* Card 3: How to use? */}
                <div className="bg-white p-8 rounded-lg custom-shadow animate-on-scroll delay-3">
                    <ShoppingCart className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                    <h3 className="font-barlow font-bold text-2xl text-[var(--color-secondary)]">3. Có Cò Coin rồi, dùng để làm gì?</h3>
                    <div className="mt-4 space-y-4 text-gray-600">
                        <div>
                            <h4 className="font-semibold text-gray-800">Giảm giá trực tiếp khi mua sắm</h4>
                            <p className="text-sm">Dùng Cò Coin để được giảm giá thẳng vào đơn hàng cho các sản phẩm tái chế.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">Đổi lấy voucher từ các đối tác</h4>
                            <p className="text-sm">Dùng Cò Coin để đổi lấy những voucher ưu đãi hấp dẫn từ các thương hiệu lifestyle xanh.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);