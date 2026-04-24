"use client";
import { useState } from "react";
import { deleteGuestbookEntry } from "@/app/guestbook/actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DeleteButton({
  id,
  onDelete,
}: {
  id: string;
  onDelete: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    await deleteGuestbookEntry(id);
    onDelete();
    setDeleting(false);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-xs text-red-400 hover:text-red-600 transition-colors">
          Xoa
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Xac nhan xoa</DialogTitle>
          <DialogDescription>
            Ban co chac chan muon xoa loi nhan nay? Hanh dong nay khong the hoan tac.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Huy
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
            {deleting ? "Dang xoa..." : "Xoa"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
