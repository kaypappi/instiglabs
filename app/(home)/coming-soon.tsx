"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Link } from "lucide-react";

const social = [
  {
    link: "https://twitter.com/InstigLabs",
    icon: "/images/twitter.png",
    name: "twitter",
  },
  {
    link: "/",
    icon: "/images/linkedin.png",
    name: "linkedin",
  },
  {
    link: "https://www.instagram.com/instiglabs/",
    icon: "/images/instagram.png",
    name: "instagram",
  },
];

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
  }

const ComingSoon = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <section className="w-screen h-screen grow items-center bg-[url('/images/heromesh.png')] relative">
      <div className=" w-60 h-60 bg-[#3FB7D5] blur-[247px] absolute bottom-0 left-0"></div>
      <div className=" w-60 h-60 bg-[#239C21] blur-[247px] absolute right-0 top-0"></div>
      <div className="container w-full h-full flex flex-col justify-center items-center py-20 text-center ">
        <Image src="/images/logo.png" width={200} height={75} alt="logo" priority />
        <motion.div
          animate={{
            y: [30, -30]
          }}
          transition={{duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}
          /* transition={bounceTransition} */
        >
          <Image
            className=" w-44 h-44 my-5"
            src="/images/rocket.png"
            width={500}
            height={500}
            alt="rocket"
            priority
          />
        </motion.div>
        <h2 className="h2 text-allports font-extrabold">
          Stay Tuned for an Exciting Launch
        </h2>
        <p className="p text-allports-700 mt-5 mb-12">
          The wait is almost over! Our new website will redefine excellence.
        </p>
        <Badge className=" bg-[#DDF7FF] text-allports px-3 py-2 flex items-center text-sm mb-5">
          <Image
            className="mr-2"
            src="/images/alarm.png"
            width={20}
            height={20}
            alt="alarm"
          />
          Get notified when we go live
        </Badge>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-lg mx-auto flex  gap-x-4 mb-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className=" rounded-2xl py-6 shadow-[0px_12px_20px_0px_rgba(1,50,66,0.12)]"
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="py-6 px-6 rounded-2xl bg-gradient-to-r from-[#047A9F] to-[#0EC1FA] shadow-[0px_12px_20px_0px_rgba(1,50,66,0.12)]"
              type="submit"
            >
              Subscribe
            </Button>
          </form>
        </Form>
        <div className="text-center mt-auto">
          <p className="p text-allports-700/50">
            If you have any questions please contact us at:
          </p>
          <p className="h6 text-allports-700">help@instiglabs.com</p>
          <div className="social flex w-max mx-auto mt-8">
            {social.map((item, index) => (
              <a href={item.link} key={item.name} target="_blank">
                <Image
                  className="mr-2 w-16 h-16"
                  src={item.icon}
                  width={400}
                  height={400}
                  alt={item.name}
                  priority
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
