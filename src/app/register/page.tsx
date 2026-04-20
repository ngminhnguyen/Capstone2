"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RegisterForm from "@/components/register/RegisterForm";
import Step1 from "@/components/register/Step1";
import Step2 from "@/components/register/Step2";
import Result from "@/components/register/Result";
import { useEffect, useState } from "react";

export default function RegisterPage() {
    const [step, setStep] = useState(1);

    const goToStep = (newStep: number) => {
        setStep(newStep);
        window.history.pushState({ step: newStep }, "", `?step=${newStep}`);
    };

    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            if (event.state?.step) {
                setStep(event.state.step);
            } else {
                setStep(1);
            }
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#fdece4] text-[#4e0706]">
            <Navbar />

            {step === 1 && <RegisterForm setStep={goToStep} />}

            {step === 2 && (
                <Step1
                    nextStep={() => goToStep(3)}
                    prevStep={() => goToStep(1)}
                />
            )}

            {step === 3 && (
                <Step2
                    nextStep={() => goToStep(4)}
                    prevStep={() => goToStep(2)}
                />
            )}

            {step === 4 && <Result prevStep={() => goToStep(3)} />}

            <Footer />
        </div>
    );
}
