import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CreatorWallet = () => (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Ví & Doanh thu</h2>
            <Button>Rút tiền</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-base font-medium text-gray-500">Tổng Doanh thu</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold text-orange-600">1.250.000 đ</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base font-medium text-gray-500">Số dư Khả dụng</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold text-green-600">850.000 đ</p>
                </CardContent>
            </Card>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Lịch sử Giao dịch</CardTitle>
            </CardHeader>
            <CardContent>
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                        <tr>
                            <th className="px-6 py-3">Ngày</th>
                            <th className="px-6 py-3">Chi tiết</th>
                            <th className="px-6 py-3">Số tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="px-6 py-4">16/10/2025</td>
                            <td className="px-6 py-4">Bán sản phẩm "Túi Tote Jeans"</td>
                            <td className="px-6 py-4 text-green-600 font-semibold">+450.000đ</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4">15/10/2025</td>
                            <td className="px-6 py-4">Giải ngân vốn dự án "BST Túi Tote"</td>
                            <td className="px-6 py-4 text-blue-600 font-semibold">+10.000.000đ</td>
                        </tr>
                         <tr className="border-b">
                            <td className="px-6 py-4">14/10/2025</td>
                            <td className="px-6 py-4">Rút tiền về tài khoản ngân hàng</td>
                            <td className="px-6 py-4 text-red-600 font-semibold">-5.000.000đ</td>
                        </tr>
                    </tbody>
                </table>
            </CardContent>
        </Card>
    </div>
);

export default CreatorWallet;