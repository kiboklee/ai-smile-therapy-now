
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DialogClose } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

interface SignupFormProps {
  onSuccess?: () => void;
}

const SignupForm = ({ onSuccess }: SignupFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Supabase 회원가입
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name,
            phone: formData.phone,
          }
        }
      });

      if (error) {
        console.error('회원가입 오류:', error);
        toast({
          title: "회원가입 실패",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "회원가입 성공!",
        description: "이메일을 확인하여 계정을 활성화해주세요.",
      });

      // 폼 초기화
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
      });

      onSuccess?.();
    } catch (error) {
      console.error('예상치 못한 오류:', error);
      toast({
        title: "오류 발생",
        description: "회원가입 중 문제가 발생했습니다.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup} className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="name">이름</Label>
        <Input 
          id="name" 
          placeholder="홍길동"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">이메일</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input 
          id="password" 
          type="password" 
          placeholder="8자 이상 입력해주세요"
          value={formData.password}
          onChange={handleInputChange}
          minLength={8}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">전화번호</Label>
        <Input 
          id="phone" 
          placeholder="010-1234-5678"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <Button 
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg"
        disabled={isLoading}
      >
        {isLoading ? '가입 중...' : '가입 완료하기'}
      </Button>
      <p className="text-xs text-gray-500 text-center">
        가입 시 <span className="text-purple-600">이용약관</span> 및 <span className="text-purple-600">개인정보처리방침</span>에 동의하게 됩니다.
      </p>
    </form>
  );
};

export default SignupForm;
