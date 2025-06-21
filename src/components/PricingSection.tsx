
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: '프리',
      price: '무료',
      period: '',
      description: '웃음의 첫 걸음을 무료로 시작하세요',
      icon: Star,
      gradient: 'from-gray-400 to-gray-600',
      bgGradient: 'from-gray-50 to-gray-100',
      features: [
        '기본 감정분석 (월 10회)',
        '제한된 웃음 콘텐츠 접근',
        '주간 감정 리포트',
        '커뮤니티 참여',
        '기본 고객지원'
      ],
      buttonText: '무료로 시작하기',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: '베이직',
      price: '₩9,900',
      period: '/월',
      description: '일상 속 웃음 습관을 만들어가세요',
      icon: Zap,
      gradient: 'from-blue-500 to-purple-500',
      bgGradient: 'from-blue-50 to-purple-50',
      features: [
        '무제한 감정분석',
        '월 4회 실시간 웃음세션',
        '맞춤형 웃음 콘텐츠 접근',
        '일일 감정 리포트',
        '목표 설정 및 트래킹',
        '우선 고객지원'
      ],
      buttonText: '베이직 시작하기',
      buttonVariant: 'default' as const,
      popular: true
    },
    {
      name: '프리미엄',
      price: '₩29,000',
      period: '/월',
      description: '전문가와 함께하는 완전한 감정 케어',
      icon: Crown,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      features: [
        '무제한 감정분석 & 웃음세션',
        '전문가 1:1 상담 (월 2회)',
        '프리미엄 웃음 콘텐츠',
        '실시간 감정 모니터링',
        '개인별 맞춤 프로그램',
        '가족 계정 연동 (4명)',
        '24/7 전담 지원'
      ],
      buttonText: '프리미엄 시작하기',
      buttonVariant: 'default' as const,
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            요금제
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            당신에게 맞는 웃음 케어 플랜을 선택하세요
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    인기 플랜
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-800">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 ml-1">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={plan.buttonVariant}
                  className={`w-full py-3 text-lg rounded-xl ${
                    plan.buttonVariant === 'default'
                      ? `bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white`
                      : 'border-2 hover:bg-gray-50'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>

              {/* 배경 그라데이션 효과 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} rounded-2xl opacity-5 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* B2B 섹션 */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              기업용 솔루션
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              직장 내 스트레스 관리와 팀 분위기 개선을 위한 맞춤형 서비스를 제공합니다
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🏢</div>
                <h4 className="font-semibold text-gray-800 mb-1">기업 대시보드</h4>
                <p className="text-sm text-gray-600">팀별 감정 상태 모니터링</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">👥</div>
                <h4 className="font-semibold text-gray-800 mb-1">단체 세션</h4>
                <p className="text-sm text-gray-600">팀 빌딩 웃음 프로그램</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-semibold text-gray-800 mb-1">분석 리포트</h4>
                <p className="text-sm text-gray-600">조직 차원의 감정 분석</p>
              </div>
            </div>

            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-400 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-xl"
            >
              B2B 문의하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
