"use client"

import { CircleStarIcon, Clock10Icon, CpuIcon, SquareCodeIcon, UsersIcon } from "lucide-react";
import { Button } from "./Button";
import { AnimatedCodeBlock } from "./AnimatedCodeBlock";
import { BenefitCard } from "./BenefitCard";
import { Badge } from "./Badge";

export function Header() {
    return (
        <header className="flex items-center justify-between">
            <div className="flex flex-col gap-7 w-1/2">
                <Badge icon={SquareCodeIcon} text="INSCRIÇÕES ABERTAS" />
                <h1 className="text-6xl font-bold">
                    Aprenda Python do zero e construa projetos reais com IA
                </h1>
                <p className="text-lg text-secondary-text">
                    O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação
                </p>
                <div className="grid grid-cols-2 gap-5">
                    <BenefitCard icon={Clock10Icon} text="+40 horas de conteúdo direto ao ponto" />
                    <BenefitCard icon={CpuIcon} text="Projetos com Python + IA desde o módulo 1" />
                    <BenefitCard icon={UsersIcon} text="Suporte da comunidade com +20.000 alunos" />
                    <BenefitCard icon={CircleStarIcon} text="Certificado reconhecido pelo mercado" />
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="primary" size="lg" label="Quero começar agora" />
                    <Button variant="secondary" size="lg" label="Ver o que vou aprender" />
                </div>
            </div>
            <div className="w-1/2 flex justify-center">
                <AnimatedCodeBlock />
            </div>
        </header>
    );
}