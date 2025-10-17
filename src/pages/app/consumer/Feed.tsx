import React from 'react';
import { Icon } from '@/components/Icons';
import { ICONS } from '../../../config/roles';

const ConsumerFeed = () => (
    <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
            <div className="bg-white p-5 rounded-xl border shadow-sm">
                <div className="flex items-start">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full object-cover"/>
                    <textarea placeholder="Hôm nay bạn 'xanh' thế nào, An ơi?" className="flex-1 ml-4 p-2 border-none focus:ring-0 text-sm bg-gray-50 rounded-lg" rows={2}></textarea>
                </div>
                <div className="flex justify-end items-center mt-3">
                    <button className="text-gray-500 hover:text-green-600 p-2 rounded-full"><Icon path={ICONS.image}/></button>
                    <button className="bg-green-500 text-white font-semibold text-sm px-5 py-2 rounded-lg hover:bg-green-600 transition ml-2">Đăng bài</button>
                </div>
            </div>
            <div className="bg-white rounded-xl border shadow-sm">
                <div className="p-5">
                    <div className="flex items-center mb-3">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Minh Avatar" className="w-10 h-10 rounded-full object-cover"/>
                        <div className="ml-3">
                            <p className="font-semibold text-sm">NTK Minh</p>
                            <p className="text-xs text-gray-500">2 giờ trước</p>
                        </div>
                    </div>
                    <p className="text-sm mb-3">Vừa hoàn thành xong một chiếc ví từ vải dù cũ. Tái chế không chỉ là xu hướng, mà là một hành động có ý nghĩa! 💚 #taiche #connetgen</p>
                    <img src="https://images.unsplash.com/photo-1621397640536-94c39a40ed17?q=80&w=800&auto=format&fit=crop" className="rounded-lg w-full"/>
                </div>
                <div className="flex justify-around border-t border-gray-100 py-1">
                    <button className="flex items-center text-sm text-gray-500 hover:text-green-600 p-2 rounded-lg"><Icon path={ICONS.like} className="mr-1"/> 12 Thích</button>
                    <button className="flex items-center text-sm text-gray-500 hover:text-green-600 p-2 rounded-lg"><Icon path={ICONS.comment} className="mr-1"/> 3 Bình luận</button>
                </div>
            </div>
        </div>
        <div className="col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="font-bold text-lg mb-4">Thử thách Xanh</h3>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-green-800">Thứ Hai F5 Đồ</p>
                    <p className="text-sm text-green-700 mt-1">Chia sẻ cách bạn làm mới một món đồ cũ và nhận ngay 20 Cò Coin!</p>
                    <button className="mt-3 bg-white text-green-600 border border-green-200 text-xs font-bold px-3 py-1 rounded-full hover:bg-green-100">Tham gia</button>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="font-bold text-lg mb-4">Sản phẩm nổi bật</h3>
                <div className="flex items-center space-x-4">
                    <img src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=200&auto=format&fit=crop" className="w-20 h-20 rounded-md object-cover"/>
                    <div>
                        <p className="font-semibold text-sm">Túi Tote từ Jeans cũ</p>
                        <p className="text-xs text-gray-500">bởi NTK An An</p>
                        <p className="font-bold text-blue-600 mt-1">450.000 đ</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ConsumerFeed;