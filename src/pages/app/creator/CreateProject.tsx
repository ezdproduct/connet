import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';

const CreateProject = () => {
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
            <h2 className="text-3xl font-bold mb-6">Tạo Dự án Kêu gọi vốn</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <Label htmlFor="project-name">Tên dự án</Label>
                    <Input id="project-name" placeholder="Ví dụ: BST Váy từ Áo Sơ mi cũ" className="mt-1" />
                </div>
                <div>
                    <Label htmlFor="story">Câu chuyện dự án</Label>
                    <Textarea id="story" placeholder="Kể về nguồn cảm hứng, tác động bạn muốn tạo ra..." className="mt-1" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="goal">Mục tiêu vốn (VNĐ)</Label>
                        <Input id="goal" type="number" placeholder="Ví dụ: 15000000" className="mt-1" />
                    </div>
                    <div>
                        <Label htmlFor="profit-share">Chia sẻ lợi nhuận (%)</Label>
                        <Input id="profit-share" type="number" placeholder="Ví dụ: 30" className="mt-1" />
                    </div>
                </div>
                <Button type="submit" className="w-full">
                    Gửi dự án để duyệt
                </Button>
            </form>
        </div>
    );
};

export default CreateProject;