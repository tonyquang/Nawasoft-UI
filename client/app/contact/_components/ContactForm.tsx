"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { products } from "@/lib/products";

const inquiryTypes = [
  { value: "consulting", label: "Tư vấn" },
  { value: "demo", label: "Demo" },
  { value: "pricing", label: "Báo giá" },
  { value: "support", label: "Hỗ trợ" },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultProduct = searchParams.get("product") ?? "";

  const [selectedInquiry, setSelectedInquiry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { product: defaultProduct },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, inquiryType: selectedInquiry }),
      });
      if (!res.ok) throw new Error("Server error");
      toast.success("Gửi thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.");
      reset();
      setSelectedInquiry("");
    } catch {
      toast.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-border/50 bg-card p-6"
    >
      {/* Full name */}
      <div className="space-y-1.5">
        <Label htmlFor="fullName">Họ và tên *</Label>
        <Input
          id="fullName"
          placeholder="Nguyễn Văn A"
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="text-xs text-destructive">{errors.fullName.message}</p>
        )}
      </div>

      {/* Phone + Email row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="phone">Số điện thoại *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="0912 345 678"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="email@cty.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Product select */}
      <div className="space-y-1.5">
        <Label>Sản phẩm quan tâm *</Label>
        <Select
          defaultValue={defaultProduct}
          onValueChange={(v) => setValue("product", v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Chọn sản phẩm..." />
          </SelectTrigger>
          <SelectContent>
            {products.map((p) => (
              <SelectItem key={p.slug} value={p.slug}>
                {p.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.product && (
          <p className="text-xs text-destructive">{errors.product.message}</p>
        )}
      </div>

      {/* Inquiry type toggles */}
      <div className="space-y-1.5">
        <Label>Loại yêu cầu</Label>
        <div className="flex flex-wrap gap-2">
          {inquiryTypes.map((t) => (
            <button
              type="button"
              key={t.value}
              onClick={() =>
                setSelectedInquiry((prev) =>
                  prev === t.value ? "" : t.value
                )
              }
              className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                selectedInquiry === t.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message">Nội dung *</Label>
        <Textarea
          id="message"
          placeholder="Mô tả nhu cầu của bạn..."
          rows={4}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-linear-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Đang gửi...
          </>
        ) : (
          "Gửi liên hệ →"
        )}
      </Button>
    </form>
  );
}
