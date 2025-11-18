import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
} from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "react-router";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.email(),
  password: z.string().min(8, {
    massage: "비밀번호는 최소한 7자 이상으로 작성해 주세요.",
  }),
});

function SignIn();
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    email: "",
    password: "",
  },
});

// 로그인
const onSubmit = (value: z.infer<typeof formSchema>) => {
  console.log(values);

  return (
    <main className="w-full flex-1 flex justify-center ">
      <div className="w-full max-w-[1328px] h-full flex justify-center ">
        <Card className="w-full max-w-sm border-0 bg-transparent">
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>로그인을 위한 정보를 입력하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  구글 로그인
                </Button>
              </form>
            </Form>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="이메일을 입력하세요"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">비밀번호</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      비밀번호를 잊으셨나요??
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="비밀번호를 입력하세요"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <p>계정이 없으신가요?</p>
            <Botton valient={"link"} className="p-0 underline">
              회원가입
            </Botton>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default SignIn;
