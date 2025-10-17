import React from 'react';
import { CircleDollarSign } from 'lucide-react';

const TransactionItem = ({ description, amount }: { description: string, amount: number }) => (
    <div className="flex justify-between items-center py-4 border-b">
        <p className="text-gray-700">{description}</p>
        <div className="flex items-center space-x-1 font-semibold text-green-600">
            <span>+{amount}</span>
            <CircleDollarSign className="w-4 h-4" />
        </div>
    </div>
);

const ConsumerAccount = () => {
    return (
        <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Tài khoản của bạn</h2>
            
            <div className="bg-white p-8 rounded-2xl border shadow-sm inline-flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                    <CircleDollarSign className="w-12 h-12 text-green-600" />
                </div>
                <p className="text-6xl font-bold text-gray-800">120</p>
                <p className="text-gray-500 mt-1">Số dư Cò Coin</p>
            </div>

            <div className="mt-8 text-left">
                <h3 className="text-xl font-bold mb-2">Lịch sử Cò Coin</h3>
                <div className="bg-white p-6 rounded-2xl border shadow-sm">
                    <TransactionItem description="Thưởng đăng ký" amount={100} />
                    <TransactionItem description="Review sản phẩm" amount={20} />
                </div>
            </div>
        </div>
    );
};

export default ConsumerAccount;