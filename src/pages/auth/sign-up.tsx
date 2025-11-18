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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { z } from "zod";

const formSchema = z.object({
  email: z.email("올바른 형식의 이메일 주소를 입력해주세요."),
  password: z.string().min(8, {
    message: "비밀번호는 최소한 8자 이상으로 작성해주세요.",
  }),
  confirmpassword: z.string().min(8, {
    message: "비밀번호는 최소한 8자 이상으로 작성해주세요.",
  }),
});

function signUp() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
  });

  // 회원가입
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
                      <FormLabel>이메일</FormLabel>
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
                    <FormLabel>비밀번호</FormLabel>
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
                    <FormLabel>비밀번호 확인</FormLabel>
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
              <div className="grid gap-4">
                <div className="flex items-center">
                  <Label htmlFor="password">필수 동의항복</Label>
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
                  <Label htmlFor="password">선택 동의항복</Label>
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
              <div className="flex flex-1  gap-2">
                <Button
                  className="w-9 border"
                  onClick={() => navigate("/sign-In")}
                >
                  ←
                </Button>
                <Button
                  type="submit"
                  className="w-77 bg-green-800/50 disabled:opactiy-50 border text-white"
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
