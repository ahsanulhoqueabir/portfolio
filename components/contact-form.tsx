"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ContactFormSchema, type ContactFormData } from "@/types/contact.types";
import {
  submitContactAction,
  type ContactActionState,
} from "@/app/actions/contact.action";
import { useTurnstile } from "@/hooks/use-turnstile";
import { turnstileConfig } from "@/config/env.config";

const INITIAL_STATE: ContactActionState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, setState] = useState<ContactActionState>(INITIAL_STATE);
  const [isPending, startTransition] = useTransition();
  const { turnstileRef, turnstileToken, setTurnstileToken, resetTurnstile } =
    useTurnstile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    mode: "onChange",
  });

  function onSubmit(data: ContactFormData) {
    if (!turnstileToken) {
      setState({ status: "error", message: "Please complete the CAPTCHA." });
      return;
    }

    const formData = new FormData();
    formData.set("name", data.name);
    formData.set("email", data.email);
    formData.set("subject", data.subject);
    formData.set("message", data.message);
    formData.set("cf-turnstile-response", turnstileToken);

    startTransition(async () => {
      const result = await submitContactAction(INITIAL_STATE, formData);
      setState(result);

      if (result.status === "success") {
        reset();
        resetTurnstile();
      }
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <MessageCircle className="size-5 text-primary" />
          Send Us a Message
        </CardTitle>
        <CardDescription>
          Fill out the form below and I will get back to you as soon as
          possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                disabled={isPending}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                disabled={isPending}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="How can we help you?"
              disabled={isPending}
              {...register("subject")}
            />
            {errors.subject && (
              <p className="text-xs text-destructive">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Write your message here..."
              rows={6}
              disabled={isPending}
              className="resize-none"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          <Turnstile
            ref={turnstileRef}
            siteKey={turnstileConfig.siteKey}
            onSuccess={setTurnstileToken}
            onExpire={resetTurnstile}
            onError={resetTurnstile}
            options={{ theme: "auto" }}
          />

          {state.status === "success" && (
            <p className="text-sm text-green-600 dark:text-green-400 font-medium">
              {state.message}
            </p>
          )}
          {state.status === "error" && (
            <p className="text-sm text-destructive font-medium">
              {state.message}
            </p>
          )}

          <Button
            type="submit"
            disabled={!isValid || !turnstileToken || isPending}
            className="w-full sm:w-auto gap-2"
          >
            {isPending ? (
              "Sending..."
            ) : (
              <>
                <Send className="size-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
