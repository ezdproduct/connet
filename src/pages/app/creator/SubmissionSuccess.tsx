import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const SubmissionSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
            <h2 className="text-3xl font-bold mb-2">Gửi thành công!</h2>
            <p className="text-gray-600 max-w-sm mb-8">
                Chúng tôi sẽ xem xét và phản hồi bạn trong thời gian sớm nhất.
            </p>
            <Button 
                onClick={() => navigate('/app/creator/dashboard')}
                className="bg-orange-500 hover:bg-orange-600 text-white"
            >
                Về Dashboard
            </Button>
        </div>
    );
};

export default SubmissionSuccess;