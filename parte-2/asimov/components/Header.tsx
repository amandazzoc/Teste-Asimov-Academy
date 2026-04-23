"use client"

import { CircleStarIcon, Clock10Icon, CpuIcon, SquareCodeIcon, UsersIcon } from "lucide-react";
import { Button } from "./Button";
import { AnimatedCodeBlock } from "./AnimatedCodeBlock";
import { BenefitCard } from "./BenefitCard";
import { Badge } from "./Badge";

export function Header() {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        
        currentTarget.style.setProperty('--mouse-x', `${clientX - left}px`);
        currentTarget.style.setProperty('--mouse-y', `${clientY - top}px`);
    };

    return (
        <section 
            className="relative w-full overflow-hidden" 
            onMouseMove={handleMouseMove}
        >

            <div 
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), 
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            />

            <div 
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(
                        600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                        rgba(255, 255, 255, 0.06), 
                        transparent 40%
                    )`
                }}
            />

            <header className="relative z-10 flex flex-col lg:flex-row items-center justify-between py-20 lg:px-[100px] px-[20px] min-h-[calc(100vh-106px)] gap-12">
                <div className="flex flex-col gap-7 w-full lg:w-[40%]">
                    <Badge icon={SquareCodeIcon} text="INSCRIÇÕES ABERTAS" />
                    <h1 className="text-4xl lg:text-6xl font-bold">
                        Aprenda Python do zero e construa projetos reais com IA
                    </h1>
                    <p className="text-base lg:text-lg text-secondary-text">
                        O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <BenefitCard icon={Clock10Icon} text="+40 horas de conteúdo direto ao ponto" />
                        <BenefitCard icon={CpuIcon} text="Projetos com Python + IA desde o módulo 1" />
                        <BenefitCard icon={UsersIcon} text="Suporte da comunidade com +20.000 alunos" />
                        <BenefitCard icon={CircleStarIcon} text="Certificado reconhecido pelo mercado" />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        <Button variant="primary" size="lg" label="Quero começar agora" />
                        <Button variant="secondary" size="lg" label="Ver o que vou aprender" />
                    </div>
                </div>
                <div className="w-full lg:w-[60%] flex justify-center">
                    <AnimatedCodeBlock />
                </div>
            </header>
        </section>
    );
}