"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import AuthLayout from "./layout";
import Link from "next/link";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const validationSchema = z.object({
  email: z.string().email(),
  pwd: z.string().min(4, "Password should contain at least 4 characters"),
  confirmPwd: z.string(),
  fname: z.string(),
  lname: z.string(),
  phone: z.string(),
  agreeToTerms: z.boolean(),
});

const initialValues = {
  email: "",
  pwd: "",
  confirmPwd: "",
  fname: "",
  lname: "",
  phone: "",
  agreeToTerms: false,
};

type FormData = z.infer<typeof validationSchema>;

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(validationSchema),
    defaultValues: initialValues,
  });

  const { setError: setFormError, clearErrors, watch } = form;
  const pwd = watch("pwd");
  const confirmPwd = watch("confirmPwd");

  useEffect(() => {
    if (pwd !== confirmPwd) {
      setFormError("confirmPwd", {
        type: "manual",
        message: "Passwords do not match",
      });
    } else {
      clearErrors("confirmPwd");
    }
  }, [pwd, confirmPwd, setFormError, clearErrors]);

  async function onSubmit(values: FormData) {
    if (!values.agreeToTerms) {
      toast.error("You must agree to the terms and conditions");
      return;
    }

    setLoading(true);
    setError(null);

    await authClient.signUp.email(
      {
        email: values.email,
        password: values.pwd,
        name: `${values.fname} ${values.lname}`,
        image: undefined, // better-auth expects image property in user type generally
      },
      {
        onSuccess: () => {
          toast.success("Account created successfully");
          router.push("/");
        },
        onError: (ctx) => {
          setError(ctx.error.message);
          setLoading(false);
        },
      }
    );
  }

  return (
    <AuthLayout>
      <Form {...form}>
        {error && (
          <Alert variant="destructive" className="bg-red-50 mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error}
            </AlertDescription>
          </Alert>
        )}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-8 grid grid-cols-6 gap-4"
        >
          <div className="col-span-6 sm:col-span-3">
            <FormField
              control={form.control}
              name="fname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <FormField
              control={form.control}
              name="lname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
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
          </div>
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
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
          </div>

          <div className="col-span-6 sm:col-span-3">
            <FormField
              control={form.control}
              name="confirmPwd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
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
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-4">
                    <FormControl>
                      <Checkbox
                        id="terms"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our{" "}
              <Link href="#" className="text-gray-700 underline">
                terms and conditions{" "}
              </Link>
              and{" "}
              <a href="#" className="text-gray-700 underline">
                privacy policy
              </a>
              .
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <Button loading={loading}>Create an account</Button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <Button variant="link" href="/auth/sign-in">
                Log in.
              </Button>
            </p>
          </div>
        </form>
      </Form>
    </AuthLayout>
  );
}

