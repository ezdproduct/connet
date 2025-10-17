import React from 'react';
import ChartComponent from '@/components/Chart';

// Component Icon để render SVG
const Icon = ({ path, className = "w-5 h-5" }: { path: string, className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: path }}></svg>
);

// Component thẻ hiển thị chỉ số tác động
const ImpactCard = ({ iconPath, value, label, colorClasses }: { iconPath: string, value: string, label: string, colorClasses: string }) => (
    <div className={`p-6 rounded-2xl shadow-lg flex items-center space-x-4 ${colorClasses}`}>
        <div className="p-3 bg-white/20 rounded-full">
            <Icon path={iconPath} className="w-8 h-8" />
        </div>
        <div>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-sm font-medium opacity-90">{label}</p>
        </div>
    </div>
);

// Biểu tượng SVG mới, đẹp hơn
const ICONS = {
    leaf: '<path d="M11 20A7 7 0 0 1 4 13V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a7 7 0 0 1-7 7h-1z" />',
    water: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />',
    co2: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />',
};

const InvestorDashboard = () => {
    return (
        <div>
            {/* --- Dấu ấn Bền vững Section --- */}
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Dấu ấn Bền vững của bạn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ImpactCard 
                        iconPath={ICONS.leaf}
                        value="5 kg"
                        label="Vật liệu được Tái sinh"
                        colorClasses="bg-green-500 text-white"
                    />
                    <ImpactCard 
                        iconPath={ICONS.water}
                        value="13,500 Lít"
                        label="Nước được Tiết kiệm"
                        colorClasses="bg-blue-500 text-white"
                    />
                    <ImpactCard 
                        iconPath={ICONS.co2}
                        value="25 kg"
                        label="Khí CO2 được Giảm thiểu"
                        colorClasses="bg-slate-500 text-white"
                    />
                </div>
            </div>

            {/* --- Phần còn lại của Dashboard --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <h3 className="font-bold text-lg mb-4">Tổng quan Tài sản</h3>
                        <div className="flex flex-col md:flex-row items-start justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Tổng Giá trị Danh mục</p>
                                <p className="text-4xl font-bold text-gray-900 mt-1">50.500.000 VNĐ</p>
                            </div>
                            <div className="w-40 h-40 mt-4 md:mt-0">
                                <ChartComponent id="investor-doughnut" type="doughnut" data={{ labels: ['Chứng chỉ xanh đang Stake', 'Chứng chỉ xanh có sẵn'], datasets: [{ data: [3500, 1500], backgroundColor: ['#007BFF', '#28A745'], borderWidth: 0, hoverOffset: 4 }] }} options={{ responsive: true, maintainAspectRatio: false, cutout: '75%', plugins: { legend: { display: true, position: 'bottom', labels: { boxWidth: 12, padding: 15, font: { size: 10 } } } } }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <h3 className="font-bold text-lg mb-4">Danh mục Đầu tư</h3>
                        <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="font-semibold text-sm">BST Túi Tote Tái chế</p>
                                <p className="text-xs text-gray-500 mt-1">Trạng thái: <span className="font-semibold text-yellow-600">Đang sản xuất</span></p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="font-semibold text-sm">Dự án Áo Khoác Patchwork</p>
                                <p className="text-xs text-gray-500 mt-1">Trạng thái: <span className="font-semibold text-green-600">Đã hoàn thành</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestorDashboard;