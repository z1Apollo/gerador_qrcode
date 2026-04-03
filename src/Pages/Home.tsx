import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail, MdQrCode2, MdSaveAlt } from "react-icons/md"
import { generateQRCode } from "../Services/api"

export const Home = () => {
    const [url, setUrl] = useState("")
    const [qrSrc, setQrSrc] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!url) return
        setLoading(true)
        setError(null)
        try {
            const imageUrl = await generateQRCode({ data: url, format: "png" })
            setQrSrc(imageUrl)
        } catch {
            setError("Erro ao gerar QR Code. Verifique o link...")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <header className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-15 py-4 sm:py-5 md:py-7">
                <h2 className="font-primary font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    <span className="text-azul-glacial">&lt;</span>
                    Apollo
                    <span className="text-azul-glacial">/&gt;</span>
                </h2>

                <nav className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    <a className="text-xl sm:text-2xl md:text-3xl hover:text-azul-glacial hover:-translate-y-1 hover:rotate-6 transition-all delay-110" target="_blank" href="https://www.linkedin.com/in/z1apollo/">
                        <FaLinkedin />
                    </a>
                    <a className="text-xl sm:text-2xl md:text-3xl hover:text-azul-glacial hover:-translate-y-1 hover:rotate-6 transition-all delay-110" target="_blank" href="https://github.com/z1Apollo">
                        <FaGithub />
                    </a>
                    <a className="text-xl sm:text-2xl md:text-3xl hover:text-azul-glacial hover:-translate-y-1 hover:rotate-6 transition-all delay-110" target="_blank" href="mailto:pedroederson241@gmail.com">
                        <MdEmail />
                    </a>
                </nav>

                <button className="text-white bg-azul-escuro py-1.5 px-3 sm:py-2 sm:px-4 md:py-2.5 md:px-5 rounded-2xl font-primary tracking-widest font-medium cursor-pointer hover:scale-102 text-xs sm:text-sm md:text-base">
                    Contato
                </button>
            </header>

            <main className="flex flex-col lg:flex-row mt-8 sm:mt-10 lg:mt-15 gap-8 sm:gap-10 lg:gap-20 xl:gap-50 px-4 sm:px-8 md:px-12 lg:px-15 pb-10">

                <div className="w-full lg:w-1/2">
                    <section>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
                            Crie seu QR Code <br /> em segundos
                        </h1>
                        <p className="pt-4 sm:pt-5 text-base sm:text-lg md:text-xl lg:text-2xl text-cinza-secondary">
                            Transforme qualquer link em um código QR escaneável.{" "}
                            <br className="hidden md:block" />
                            Simples, rápido e seguro.
                        </p>
                    </section>

                    <form onSubmit={handleSubmit} className="pt-8 sm:pt-10 md:pt-12 lg:pt-14">
                        <p className="text-[11px] sm:text-[12px] text-cinza-secondary tracking-widest pb-2">
                            ENTRADA DE URL
                        </p>
                        <input
                            className="bg-cinza-antra outline-none w-full h-12 sm:h-14 md:h-16 lg:h-20 text-base sm:text-lg md:text-xl lg:text-2xl pl-4"
                            type="text"
                            placeholder="https://sua-url-aqui.com"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />

                        {error && (
                            <p className="text-red-500 text-xs sm:text-sm mt-2">{error}</p>
                        )}

                        <div className="mt-4 sm:mt-5">
                            <button
                                type="submit"
                                className="flex items-center justify-center gap-1.5 bg-azul-escuro text-sm sm:text-[16px] md:text-[17px] lg:text-[18px] font-medium rounded-sm py-3 sm:py-3.5 lg:py-4 px-8 sm:px-12 lg:px-20 cursor-pointer w-full lg:w-auto disabled:opacity-50"
                                disabled={loading}
                            >
                                <MdQrCode2 />
                                {loading ? "GERANDO..." : "GERAR QR CODE"}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-cinza-antra w-full lg:w-135 rounded-sm">
                    <section className="bg-cinza-bg rounded-sm m-1">
                        {qrSrc ? (
                            <img
                                className="p-1 w-full aspect-square object-contain"
                                src={qrSrc}
                                alt="Seu QR Code!"
                            />
                        ) : (
                            <img
                                className="p-1 w-full aspect-square object-contain"
                                src="https://api.qrserver.com/v1/create-qr-code/?data=https://github.com/z1Apollo&size=600x600"
                                alt="Meu GitHub"
                            />
                        )}
                    </section>

                    <div className="flex justify-center py-3 sm:py-4 md:py-5 lg:pt-6">
                        {qrSrc ? (
                            <a
                                href={qrSrc}
                                download="qrcode.png"
                                className="flex items-center gap-2 sm:gap-3 cursor-pointer bg-cinza-bg py-2.5 sm:py-3 px-8 sm:px-12 lg:px-20 rounded-sm text-[14px] sm:text-[16px] lg:text-[20px] font-semibold"
                            >
                                <MdSaveAlt /> Baixar PNG
                            </a>
                        ) : (
                            <p className="flex items-center gap-2 sm:gap-3 cursor-not-allowed bg-cinza-bg py-2.5 sm:py-3 px-8 sm:px-12 lg:px-20 rounded-sm text-[14px] sm:text-[16px] lg:text-[20px] font-semibold opacity-50">
                                <MdSaveAlt /> Fictício
                            </p>
                        )}
                    </div>
                </div>
            </main>

            <footer className="flex flex-col items-center justify-center mt-3 sm:mt-10 lg:mt-20 mb-4 font-medium px-4 sm:px-8 text-center">
                <h3 className="text-xs sm:text-sm md:text-base">
                    Sistema de geração de QR Code feito para praticar o consumo de API com AXIOS.
                </h3>
            </footer>
        </>
    )
}
