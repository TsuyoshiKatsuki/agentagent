"use client";

import { useEffect, useState } from "react";
import { TIME_SLOTS, type TimeSlot, type SlotAvailability } from "@/lib/availability";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [plan, setPlan] = useState<"standard" | "embedded">("standard");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<TimeSlot | "">("");
  const [slots, setSlots] = useState<SlotAvailability[]>(
    TIME_SLOTS.map((slot) => ({ slot, available: true }))
  );
  const [loadingSlots, setLoadingSlots] = useState(false);

  useEffect(() => {
    if (!date) return;
    setLoadingSlots(true);
    setTime("");
    fetch(`/api/availability?date=${encodeURIComponent(date)}`)
      .then((r) => r.json())
      .then((data: { slots: SlotAvailability[] }) => {
        setSlots(data.slots);
      })
      .catch(() => {
        setSlots(TIME_SLOTS.map((slot) => ({ slot, available: true })));
      })
      .finally(() => setLoadingSlots(false));
  }, [date]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!time) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white border border-[#b89968] p-12 text-center">
        <p className="text-[#b89968] text-xs tracking-[0.5em] mb-4">THANK YOU</p>
        <div className="gold-line w-20 mx-auto mb-8" />
        <h2 className="font-serif text-2xl mb-6">ご予約ありがとうございます</h2>
        <p className="text-sm text-muted leading-[2]">
          ご入力いただいた内容を確認のうえ、
          <br />
          24時間以内に担当者よりご連絡いたします。
        </p>
      </div>
    );
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block text-xs tracking-[0.3em] text-[#b89968] mb-3">
          PLAN <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          <label className="flex items-start gap-4 p-5 bg-white border border-border cursor-pointer hover:border-[#b89968] transition-all has-[:checked]:border-[#b89968] has-[:checked]:bg-[#fdfbf6]">
            <input
              type="radio"
              name="plan"
              value="standard"
              checked={plan === "standard"}
              onChange={() => setPlan("standard")}
              className="mt-1 accent-[#b89968]"
            />
            <div className="flex-1">
              <p className="font-serif text-base mb-1">スタンダードプラン</p>
              <p className="text-xs text-muted">
                壁掛けエアコン1台 + お風呂 + キッチン + トイレ
              </p>
            </div>
            <p className="font-serif text-lg text-foreground whitespace-nowrap">
              ¥55,000
              <span className="text-xs ml-1">税込</span>
            </p>
          </label>

          <label className="flex items-start gap-4 p-5 bg-white border border-border cursor-pointer hover:border-[#b89968] transition-all has-[:checked]:border-[#b89968] has-[:checked]:bg-[#fdfbf6]">
            <input
              type="radio"
              name="plan"
              value="embedded"
              checked={plan === "embedded"}
              onChange={() => setPlan("embedded")}
              className="mt-1 accent-[#b89968]"
            />
            <div className="flex-1">
              <p className="font-serif text-base mb-1">
                スタンダード + 埋め込みエアコン
              </p>
              <p className="text-xs text-muted">エアコンが天井埋め込み型の場合</p>
            </div>
            <p className="font-serif text-lg text-foreground whitespace-nowrap">
              ¥71,500
              <span className="text-xs ml-1">税込</span>
            </p>
          </label>
        </div>
      </div>

      <Field label="お名前" name="name" required />
      <Field label="フリガナ" name="kana" required />
      <Field label="メールアドレス" name="email" type="email" required />
      <Field label="お電話番号" name="phone" type="tel" required />

      <div>
        <label className="block text-xs tracking-[0.3em] text-[#b89968] mb-3">
          エリア <span className="text-red-500">*</span>
        </label>
        <select
          name="area"
          required
          className="w-full bg-white border border-border px-4 py-3 text-sm focus:border-[#b89968] focus:outline-none transition-colors"
          defaultValue=""
        >
          <option value="" disabled>
            選択してください
          </option>
          <option value="月島">月島</option>
          <option value="豊洲">豊洲</option>
          <option value="勝どき">勝どき</option>
          <option value="その他">その他（要相談）</option>
        </select>
      </div>

      <Field
        label="ご住所"
        name="address"
        placeholder="例：東京都中央区月島1-2-3 ○○マンション101号室"
        required
      />

      <div>
        <label className="block text-xs tracking-[0.3em] text-[#b89968] mb-3">
          ご希望日 <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="date"
          required
          min={today}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full bg-white border border-border px-4 py-3 text-sm focus:border-[#b89968] focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs tracking-[0.3em] text-[#b89968] mb-3">
          ご希望時間 <span className="text-red-500">*</span>
        </label>
        {!date ? (
          <p className="text-xs text-muted bg-white border border-border px-4 py-4">
            ※先に日付をお選びください
          </p>
        ) : loadingSlots ? (
          <p className="text-xs text-muted bg-white border border-border px-4 py-4">
            空き状況を確認中…
          </p>
        ) : (
          <>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {slots.map(({ slot, available }) => (
                <button
                  key={slot}
                  type="button"
                  disabled={!available}
                  onClick={() => setTime(slot)}
                  className={`py-3 text-sm tracking-wider border transition-all ${
                    !available
                      ? "bg-[#f0ede5] border-border text-muted/50 cursor-not-allowed line-through"
                      : time === slot
                      ? "bg-[#b89968] border-[#b89968] text-white"
                      : "bg-white border-border hover:border-[#b89968] text-foreground"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted mt-3">
              ※作業はおおよそ3〜4時間です。お選びの時間から開始いたします。
            </p>
          </>
        )}
        <input type="hidden" name="time" value={time} />
      </div>

      <div>
        <label className="block text-xs tracking-[0.3em] text-[#b89968] mb-3">
          ご要望・備考
        </label>
        <textarea
          name="notes"
          rows={5}
          className="w-full bg-white border border-border px-4 py-3 text-sm focus:border-[#b89968] focus:outline-none transition-colors resize-none"
          placeholder="特に気になる箇所や、お伝えしたいことがあればご記入ください。"
        />
      </div>

      <button
        type="submit"
        disabled={!date || !time}
        className="w-full py-5 bg-[#0a1929] text-white tracking-[0.3em] text-sm hover:bg-[#b89968] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        予約を送信する
      </button>

      <p className="text-xs text-muted text-center leading-[2]">
        ※送信後、24時間以内に担当者よりご連絡いたします。
        <br />
        ※現時点ではテスト送信です。
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs tracking-[0.3em] text-[#b89968] mb-3"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white border border-border px-4 py-3 text-sm focus:border-[#b89968] focus:outline-none transition-colors"
      />
    </div>
  );
}
