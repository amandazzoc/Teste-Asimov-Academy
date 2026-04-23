import { Button } from "./Button";

export function Navbar() {
  return (
    <nav className="py-8 flex items-center justify-between bg-color-foreground lg:px-[100px]">
        <h1 className="logo text-2xl">ASIMOV</h1>
        <ul className="flex items-center gap-8 text-secondary-text">
            <li className="hover:text-primary cursor-pointer transition-colors">CURRÍCULO</li>
            <li className="hover:text-primary cursor-pointer transition-colors">INSTRUTORES</li>
            <li className="hover:text-primary cursor-pointer transition-colors">CURSOS</li>
            <li className="hover:text-primary cursor-pointer transition-colors">BLOG</li>
        </ul>
        <div>
            <Button variant="text" label="Entrar" />
            <Button variant="primary" label="Cadastrar" />
        </div>
    </nav>
  );
}