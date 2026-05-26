import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dữ liệu không hợp lệ", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      return NextResponse.json(
        { error: "Server chưa cấu hình Google Script URL" },
        { status: 500 }
      );
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        submittedAt: new Date().toISOString(),
        source: "nawasoft-landing",
      }),
    });

    if (!response.ok) {
      throw new Error(`Apps Script responded ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact API]", error);
    return NextResponse.json(
      { error: "Đã có lỗi xảy ra, vui lòng thử lại" },
      { status: 500 }
    );
  }
}
