"use client";
import { useState, useEffect } from "react";
import { GuestbookEntry } from "@/data/guestbook";
import GuestbookForm from "@/components/guestbook-form";
import DeleteButton from "@/components/delete-button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchEntries() {
    try {
      const res = await fetch("/api/guestbook");
      if (!res.ok) throw new Error("Loi khi tai du lieu");
      const data = await res.json();
      setEntries(data);
    } catch {
      setError("Khong the tai so luu but. Vui long thu lai.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Sổ lưu bút</h1>
      <p className="text-muted-foreground mb-8">Hãy để lại lời nhắn cho tôi nhé!</p>
      <GuestbookForm onSuccess={fetchEntries} />
      <Separator className="my-8" />
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">{entries.length} lời nhắn</p>
        {entries.map((entry) => (
          <Card key={entry.id}>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-foreground">{entry.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">
                    {new Date(entry.createdAt).toLocaleDateString("vi-VN")}
                  </span>
                  <DeleteButton id={entry.id} onDelete={fetchEntries} />
                </div>
              </div>
              <p className="text-muted-foreground">{entry.message}</p>
            </CardContent>
          </Card>
        ))}
        {entries.length === 0 && !loading && (
          <p className="text-center text-muted-foreground py-8">
            Chưa có lời nhắn nào. Hãy là người đầu tiên!
          </p>
        )}
      </div>
    </div>
  );
}
