
import React from 'react';
import { Users, Shield, Globe, Sparkles } from 'lucide-react';

const ValueSection = () => {
  const testimonials = [
    {
      text: "혼자가 아니었어요. 같은 고민을 하는 사람들과 함께 웃으니까 마음이 한결 가벼워졌어요.",
      author: "김○○님, 직장인",
      emotion: "🤗"
    },
    {
      text: "이젠 웃는 게 자연스러워졌어요. AI가 제안하는 웃음 운동이 정말 효과적이에요!",
      author: "이○○님, 대학생",
      emotion: "😊"
    },
    {
      text: "우울했던 마음이 조금씩 밝아지고 있어요. 매일 리포트를 보는 재미도 있고요.",
      author: "박○○님, 주부",
      emotion: "✨"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            웃음 하나가, 세상을 바꿉니다
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI웃음연구소는 단순한 서비스를 넘어 사회적 가치를 만들어갑니다
          </p>
        </div>

        {/* 사회적 가치 카드들 */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              정신건강 관리의 대중화
            </h3>
            <p className="text-gray-600">
              누구나 쉽게 접근할 수 있는 디지털 감정 케어로 정신건강 관리의 문턱을 낮춥니다.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              고립감 해소와 정서적 회복
            </h3>
            <p className="text-gray-600">
              혼자만의 감정이 아닌, 함께 나누는 웃음으로 사회적 연결감을 회복합니다.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              웃음으로 만드는 따뜻한 연결
            </h3>
            <p className="text-gray-600">
              개인을 넘어 가족, 직장, 지역사회까지 긍정적 에너지를 확산시킵니다.
            </p>
          </div>
        </div>

        {/* 사용자 후기 슬라이드 */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              실제 사용자들의 변화 이야기
            </h3>
            <p className="text-lg text-gray-600">
              AI웃음연구소와 함께한 분들의 진솔한 후기입니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{testimonial.emotion}</div>
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 font-medium">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 통계 섹션 */}
        <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              숫자로 보는 변화
            </h3>
            <p className="text-lg text-gray-600">
              데이터로 확인하는 AI웃음연구소의 효과
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">85%</div>
              <p className="text-sm text-gray-600">웃음 빈도 증가</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">92%</div>
              <p className="text-sm text-gray-600">사용자 만족도</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">-60%</div>
              <p className="text-sm text-gray-600">스트레스 지수 감소</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">30일</div>
              <p className="text-sm text-gray-600">평균 변화 체감 기간</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
