"use client";

import RegisterForm from "@/components/register/RegisterForm";
import Step1 from "@/components/register/Step1";
import Step2 from "@/components/register/Step2";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { RegisterData } from "@/typeData/register";

export default function RegisterPage() {
    const [step, setStep] = useState(1);

    const STEP = {
        REGISTER: 1,
        CHILD: 2,
        ALLERGY: 3,
    };

    const [formData, setFormData] = useState<RegisterData>({
        parent: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            terms: false,
        },
        children: [
            {
                name: "",
                weight: "",
                height: "",
                dob: "",
                gender: "",
            },
        ],
        allergy: null,
    });

    const router = useRouter();

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

    const goToParentDashboard = () => {
        router.replace("/parent/dashboard");
    };

    return (
        <div className="min-h-screen bg-[#fdece4] text-[#4e0706]">
            {step === STEP.REGISTER && (
                <RegisterForm
                    setStep={goToStep}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

            {step === STEP.CHILD && (
                <Step1
                    nextStep={() => goToStep(STEP.ALLERGY)}
                    prevStep={() => goToStep(STEP.REGISTER)}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

            {step === STEP.ALLERGY && (
                <Step2
                    nextStep={goToParentDashboard}
                    prevStep={() => goToStep(STEP.CHILD)}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
        </div>
    );
}
