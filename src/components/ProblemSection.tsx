
import React from 'react';
import { Frown, Smartphone, Coffee, Users } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            "웃고 싶은데, 웃을 힘이 없어요"
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            스트레스로 지친 일상, 웃음을 잊고 있지 않나요?<br />
            내 감정 상태조차 파악하기 힘들다면?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">지친 일상</h3>
            <p className="text-sm text-gray-600">반복되는 업무와 스트레스</p>
          </div>

          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">디지털 피로</h3>
            <p className="text-sm text-gray-600">SNS와 온라인 소통의 한계</p>
          </div>

          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Frown className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">감정 둔화</h3>
            <p className="text-sm text-gray-600">웃음을 잃어가는 현대인</p>
          </div>

          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-gray-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">고립감</h3>
            <p className="text-sm text-gray-600">혼자만의 감정 관리</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
            <div className="text-6xl mb-4">😔</div>
            <p className="text-lg text-gray-600 italic">
              "언제부터 진짜 웃음을 잊었을까요?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
