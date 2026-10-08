"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-blue disabled:opacity-60";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearTimeout(resetTimer.current);
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setStatus("success");
    } catch (error) {
      // A failed request must not be reported as sent, and the user's text is kept so they can retry
      console.error("Gửi form thất bại", error);
      setStatus("error");
    }
    resetTimer.current = setTimeout(() => setStatus("idle"), 4000);
  };

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h3 className="text-2xl tracking-tight">Gửi tin nhắn</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-muted">
            Họ và tên
          </label>
          <input id="name" name="name" type="text" required placeholder="Nguyễn Văn A" disabled={submitting} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-muted">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="example@company.com" disabled={submitting} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="msg" className="mb-2 block text-sm text-muted">
          Tin nhắn
        </label>
        <textarea
          id="msg"
          name="message"
          rows={5}
          required
          placeholder="Mô tả dự án hoặc cơ hội bạn muốn trao đổi..."
          disabled={submitting}
          className={`${inputClass} resize-y`}
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={submitting} className="btn-square btn-blue cursor-pointer disabled:cursor-wait disabled:opacity-70">
          {submitting ? "Đang gửi..." : "Gửi tin nhắn"}
          <ArrowUpRight className="h-4 w-4" />
        </button>
        <p aria-live="polite" className={`text-sm ${status === "error" ? "text-red-600" : "text-blue"}`}>
          {status === "success" && "Đã gửi thành công! Tôi sẽ phản hồi sớm."}
          {status === "error" && "Có lỗi xảy ra, vui lòng thử lại hoặc gửi email trực tiếp."}
        </p>
      </div>
    </form>
  );
}
