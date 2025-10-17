import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';

const CreatorProjects = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Dự án Kêu gọi vốn</h2>
                <Button onClick={() => navigate('/app/creator/create-project')}>
                    <Plus className="w-4 h-4 mr-2" /> Tạo Dự án mới
                </Button>
            </div>
            <div className="space-y-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <p className="font-semibold">BST Túi Tote Tái chế</p>
                            <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">Đã gọi vốn xong</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{width: '100%'}}></div>
                        </div>
                        <div className="flex justify-between text-xs mt-2">
                            <span className="font-semibold text-gray-700">10.000.000 / 10.000.000 đ</span>
                            <span className="text-gray-500">15 nhà đầu tư</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <p className="font-semibold">Áo Khoác Patchwork từ Vải Vụn</p>
                            <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">Đang gọi vốn</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '45%'}}></div>
                        </div>
                        <div className="flex justify-between text-xs mt-2">
                            <span className="font-semibold text-gray-700">4.500.000 / 10.000.000 đ</span>
                            <span className="text-gray-500">8 nhà đầu tư</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CreatorProjects;