import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from 'lucide-react';

const CreatorDashboard = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Bảng điều khiển</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
                <Card>
                    <CardContent className="p-4">
                        <p className="text-sm text-gray-500">Tổng Doanh thu</p>
                        <p className="text-2xl font-bold text-orange-600">1.250.000 đ</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <p className="text-sm text-gray-500">Sản phẩm đã bán</p>
                        <p className="text-2xl font-bold">5</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
                <Button onClick={() => navigate('/app/creator/add-product')} className="bg-orange-100 text-orange-600 hover:bg-orange-200 font-semibold w-full">
                    <Plus className="w-4 h-4 mr-2" /> Thêm Sản phẩm
                </Button>
                <Button onClick={() => navigate('/app/creator/create-project')} className="bg-blue-100 text-blue-600 hover:bg-blue-200 font-semibold w-full">
                    <Plus className="w-4 h-4 mr-2" /> Tạo Dự án
                </Button>
            </div>

            <Tabs defaultValue="projects">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="projects">Dự án Kêu gọi vốn</TabsTrigger>
                    <TabsTrigger value="products">Sản phẩm Tự chủ</TabsTrigger>
                </TabsList>
                <TabsContent value="projects" className="mt-4 space-y-3">
                    <Card>
                        <CardContent className="p-4 flex justify-between items-center">
                            <p className="font-semibold">BST Túi Tote Tái chế</p>
                            <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">Đã gọi vốn xong</span>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardContent className="p-4 flex justify-between items-center">
                            <p className="font-semibold">Áo Khoác Patchwork từ Vải Vụn</p>
                            <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">Đang gọi vốn</span>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="products" className="mt-4 space-y-3">
                    <Card>
                        <CardContent className="p-4 flex justify-between items-center">
                            <p className="font-semibold">Túi Tote Jeans</p>
                            <span className="text-sm text-gray-500">Đang bán</span>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 flex justify-between items-center">
                            <p className="font-semibold">Ví Vải Dù</p>
                            <span className="text-sm text-red-500">Hết hàng</span>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default CreatorDashboard;