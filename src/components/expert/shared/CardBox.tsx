"use client";
import { Card } from "@/components/expert/ui/card";

interface MyAppProps {
    children: React.ReactNode;
    className?: string;
}
const CardBox: React.FC<MyAppProps> = ({ children, className }) => {
    return (
        <Card className={`card bg-background shadow-xs ${className}`}>
            {children}
        </Card>
    );
};

export default CardBox;
