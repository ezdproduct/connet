import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, UploadCloud } from 'lucide-react';

const AddProduct = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/app/creator/submission-success');
    };

    return (
        <div className="max-w-2xl mx-auto">
            <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quay lại
            </Button>
            <h2 className="text-3xl font-bold mb-6">Đăng bán Sản phẩm Mới</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <Label htmlFor="product-name">Tên sản phẩm</Label>
                    <Input id="product-name" placeholder="Ví dụ: Túi Tote Jeans Tái chế" className="mt-1" />
                </div>
                <div>
                    <Label htmlFor="description">Mô tả</Label>
                    <Textarea id="description" placeholder="Kể về câu chuyện, vật liệu, và điểm đặc biệt của sản phẩm..." className="mt-1" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="price">Giá bán (VNĐ)</Label>
                        <Input id="price" type="number" placeholder="Ví dụ: 450000" className="mt-1" />
                    </div>
                    <div>
                        <Label htmlFor="quantity">Số lượng</Label>
                        <Input id="quantity" type="number" placeholder="Ví dụ: 10" className="mt-1" />
                    </div>
                </div>
                <div>
                    <Label>Hình ảnh</Label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                            <p className="text-sm text-gray-600">Nhấn để tải ảnh lên</p>
                        </div>
                    </div>
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Gửi đi
                </Button>
            </form>
        </div>
    );
};

export default AddProduct;