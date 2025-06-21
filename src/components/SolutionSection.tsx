
import React from 'react';
import { Brain, Heart, BarChart3, Zap } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            이제, 감정도 처방받는 시대
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI가 감정을 읽고, 당신에게 꼭 맞는 웃음을 제안합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  기분 따라 달라지는 맞춤 웃음 콘텐츠
                </h3>
                <p className="text-gray-600">
                  AI가 당신의 표정과 음성을 분석해 지금 필요한 웃음을 찾아드립니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  뇌파와 표정 분석 기반 트래킹
                </h3>
                <p className="text-gray-600">
                  과학적 데이터를 바탕으로 당신의 감정 변화를 정확히 파악합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  개인별 감정 리포트 자동 생성
                </h3>
                <p className="text-gray-600">
                  매일의 감정 변화를 한눈에 보고, 개선점을 찾아보세요.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* 감정 분석 대시보드 예시 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800">감정 분석 대시보드</h4>
                <Zap className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">행복 지수</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-16 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">스트레스</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-8 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">40%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">에너지</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-14 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">70%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 웃음 콘텐츠 플레이어 예시 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h4 className="font-semibold text-gray-800 mb-4">오늘의 추천 웃음</h4>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xl">😊</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">활력 충전 웃음</p>
                    <p className="text-sm text-gray-600">5분 • 초급자</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  "오늘은 약간 피곤한 표정이에요. 활력 웃음으로 기운을 충전해보세요!"
                </p>
                <div className="w-full h-2 bg-white/50 rounded-full">
                  <div className="w-1/3 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* 리포트 카드 예시 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h4 className="font-semibold text-gray-800 mb-4">주간 감정 리포트</h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl mb-1">📈</div>
                  <p className="text-xs text-gray-600">웃음 증가</p>
                  <p className="text-sm font-bold text-green-600">+25%</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-1">⭐</div>
                  <p className="text-xs text-gray-600">평균 점수</p>
                  <p className="text-sm font-bold text-blue-600">8.2/10</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl mb-1">🎯</div>
                  <p className="text-xs text-gray-600">목표 달성</p>
                  <p className="text-sm font-bold text-purple-600">90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
