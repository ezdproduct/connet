import React, { useState } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import { CheckCircle2 } from 'lucide-react';

const TaskCard = ({ title, description, reward, onComplete }: { title: string, description: string, reward: number, onComplete: () => void }) => (
    <button onClick={onComplete} className="w-full text-left bg-white p-6 rounded-2xl border shadow-sm hover:border-green-500 hover:shadow-lg transition-all duration-300 flex justify-between items-center">
        <div>
            <h3 className="font-bold text-lg text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        <p className="font-bold text-2xl text-green-600">+{reward} <span className="text-lg">Cò</span></p>
    </button>
);

const ConsumerEarnCoin = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleTaskComplete = () => {
        setShowSuccess(true);
    };

    return (
        <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Kiếm Cò Coin</h2>
            <div className="space-y-4">
                <TaskCard 
                    title="Quyên góp đồ cũ"
                    description="Biến đồ không dùng thành tài nguyên"
                    reward={50}
                    onComplete={handleTaskComplete}
                />
                <TaskCard 
                    title="Viết review sản phẩm"
                    description="Chia sẻ trải nghiệm của bạn"
                    reward={10}
                    onComplete={handleTaskComplete}
                />
            </div>

            <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
                <AlertDialogContent className="max-w-sm text-center">
                    <AlertDialogHeader>
                        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-4">
                             <div className="flex items-center justify-center w-16 h-16 bg-green-200 rounded-full">
                                <span className="text-2xl font-bold text-green-700">Cò</span>
                            </div>
                        </div>
                        <AlertDialogTitle className="text-2xl font-bold">Quyên góp thành công!</AlertDialogTitle>
                        <AlertDialogDescription className="text-base">
                            Bạn đã nhận được 50 Cò Coin. Cảm ơn hành động đẹp của bạn!
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogAction onClick={() => setShowSuccess(false)} className="w-full bg-green-600 hover:bg-green-700">
                        Tuyệt vời!
                    </AlertDialogAction>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default ConsumerEarnCoin;