import React from 'react';
import { Brain, Video, BarChart3, Heart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI 감정 분석',
      description: '표정과 음성을 실시간으로 분석하여 정확한 감정 상태를 파악합니다.',
      gradient: 'from-purple-500 to-blue-500',
      bgGradient: 'from-purple-50 to-blue-50'
    },
    {
      icon: Heart,
      title: '맞춤형 웃음 콘텐츠',
      description: '개인의 감정 상태에 맞는 웃음 콘텐츠를 AI가 큐레이션해드립니다.',
      gradient: 'from-pink-500 to-red-500',
      bgGradient: 'from-pink-50 to-red-50'
    },
    {
      icon: Video,
      title: '실시간 화상 웃음 세션',
      description: '전문가와 함께하는 라이브 웃음 치료 세션에 참여하세요.',
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50'
    },
    {
      icon: BarChart3,
      title: '감정 리포트 자동 생성',
      description: '매일의 감정 변화와 웃음 지수를 시각화하여 제공합니다.',
      gradient: 'from-orange-500 to-yellow-500',
      bgGradient: 'from-orange-50 to-yellow-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            핵심 기능
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            과학적 접근과 따뜻한 기술로 당신의 일상에 웃음을 선사합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* 호버 효과를 위한 배경 그라데이션 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* 추가 설명 섹션 */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                과학적 근거에 기반한 웃음 치료
              </h3>
              <p className="text-lg text-gray-600">
                최신 AI 기술과 심리학 연구를 결합하여 효과적인 감정 케어를 제공합니다
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="font-semibold text-gray-800 mb-2">뇌과학 기반</h4>
                <p className="text-sm text-gray-600">
                  웃음이 뇌에 미치는 긍정적 영향을 과학적으로 분석
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h4 className="font-semibold text-gray-800 mb-2">AI 개인화</h4>
                <p className="text-sm text-gray-600">
                  개인별 특성을 학습하여 최적의 솔루션 제공
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="font-semibold text-gray-800 mb-2">데이터 추적</h4>
                <p className="text-sm text-gray-600">
                  감정 변화를 정량적으로 측정하고 개선점 도출
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
