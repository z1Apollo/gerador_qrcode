import axios from "axios"
import type { QRParams } from "../Types/qr.tsx"

const BASE_URL = "https://api.qrserver.com/v1/create-qr-code/"

export const generateQRCode = async (params: QRParams): Promise<string> => {

    try {
        const { data } = await axios.get(BASE_URL, {
            params: {
                ...params,
                size: "600x600"
            }, 
            responseType: "blob"
        })

        return URL.createObjectURL(data)
    } catch (err) {
        console.error("Erro ao gerar QRCode:", err)
        throw new Error("Erro ao gerar QRCode:")
    }
    
}