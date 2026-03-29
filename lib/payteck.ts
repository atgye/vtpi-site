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
      custom_field: JSON.stringify({ planId, phoneNumber }),
    };

    console.log("Appel API PayTech Réel avec le payload:", payload);

    const response = await fetch("https://paytech.sn/api/payment/request-payment", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "API_KEY": API_KEY,
        "API_SECRET": API_SECRET
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log("Réponse COMPLÈTE PayTech:", JSON.stringify(data, null, 2));

    if (data.success === 1 || data.success === true) {
      return {
        success: true,
        transactionId: data.token || `TXN-${Date.now()}`,
        redirect_url: data.redirect_url, // Vraie url de redirection PayTech s'il y en a une
        message: "Demande de paiement envoyée. Veuillez valider la transaction.",
      };
    } else {
      return { 
        success: false, 
        error: data.errors?.[0] || 'Erreur PayTech. Vérifiez vos clés API ou votre configuration.' 
      };
    }
  } catch (error) {
    console.error("Erreur InitPayment PayTeck:", error);
    return { success: false, error: "Erreur de connexion avec le serveur de paiement." };
  }
}

export async function verifyPayment(transactionId: string) {
  return { success: true, status: "completed", transactionId };
}
