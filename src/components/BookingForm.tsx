"use client";

import { useState } from "react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [plan, setPlan] = useState<"standard" | "embedded">("standard");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white border border-[#b89968] p-12 text-center">
        <p className="text-[#b89968] text-xs tracking-[0.5em] mb-4">
          THANK YOU
        </p>
        <div className="gold-line w-20 mx-auto mb-8" />
        <h2 className="font-serif text-2xl mb-6">
          ご予約ありがとうございます
        </h2>
        <p className="text-sm text-muted leading-[2]">
          ご入力いただいた内容を確認のうえ、
          <br />
          24時間以内に担当者よりご連絡いたします。
        </p>
      </div>
    );
  }

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
              <p className="text-xs text-muted">
                エアコンが天井埋め込み型の場合
              </p>
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
          className="w-full bg-white border border-border px-4 py-3 text-sm focus:border-[#b89968] focus:outline-none transition-colors"
        />
        <p className="text-xs text-muted mt-2">
          ※第1希望をご記入ください。空き状況によりご相談させていただきます。
        </p>
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
        className="w-full py-5 bg-[#0a1929] text-white tracking-[0.3em] text-sm hover:bg-[#b89968] transition-all"
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
        {label.toUpperCase()}{" "}
        {required && <span className="text-red-500">*</span>}
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
