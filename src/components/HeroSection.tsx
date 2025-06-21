
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 배경 애니메이션 이모지들 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">😊</div>
        <div className="absolute top-32 right-20 text-3xl animate-pulse">😌</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-bounce delay-300">😄</div>
        <div className="absolute bottom-60 right-16 text-4xl animate-pulse delay-500">🥰</div>
        <div className="absolute top-1/2 left-1/4 text-2xl animate-bounce delay-700">😂</div>
        <div className="absolute top-1/3 right-1/3 text-3xl animate-pulse delay-1000">🌟</div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span className="text-sm font-medium text-gray-700">AI 감정 케어의 새로운 시작</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                AI로 당신의
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                웃음을 다시 켜다
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              하루 5분, 감정을 읽고 웃음을 처방해주는 디지털 힐링
            </p>
            
            <p className="text-lg text-gray-500 mb-12">
              정서 분석부터 웃음 트레이닝까지, 비대면으로 쉽고 따뜻하게.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              AI 감정 테스트 해보기
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-purple-400 px-8 py-4 text-lg rounded-full bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300"
            >
              <Play className="h-5 w-5 mr-2" />
              서비스 소개 영상 보기
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  회원가입하기
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    AI웃음연구소 가입하기
                  </DialogTitle>
                  <DialogDescription className="text-center text-gray-600">
                    개인 맞춤형 감정 케어를 시작해보세요
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input id="name" placeholder="홍길동" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" type="email" placeholder="example@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">비밀번호</Label>
                    <Input id="password" type="password" placeholder="8자 이상 입력해주세요" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">전화번호</Label>
                    <Input id="phone" placeholder="010-1234-5678" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg">
                    가입 완료하기
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    가입 시 <span className="text-purple-600">이용약관</span> 및 <span className="text-purple-600">개인정보처리방침</span>에 동의하게 됩니다.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* AI 분석 UI 예시 */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <div className="text-4xl">🤖</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-gray-700 mb-2">AI 감정 분석 중...</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
