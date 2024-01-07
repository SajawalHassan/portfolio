"use client";

import * as z from "zod";
import TextareaAutosize from "react-textarea-autosize";
import Github from "@/assets/svgs/GitHub.svg";
import Twitter from "@/assets/svgs/Twitter.svg";
import Youtube from "@/assets/svgs/YouTube.svg";
import Image from "next/image";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(3, "What's your name?"),
  email: z.string().min(1, "Email?").email("Enter a valid email"),
  message: z.string().min(1, "What do you want to talk about?"),
});

export const Contact = () => {
  const [submitContent, setSubmitContent] = useState<"Send Message" | "Message Sent">("Send Message");

  const form = useForm({ resolver: zodResolver(formSchema), defaultValues: { name: "", email: "", message: "" } });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/send", { ...values });
    } catch (error) {
      console.log(error);
    }

    form.reset();
    setSubmitContent("Message Sent");

    setTimeout(() => {
      setSubmitContent("Send Message");
    }, 2000);
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <div className="w-full pb-10 max-w-[1280px] th-lg:pr-[184px] mx-auto" id="contact">
      <h1 className="text-[38px] md:text-[30px] lg:text-[44px] font-bold bg-gradient-to-r from-th-primary to-th-accent bg-clip-text text-transparent">
        Contact me
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[26px]">
          <div className="md:flex items-center gap-x-[19px] space-y-[26px] md:space-y-0">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-grow relative">
                  <div className="input-container">
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage className="-bottom-6 absolute" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-grow relative">
                  <div className="input-container">
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage className="-bottom-6 absolute" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <div className="input-container">
                  <FormControl>
                    <TextareaAutosize
                      minRows={10}
                      placeholder="What do you want to talk about?"
                      className="border-[2px] bg-th-background border-none outline-none flex h-10 w-full rounded-md px-3 py-2 text-sm md:text-base placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-white"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-[12px]">
              <a href="http://github.com/sajawalhassan" target="_blank">
                <Image src={Github} alt="Github" width={32} height={32} className="cursor-pointer hover:brightness-50 transition-all" />
              </a>
              <a href="http://youtube.com/@sajawalhassan1f12" target="_blank">
                <Image src={Youtube} alt="Youtube" width={32} height={32} className="cursor-pointer hover:brightness-50 transition-all" />
              </a>
              <a href="https://twitter.com/Sajawal_1f12" target="_blank">
                <Image src={Twitter} alt="Twitter" width={32} height={32} className="cursor-pointer hover:brightness-50 transition-all" />
              </a>
            </div>

            <Button
              variant={"primary"}
              type="submit"
              className={cn("transition-all w-[7.5rem] lg:w-[10rem]", submitContent === "Message Sent" ? "text-th-text" : "text-white")}
              disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="h-6 w-6 animate-spin" /> : submitContent}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
