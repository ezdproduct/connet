import React from 'react';

export const CommunityStorySection = () => (
    <section id="community" className="py-20">
         <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-barlow font-bold text-[var(--color-primary)] uppercase animate-on-scroll">Câu Chuyện Cộng Đồng</h2>
            <p className="mt-4 max-w-2xl mx-auto text-[var(--color-secondary)] animate-on-scroll delay-1">Xem những câu chuyện truyền cảm hứng từ cộng đồng CÒN NÉT GEN.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Video 1 */}
                <div className="animate-on-scroll delay-1 aspect-[9/16] w-full">
                    <iframe 
                        src="https://www.tiktok.com/embed/v2/7543632161379781895" 
                        className="w-full h-full rounded-lg custom-shadow"
                        frameBorder="0"
                        allowFullScreen
                        allow="encrypted-media;"
                        title="TikTok Video 1"
                        scrolling="no"
                        style={{ overflow: 'hidden' }}
                    ></iframe>
                </div>
                {/* Video 2 */}
                <div className="animate-on-scroll delay-2 aspect-[9/16] w-full">
                    <iframe 
                        src="https://www.tiktok.com/embed/v2/7543860236608720135" 
                        className="w-full h-full rounded-lg custom-shadow"
                        frameBorder="0"
                        allowFullScreen
                        allow="encrypted-media;"
                        title="TikTok Video 2"
                        scrolling="no"
                        style={{ overflow: 'hidden' }}
                    ></iframe>
                </div>
                {/* Video 3 */}
                <div className="animate-on-scroll delay-3 aspect-[9/16] w-full">
                    <iframe 
                        src="https://www.tiktok.com/embed/v2/7546555095865986312" 
                        className="w-full h-full rounded-lg custom-shadow"
                        frameBorder="0"
                        allowFullScreen
                        allow="encrypted-media;"
                        title="TikTok Video 3"
                        scrolling="no"
                        style={{ overflow: 'hidden' }}
                    ></iframe>
                </div>
            </div>
        </div>
    </section>
);