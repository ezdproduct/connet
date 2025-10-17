import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';

const CreatorProducts = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Sản phẩm của bạn</h2>
                <Button onClick={() => navigate('/app/creator/add-product')} className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Plus className="w-4 h-4 mr-2" /> Thêm Sản phẩm
                </Button>
            </div>
            <div className="space-y-4">
                <Card>
                    <CardContent className="p-4 flex justify-between items-center">
                        <div>
                            <p className="font-semibold">Túi Tote Jeans</p>
                            <p className="text-sm text-gray-500">Giá: 450.000 đ - Tồn kho: 8</p>
                        </div>
                        <span className="text-sm font-semibold text-green-600">Đang bán</span>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4 flex justify-between items-center">
                        <div>
                            <p className="font-semibold">Ví Vải Dù</p>
                            <p className="text-sm text-gray-500">Giá: 250.000 đ - Tồn kho: 0</p>
                        </div>
                        <span className="text-sm font-semibold text-red-600">Hết hàng</span>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CreatorProducts;