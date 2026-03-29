const API_KEY = process.env.PAYTECK_API_KEY!;
const API_SECRET = process.env.PAYTECK_API_SECRET!;
const IS_TEST_MODE = process.env.PAYTECK_IS_TEST_MODE === "true";

export async function initPayment(planId: string, phoneNumber: string, amount: number) {
  try {
    const payload = {
      item_name: `Abonnement VTPI - ${planId}`,
      item_price: amount,
      currency: "XOF",
      ref_command: `VTPI-${Date.now()}`,
      command_name: `Paiement abonnement ${planId}`,
      env: IS_TEST_MODE ? "test" : "live",
      ipn_url: process.env.PAYTECK_IPN_URL,
      success_url: process.env.PAYTECK_SUCCESS_URL,
      cancel_url: process.env.PAYTECK_CANCEL_URL,
      custom_data: {
        planId,
        phoneNumber,
      },
    };

    console.log("Initiating Payment to PayTeck API:", payload);

    // Simulated API Call with Artificial Latency as requested
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Return successful response for UI simulation in test mode
    return {
      success: true,
      transactionId: `TXN-${Date.now()}`,
      message: "Demande de paiement envoyée sur votre téléphone. Veuillez composer le code secret pour confirmer.",
    };
  } catch (error) {
    console.error("Erreur InitPayment PayTeck:", error);
    return { success: false, error: "Erreur lors de l'initialisation du paiement." };
  }
}

export async function verifyPayment(transactionId: string) {
  // Simulated verification
  return { success: true, status: "completed", transactionId };
}
