import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Checkbox,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Separator,
  Form,
} from "@/components/ui";

import { Asterisk } from "lucide-react";
import { Toaster, toast } from "sonner";
import supabase from "@/utils/supabase";

const formSchema = z.object({
  email: z.email({
    error: "올바른 형식의 이메일 주소를 입력해주세요.",
  }),
  password: z.string().min(8, {
    error: "비밀번호는 최소한 8자 이상으로 작성해주세요.",
  }),
  confirmpassword: z.string().min(8, {
    error: "비밀번호 확인을 입력해 주세요.",
  }),
});

function signUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
  });

  const navigate = useNavigate();
  // 필수 동의항목 상태값 체크
  const [serviceAgreed, setServiceAgreed] = useState<boolean>(true);
  const [privacyAgreed, setPrivacyAgreed] = useState<boolean>(true);

  // 일반 회원가입
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!serviceAgreed || !privacyAgreed) {
      toast.warning("잠깐! 필수 동의가 아직 완료되지 않았어요!");
      return;
    }

    try {
      const { data, error: supabaseError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });

      if (supabaseError) {
        toast.error(supabaseError.message);
        return;
      }

      // user와 session 두 값 모두 null이 아닐 경우에만 회원가입이 완료되었음을 의미
      if (user && session) {
        //회원가입 성공 시,
        toast.success("회원가입이 완료되었습니다.");
        navigate("/sign-in"); // =>로그인 페이지로 리디렉션
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div className="w-full max-w-[1328px] h-full flex items-center justify-center py-20">
      <Card className="w-full max-w-sm border-0 bg-transparent">
        <CardHeader className="gap-0">
          <CardTitle className="text-lg">회원가입</CardTitle>
          <CardDescription>
            회원가입을 위한 정보를 입력해 주세요.
          </CardDescription>
          <CardAction></CardAction>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-3 space-y-4"
            >
              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Asterisk className="text-[#fa6859]" size={14} />
                        이메일
                      </FormLabel>
                      <div className="flex flex-1 gap-2">
                        <FormControl>
                          <Input
                            placeholder="이메일을 입력하세요."
                            required
                            {...field}
                          />
                        </FormControl>

                        <Button>본인 인증</Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Asterisk className="text-[#fa6859]" size={14} />
                      비밀번호
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmpassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Asterisk className="text-[#fa6859]" size={14} />
                      비밀번호 확인
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="비밀번호를 한번 더 입력하세요."
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-4">
                <div className="flex items-center">
                  <Label htmlFor="password">
                    <Asterisk className="text-[#fa6859]" size={14} />
                    필수 동의 항목
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">서비스 이용약관 동의</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    자세히 {`>`}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="terms2" />
                  <Label htmlFor="terms2">개인정보 수집 및 이용 동의</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    자세히 {`>`}
                  </a>
                </div>
                <Separator></Separator>
                <div className="flex items-center">
                  <Label htmlFor="password">선택 동의 항목</Label>
                </div>
                <div className="flex items-center gap-3 ">
                  <Checkbox id="terms3" />
                  <Label htmlFor="terms3">마케팅 및 광고 수신 동의</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    자세히 {`>`}
                  </a>
                </div>
              </div>
              <div className="flex  gap-2">
                <Button
                  className="w-9 border"
                  onClick={() => navigate("/sign-In")}
                >
                  ←
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-green-800/50 disabled:opactiy-50 border text-white "
                >
                  회원가입
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="w-full flex gap-2">
          <div className="w-full flex items-center justify-center gap-2 -mt-3">
            <p>이미 계정이 있으신가요?</p>

            <NavLink to={"/sign-in"} className="underline underline-offset-4">
              로그인
            </NavLink>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default signUp;
