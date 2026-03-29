import { NextResponse } from "next/dist/server/web/spec-extension/response";
import { initPayment } from "@/lib/payteck";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { planId, phoneNumber, amount } = body;

    if (!planId || !phoneNumber || !amount) {
      return NextResponse.json(
        { success: false, error: "Paramètres manquants : planId, phoneNumber, amount" },
        { status: 400 }
      );
    }

    const response = await initPayment(planId, phoneNumber, amount);

    return NextResponse.json(response);
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur interne" },
      { status: 500 }
    );
  }
}
