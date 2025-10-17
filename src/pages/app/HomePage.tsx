import React from 'react';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[var(--color-primary)]">Chào mừng bạn đã trở lại!</h1>
        <p className="mt-4 text-lg text-gray-600">Đây là trang chủ của bạn sau khi đăng nhập.</p>
      </div>
    </div>
  );
};

export default HomePage;