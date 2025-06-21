
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, MessageCircle, Instagram, Twitter } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 text-white relative overflow-hidden">
      {/* 배경 애니메이션 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 메인 CTA */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            당신의 웃음,
            <br />
            지금부터 시작됩니다
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            AI가 만든 감정 솔루션, 직접 경험해보세요.
            <br />
            첫 걸음부터 함께 하겠습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              AI 감정 진단 바로가기
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 text-xl rounded-full bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              회원가입하고 무료 콘텐츠 받기
            </Button>
          </div>
        </div>

        {/* 뉴스레터 구독 */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              💌 웃음 소식을 받아보세요
            </h3>
            <p className="mb-6 opacity-90">
              매주 새로운 웃음 콘텐츠와 감정 케어 팁을 이메일로 받아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-6 py-3 rounded-full text-gray-800 bg-white/90 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
                구독하기
              </Button>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <footer className="border-t border-white/20 pt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* 로고 및 소개 */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                AI웃음연구소
              </h3>
              <p className="opacity-80 mb-4">
                AI 기술로 만드는 따뜻한 감정 케어,
                <br />
                모두의 일상에 웃음을 선사합니다.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <MessageCircle className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* 서비스 링크 */}
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">AI 감정 분석</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">웃음 콘텐츠</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">실시간 세션</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">감정 리포트</a></li>
              </ul>
            </div>

            {/* 지원 및 문의 */}
            <div>
              <h4 className="font-semibold mb-4">지원</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">고객센터</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">이용약관</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">개인정보처리방침</a></li>
              </ul>
              <div className="mt-4 flex items-center gap-2 opacity-80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@ailaugh.co.kr</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center opacity-60">
            <p>&copy; 2024 AI웃음연구소. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default CTASection;
