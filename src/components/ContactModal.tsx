import type { ContactModalProps } from "../Services/contactModa"

export const ContactModal = ({ onClose }: ContactModalProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const name = (form.elements.namedItem("name") as HTMLInputElement).value
        const subject = (form.elements.namedItem("subject") as HTMLInputElement).value
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

        const text = `Olá! Meu nome é *${name}*.%0A%0A*Assunto:* ${subject}%0A%0A*Mensagem:* ${message}`
        const phone = "5585994000891"

        window.open(`https://wa.me/${phone}?text=${text}`, "_blank")
        onClose()
    }

    return (
        <>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
                onClick={onClose}
            >
                <div
                    className="bg-cinza-bg w-full max-w-lg rounded-sm p-8 relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold tracking-wide">Entre em contato</h2>
                        <button
                            onClick={onClose}
                            className="text-cinza-secondary hover:text-white transition-colors text-2xl cursor-pointer"
                        >
                            ✕
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-[11px] text-cinza-secondary tracking-widest">NOME</label>
                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="Seu nome"
                                className="bg-cinza-antra outline-none h-12 pl-4 text-base rounded-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-[11px] text-cinza-secondary tracking-widest">ASSUNTO</label>
                            <input
                                name="subject"
                                type="text"
                                required
                                placeholder="Sobre o que deseja falar?"
                                className="bg-cinza-antra outline-none h-12 pl-4 text-base rounded-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-[11px] text-cinza-secondary tracking-widest">MENSAGEM</label>
                            <textarea
                                name="message"
                                required
                                placeholder="Escreva sua mensagem..."
                                rows={4}
                                className="bg-cinza-antra outline-none pl-4 pt-3 text-base rounded-sm resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-2 bg-azul-escuro text-white font-medium py-3 rounded-sm tracking-widest text-sm hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            ENVIAR VIA WHATSAPP
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}