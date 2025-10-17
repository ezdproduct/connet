import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';

const CreatorDashboard = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Chào mừng trở lại!</h2>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base font-medium text-gray-500">Tổng Doanh thu</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-orange-600">1.250.000 đ</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base font-medium text-gray-500">Dự án Đang hoạt động</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">2</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base font-medium text-gray-500">Sản phẩm Đang bán</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">1</p>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Tạo Dự án Mới</CardTitle>
                        <Button size="icon" variant="ghost" onClick={() => navigate('/app/creator/create-project')}><Plus className="w-5 h-5" /></Button>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-600">Kêu gọi vốn từ cộng đồng để biến những ý tưởng tái chế lớn lao thành hiện thực.</p>
                    </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Đăng bán Sản phẩm</CardTitle>
                        <Button size="icon" variant="ghost" onClick={() => navigate('/app/creator/add-product')}><Plus className="w-5 h-5" /></Button>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-600">Đưa những sản phẩm tái chế độc đáo của bạn đến với cộng đồng người dùng bền vững.</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <Card>
                <CardHeader>
                    <CardTitle>Hoạt động Gần đây</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <p className="text-sm"><span className="font-semibold">Nhà đầu tư An Nguyễn</span> đã đầu tư vào dự án "Áo Khoác Patchwork".</p>
                            <span className="text-xs text-gray-500 ml-auto">5 phút trước</span>
                        </div>
                        <div className="flex items-center">
                            <p className="text-sm">Sản phẩm <span className="font-semibold">"Túi Tote Jeans"</span> đã được bán.</p>
                            <span className="text-xs text-gray-500 ml-auto">2 giờ trước</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreatorDashboard;