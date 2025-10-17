import React from 'react';
import { Users, Palette, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageWithFallback } from '../ImageWithFallback';

const RoleCard = ({ title, experience, features, value }: { title: string, experience: string, features: string[], value: string }) => (
  <div className="space-y-6 text-left">
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border animate-in fade-in-0 slide-in-from-left-12 duration-500">
      <h3 className="font-barlow font-bold text-2xl text-[var(--color-primary)]">{title}</h3>
      <p className="text-sm mt-2 text-gray-600">{experience}</p>
    </div>
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border animate-in fade-in-0 slide-in-from-left-12 duration-500 delay-150">
      <h4 className="font-semibold text-gray-800">Bạn có thể:</h4>
      <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-600">
        {features.map((feature, index) => <li key={index}>{feature}</li>)}
      </ul>
    </div>
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border animate-in fade-in-0 slide-in-from-left-12 duration-500 delay-300">
        <p className="font-bold text-sm text-[var(--color-secondary)]">{value}</p>
    </div>
  </div>
);

interface EcosystemSectionProps {
  onRegisterClick: () => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onRegisterClick }) => {
  return (
    <section id="ecosystem" className="py-20 bg-[var(--color-dark-bg)]">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-barlow font-bold text-[var(--color-heading-on-dark)] animate-on-scroll">
          HỆ SINH THÁI VÀ CÁC VAI TRÒ
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-[var(--color-text-on-dark)] animate-on-scroll delay-1">
          Trong hệ sinh thái ConNetGen, mỗi người dùng đều góp phần tạo nên một vòng tròn bền vững — nơi Cò Coin và Chứng chỉ xanh kết nối Cộng đồng, Nhà Sáng tạo, và Nhà Đầu tư thành một chuỗi giá trị liền mạch.
        </p>

        <Tabs defaultValue="community" className="mt-12 w-full animate-on-scroll delay-2">
          <TabsList className="flex items-center justify-center flex-wrap gap-4 md:gap-8 bg-transparent p-0 h-auto">
            <TabsTrigger value="community" className="text-base font-semibold text-gray-300 data-[state=active]:bg-[var(--color-heading-on-dark)] data-[state=active]:text-[var(--color-secondary)] data-[state=active]:shadow-lg rounded-lg px-5 py-2.5 transition-all duration-300">
              <Users className="w-5 h-5 mr-2" /> Cộng đồng
            </TabsTrigger>
            <TabsTrigger value="creator" className="text-base font-semibold text-gray-300 data-[state=active]:bg-[var(--color-heading-on-dark)] data-[state=active]:text-[var(--color-secondary)] data-[state=active]:shadow-lg rounded-lg px-5 py-2.5 transition-all duration-300">
              <Palette className="w-5 h-5 mr-2" /> Nhà Sáng tạo
            </TabsTrigger>
            <TabsTrigger value="investor" className="text-base font-semibold text-gray-300 data-[state=active]:bg-[var(--color-heading-on-dark)] data-[state=active]:text-[var(--color-secondary)] data-[state=active]:shadow-lg rounded-lg px-5 py-2.5 transition-all duration-300">
              <TrendingUp className="w-5 h-5 mr-2" /> Nhà Đầu tư
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-10">
            <TabsContent value="community" className="data-[state=inactive]:hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <RoleCard 
                  title="Cộng đồng & Mua sắm"
                  experience="Tham gia hoạt động, hoàn thành thử thách xanh và tích lũy Cò Coin để mua sắm, đổi quà hoặc ủng hộ các dự án sáng tạo."
                  features={[
                    "Thực hiện thử thách và nhiệm vụ hàng ngày để nhận thưởng.",
                    "Mua sản phẩm tái chế, ủng hộ dự án xanh yêu thích.",
                    "Tương tác, bình chọn và gắn kết cùng nhà sáng tạo."
                  ]}
                  value="Giá trị mang lại: Kiếm điểm – Mua sắm – Chung tay vì một cộng đồng bền vững."
                />
                <ImageWithFallback src="/ecosystem-community.svg" alt="Cộng đồng" className="rounded-2xl w-full h-auto object-cover shadow-xl animate-in fade-in-0 zoom-in-95 duration-500" />
              </div>
            </TabsContent>
            <TabsContent value="creator" className="data-[state=inactive]:hidden">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <RoleCard 
                  title="Nhà Sáng tạo"
                  experience="Tạo sản phẩm, gọi vốn và chia sẻ hành trình sáng tạo cùng cộng đồng. Biến ý tưởng thành hiện thực và xây dựng thương hiệu cá nhân."
                  features={[
                    "Đăng bán sản phẩm tái chế hoặc sáng tạo của riêng mình.",
                    "Tạo dự án kêu gọi vốn và nhận đầu tư bằng Chứng chỉ xanh.",
                    "Quản lý doanh thu, theo dõi tiến độ, tương tác với người ủng hộ."
                  ]}
                  value="Giá trị mang lại: Thương mại hóa sáng tạo – Kết nối cộng đồng – Gọi vốn minh bạch."
                />
                <ImageWithFallback src="/ecosystem-creator.svg" alt="Nhà Sáng tạo" className="rounded-2xl w-full h-auto object-cover shadow-xl animate-in fade-in-0 zoom-in-95 duration-500" />
              </div>
            </TabsContent>
            <TabsContent value="investor" className="data-[state=inactive]:hidden">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <RoleCard 
                  title="Nhà Đầu tư"
                  experience="Khám phá, đầu tư và theo dõi lợi nhuận trong hệ sinh thái bền vững. Đầu tư không chỉ vì lợi nhuận mà còn vì tác động tích cực đến xã hội."
                  features={[
                    "Duyệt dự án tiềm năng, đầu tư bằng Chứng chỉ xanh.",
                    "Theo dõi hiệu quả, lợi nhuận và tiến độ phát triển dự án.",
                    "Quản lý danh mục, rút vốn, xuất báo cáo đầu tư minh bạch."
                  ]}
                  value="Giá trị mang lại: Lợi nhuận bền vững – Tác động thật – Đầu tư cho tương lai xanh."
                />
                <ImageWithFallback src="/ecosystem-investor.svg" alt="Nhà Đầu tư" className="rounded-2xl w-full h-auto object-cover shadow-xl animate-in fade-in-0 zoom-in-95 duration-500" />
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <div className="mt-20 animate-on-scroll">
          <p className="text-xl font-bold text-[var(--color-text-on-dark)]">🌍 Chọn vai trò của bạn và bắt đầu hành trình cùng ConNetGen!</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button onClick={onRegisterClick} className="bg-[var(--color-heading-on-dark)] text-[var(--color-secondary)] hover:bg-yellow-400 transition-transform hover:scale-105">
              Tham Gia Cộng Đồng
            </Button>
            <Button onClick={onRegisterClick} variant="outline" className="border-[var(--color-heading-on-dark)] text-[var(--color-heading-on-dark)] hover:bg-white/10 hover:text-[var(--color-heading-on-dark)] transition-transform hover:scale-105">
              Tạo Dự Án
            </Button>
            <Button onClick={onRegisterClick} variant="outline" className="border-[var(--color-heading-on-dark)] text-[var(--color-heading-on-dark)] hover:bg-white/10 hover:text-[var(--color-heading-on-dark)] transition-transform hover:scale-105">
              Khám Phá Đầu Tư
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};