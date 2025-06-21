
import React from 'react';
import { Sun, Coffee, Moon, TrendingUp } from 'lucide-react';

const ScenarioSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            당신의 하루, 이렇게 바뀝니다
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI웃음연구소와 함께하는 하루 일과를 경험해보세요
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 아침 */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sun className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">아침</h3>
                  <p className="text-gray-600">출근 전 1분 감정 진단</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-lg">🤖</span>
                      </div>
                      <span className="font-medium text-gray-800">AI 분석</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      "오늘은 약간 피곤한 표정이에요."
                    </p>
                    <div className="bg-white/70 rounded-lg p-3">
                      <p className="text-sm font-medium text-orange-600">
                        💡 활력 웃음 추천!
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        5분 웃음 스트레칭으로 하루를 시작해보세요
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>감정 상태: 보통</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 점심 */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coffee className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">점심</h3>
                  <p className="text-gray-600">짬내어 웃음 리프레시</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-lg">🎯</span>
                      </div>
                      <span className="font-medium text-gray-800">웃음 세션 참여</span>
                    </div>
                    <div className="bg-white/70 rounded-lg p-3 mb-3">
                      <p className="text-sm font-medium text-blue-600 mb-1">
                        📺 점심시간 웃음 스트레칭
                      </p>
                      <p className="text-xs text-gray-600">
                        3분 짧은 영상으로 스트레스 해소
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>참여자 234명</span>
                      <span>💯 완료!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 밤 */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Moon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">밤</h3>
                  <p className="text-gray-600">하루 감정 리포트 확인</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="font-medium text-gray-800">일일 리포트</span>
                    </div>
                    
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="text-center mb-3">
                        <div className="text-3xl mb-2">🎉</div>
                        <p className="text-lg font-bold text-purple-600">
                          오늘 웃음지수 78% 상승!
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-center text-xs">
                        <div className="bg-purple-50 rounded-lg p-2">
                          <p className="font-medium">웃음 횟수</p>
                          <p className="text-purple-600 font-bold">+12회</p>
                        </div>
                        <div className="bg-pink-50 rounded-lg p-2">
                          <p className="font-medium">스트레스</p>
                          <p className="text-pink-600 font-bold">-35%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 연결선 (데스크톱에서만 표시) */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-blue-400"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <p className="text-lg font-medium text-gray-800 mb-2">
              "하루 종일 웃음이 끊이지 않았어요!"
            </p>
            <p className="text-sm text-gray-600">
              - 실제 사용자 후기 -
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;
