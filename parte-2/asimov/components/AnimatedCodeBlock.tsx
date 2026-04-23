"use client"

import { CheckCircle2Icon, LockIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function AnimatedCodeBlock() {
    const codeSnippet = `import neural_core as nc
from ai_models import DeepThinker

# Initialize the AI Engine
engine = nc.Engine(mode='learning')
model = DeepThinker(parameters='optimal')

def build_future(student):
    if student.status == 'ready':
        skills = model.train(student, hours=40)
        projects = engine.generate_portfolio(skills)

        return {
            'career': 'accelerated',
            'portfolio': projects,
            'ai_mastery': True
        }

raise Exception("Start now.")`;

    const [displayedText, setDisplayedText] = useState("");
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < codeSnippet.length) {
                setDisplayedText(codeSnippet.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
                setIsFinished(true); 
            }
        }, 20); 

        return () => clearInterval(typingInterval);
    }, []);

    const renderColoredText = (text: string) => {
        const keywords = ['import', 'as', 'from', 'def', 'if', 'return', 'raise', 'True'];
        
        const regex = /(#.*|'[^']*'|"[^"]*"|\b(?:import|as|from|def|if|return|raise|True)\b)/g;
        
        const parts = text.split(regex);
        
        return parts.map((part, index) => {
            if (!part) return null;

            // Regra 1: Comentários
            if (part.startsWith('#')) {
                return <span key={index} className="text-secondary-text">{part}</span>;
            }
            
            // Regra 2: Strings (aspas simples ou duplas)
            if (part.startsWith("'") || part.startsWith('"')) {
                return <span key={index} className="text-primary">{part}</span>;
            }
            
            // Regra 3: Palavras-chave
            if (keywords.includes(part)) {
                return <span key={index} className="text-green-300">{part}</span>;
            }
            
            // Regra 4: Restante do texto (variáveis, pontuação, espaços) mantém a cor padrão
            return part; 
        });
    };

    return (
        <div className="relative w-full max-w-[552px] bg-[#1a1b20] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center px-4 py-3 bg-[#1e1f25] border-b border-gray-800">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 flex justify-center items-center gap-2 text-gray-500 text-xs font-mono">
                    <LockIcon size={12} />
                    neural_engine.py
                </div>
            </div>

            <div className="p-6 text-sm font-mono text-gray-300 h-[425px] overflow-hidden">
                <pre className="whitespace-pre-wrap">
                    <code>
                        {renderColoredText(displayedText)}
                        <span className="inline-block w-[8px] h-[15px] bg-primary ml-1 animate-pulse translate-y-[2px]"></span>
                    </code>
                </pre>
            </div>

            <div className={`absolute bottom-6 right-6 bg-[#131418] border border-gray-700/50 p-4 rounded-xl shadow-xl flex items-center gap-4 transition-all duration-200 transform ${isFinished ? 'translate-y-0 opacity-100 animate-bounce' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
                <div className="bg-primary/10 p-2 rounded-full border border-primary/90">
                    <CheckCircle2Icon className="text-primary" size={20} />
                </div>
                <div>
                    <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-1">Build Status</p>
                    <p className="text-primary text-sm font-semibold">Success: AI Model Deployed</p>
                </div>
            </div>
        </div>
    );
}
