// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { BackendSavvyApi } from "@/constants/backendApi";

type TransactionData = {
  transactionType: string;
  amount: number;
  month: number;
  token:any
};

type ApiResponse = {
  success: boolean;
  message?: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, message: "Method Not Allowed" });
    }

    const { transactionType, amount, month,token }: TransactionData = req.body;

    // Perform any necessary validation of transaction data here

    const result = await fetch(`${BackendSavvyApi}/transaction/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    
        
      },
      body: JSON.stringify({
        transactionType: transactionType,
        amount: amount,
        month: month,
      }),
    });

    if (!result.ok) {
      throw new Error("Failed to create transaction");
    }

    const data = await result.json();

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
