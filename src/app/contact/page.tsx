"use client";
import { useActionState } from "react";
import { sendContactMessage, ContactFormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initialState: ContactFormState = {
  success: false,
};

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Liên hệ</h1>
      <p className="text-muted-foreground mb-8">
        Bạn có câu hỏi hoặc muốn hợp tác? Hãy gửi tin nhắn cho tôi!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Thông tin liên hệ */}
        <div className="space-y-4">
          <div className="rounded-lg p-4 border bg-card">
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">2212385@dlu.edu.vn</p>
          </div>
          <div className="rounded-lg p-4 border bg-card">
            <h3 className="font-semibold mb-1">MSSV</h3>
            <p className="text-sm text-muted-foreground">2212385</p>
          </div>
          <div className="rounded-lg p-4 border bg-card">
            <h3 className="font-semibold mb-1">Địa chỉ</h3>
            <p className="text-sm text-muted-foreground">
              Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt
            </p>
          </div>
        </div>

        {/* Form liên hệ */}
        <div className="md:col-span-2">
          {state.success ? (
            <div className="rounded-lg p-6 border border-green-200 bg-green-50 text-center space-y-4">
              <h3 className="text-green-700 font-semibold text-lg mb-2">
                Gửi thành công!
              </h3>
              <p className="text-green-600">
                Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.
              </p>
              <p className="text-sm text-green-600">
                Kiểm tra console của server để xem tin nhắn.
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Họ và tên</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nguyễn Văn A"
                  required
                />
                {state.errors?.name && (
                  <p className="text-red-500 text-sm">
                    {state.errors.name[0]}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
                {state.errors?.email && (
                  <p className="text-red-500 text-sm">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Tiêu đề</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Chủ đề bạn muốn trao đổi"
                  required
                />
                {state.errors?.subject && (
                  <p className="text-red-500 text-sm">
                    {state.errors.subject[0]}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Nội dung</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Viết nội dung tin nhắn..."
                  required
                  rows={5}
                />
                {state.errors?.message && (
                  <p className="text-red-500 text-sm">
                    {state.errors.message[0]}
                  </p>
                )}
              </div>
              <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? "Đang gửi..." : "Gửi tin nhắn"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
