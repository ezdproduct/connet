import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const projects = [
    {
        title: "Áo khoác từ Vải Dù Tái chế",
        author: "bởi NTK Minh",
        imageUrl: "/recycled-fabric-jacket.jpeg",
        raised: 45000000,
        goal: 100000000,
    },
    {
        title: "Giày Sneaker từ Bã Cà Phê",
        author: "bởi The Green Step",
        imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=400&auto=format&fit=crop",
        raised: 160000000,
        goal: 200000000,
    },
    {
        title: "Balo Chống Nước từ Lều Cũ",
        author: "bởi Up-cycle VN",
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb68c6a62?q=80&w=400&auto=format&fit=crop",
        raised: 10000000,
        goal: 50000000,
    },
];

const InvestorMarket = () => (
    <div>
        <h3 className="text-2xl font-bold mb-6">Khám phá Thị trường</h3>
        
        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-xl border shadow-sm flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Select defaultValue="all">
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Danh mục: Tất cả</SelectItem>
                        <SelectItem value="fashion">Thời trang</SelectItem>
                        <SelectItem value="accessories">Phụ kiện</SelectItem>
                    </SelectContent>
                </Select>
                <Select defaultValue="funding">
                    <SelectTrigger className="w-full sm:w-[200px]">
                        <SelectValue placeholder="Trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="funding">Trạng thái: Đang gọi vốn</SelectItem>
                        <SelectItem value="new">Mới ra mắt</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="text-sm text-gray-500 text-left md:text-right">
                Hiển thị {projects.length} trong 12 dự án
            </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden flex flex-col">
                    <CardHeader className="p-0">
                        <ImageWithFallback 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-48 object-cover"
                        />
                    </CardHeader>
                    <CardContent className="p-4 flex-1 flex flex-col">
                        <CardTitle className="text-lg font-bold mb-1">{project.title}</CardTitle>
                        <p className="text-xs text-gray-500 mb-4">{project.author}</p>
                        
                        <div className="mt-auto">
                            <Progress value={(project.raised / project.goal) * 100} className="h-2 mb-2" />
                            <div className="flex justify-between text-xs mb-4">
                                <span className="font-semibold text-blue-700">
                                    {new Intl.NumberFormat('vi-VN').format(project.raised)}đ
                                </span>
                                <span className="text-gray-500">
                                    Mục tiêu: {new Intl.NumberFormat('vi-VN').format(project.goal)}đ
                                </span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                        <Button className="w-full">Xem chi tiết</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    </div>
);

export default InvestorMarket;