"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import AuthLayout from "./layout";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import authActions from "@/redux/modules/auth/authActions";
import { selectUser } from "@/redux/modules/auth/authSelectors";
import { UserState } from "@/redux/modules/auth/authReducer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  email: z.string().email(),
  pwd: z.string(),
});

export default function SignIn() {
  const user: typeof UserState.user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      pwd: "",
    },
  });

  function onSubmit(user: z.infer<typeof formSchema>) {
    dispatch(authActions.loginUser(user));

  }

  return (
    <AuthLayout>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-8">
          {user.error && (
            <Alert variant="destructive" className="bg-red-50">
              <AlertTitle>Incorrect credentials</AlertTitle>
              <AlertDescription>
                Please enter your correct credentials to login
              </AlertDescription>
            </Alert>
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pwd"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <Button type="submit" loading={user.loading} className="w-full">
              Login
            </Button>

            <p className="text-sm text-gray-500 sm:mt-0">
              Don't have an account?
              <Button
                variant="link"
                href="/auth/sign-up"
                className="text-gray-700 underline"
              >
                Sign Up.
              </Button>
            </p>
          </div>
        </form>
      </Form>
    </AuthLayout>
  );
}



// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import React, { useState } from "react";
// import AuthLayout from "./layout";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { authClient } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// const formSchema = z.object({
//   email: z.string().email(),
//   pwd: z.string(),
// });

// export default function SignIn() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       pwd: "",
//     },
//   });

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     setLoading(true);
//     setError(null);
//     await authClient.signIn.email(
//       {
//         email: values.email,
//         password: values.pwd,
//       },
//       {
//         onSuccess: () => {
//           toast.success("Login successful");
//           router.push("/");
//         },
//         onError: (ctx) => {
//           setError(ctx.error.message);
//           setLoading(false);
//         },
//       }
//     );
//   }

//   return (
//     <AuthLayout>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-8">
//           {error && (
//             <Alert variant="destructive" className="bg-red-50">
//               <AlertTitle>Error</AlertTitle>
//               <AlertDescription>
//                 {error}
//               </AlertDescription>
//             </Alert>
//           )}

//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter email" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="pwd"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Password</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="password"
//                     placeholder="Enter password"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <div className="space-y-2">
//             <Button type="submit" loading={loading} className="w-full">
//               Login
//             </Button>

//             <p className="text-sm text-gray-500 sm:mt-0">
//               Don't have an account?
//               <Button
//                 variant="link"
//                 href="/auth/sign-up"
//                 className="text-gray-700 underline"
//               >
//                 Sign Up.
//               </Button>
//             </p>
//           </div>
//         </form>
//       </Form>
//     </AuthLayout>
//   );
// }

