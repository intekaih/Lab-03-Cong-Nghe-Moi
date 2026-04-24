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
      <h1 className="text-3xl font-bold mb-2">Lien he</h1>
      <p className="text-gray-500 mb-8">
        Ban co cau hoi hoac muon hop tac? Hay gui tin nhan cho toi!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Thong tin lien he */}
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-sm text-gray-600">nguyenvana@sv.dlu.edu.vn</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-1">GitHub</h3>
            <p className="text-sm text-gray-600">github.com/nguyenvana</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-1">Dia chi</h3>
            <p className="text-sm text-gray-600">
              Dai hoc Da Lat, 01 Phu Dong Thien Vuong, Da Lat
            </p>
          </div>
        </div>

        {/* Form lien he */}
        <div className="md:col-span-2">
          {state.success ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center space-y-4">
              <h3 className="text-green-700 font-semibold text-lg mb-2">
                Gui thanh cong!
              </h3>
              <p className="text-green-600">
                Cam on ban da lien he. Toi se phan hoi som nhat co the.
              </p>
              <p className="text-sm text-green-600">
                Kiem tra console cua server de xem tin nhan.
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ho va ten</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nguyen Van A"
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
                <Label htmlFor="subject">Tieu de</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Chu de ban muon trao doi"
                  required
                />
                {state.errors?.subject && (
                  <p className="text-red-500 text-sm">
                    {state.errors.subject[0]}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Noi dung</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Viet noi dung tin nhan..."
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
                {isPending ? "Dang gui..." : "Gui tin nhan"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
