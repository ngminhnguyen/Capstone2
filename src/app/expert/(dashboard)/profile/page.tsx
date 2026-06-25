"use client";
import Image from "next/image";
import CardBox from "@/components/expert/shared/CardBox";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/expert/ui/dialog";
import { useState, useEffect } from "react";
import BreadcrumbComp from "@/app/expert/layout/shared/breadcrumb/BreadcrumbComp";
import { Button } from "@/components/expert/ui/button";
import { Input } from "@/components/expert/ui/input";
import { Label } from "@/components/expert/ui/label";

export default function UserProfile() {
    const [openModal, setOpenModal] = useState(false);
    const [modalType, setModalType] = useState<"personal" | "address" | null>(
        null,
    );

    const BCrumb = [
        {
            to: "/",
            title: "Home",
        },
        {
            title: "Userprofile",
        },
    ];

    const [personal, setPersonal] = useState({
        firstName: "Mathew",
        lastName: "Anderson",
        email: "mathew.anderson@gmail.com",
        phone: "(347) 528-1947",
        position: "Expert",
        facebook: "#!",
        twitter: "#!",
        github: "#!",
        dribbble: "#!",
    });

    const [address, setAddress] = useState({
        location: "United States",
        state: "San Diego, California, United States",
        pin: "92101",
        zip: "30303",
        taxNo: "GA45273910",
    });

    const [tempPersonal, setTempPersonal] = useState(personal);
    const [tempAddress, setTempAddress] = useState(address);

    useEffect(() => {
        if (openModal && modalType === "personal") {
            setTempPersonal(personal);
        }
        if (openModal && modalType === "address") {
            setTempAddress(address);
        }
    }, [openModal, modalType, personal, address]);

    const handleSave = () => {
        if (modalType === "personal") {
            setPersonal(tempPersonal);
        } else if (modalType === "address") {
            setAddress(tempAddress);
        }
        setOpenModal(false);
    };

    const socialLinks = [
        { href: "#!", icon: "streamline-logos:facebook-logo-2-solid" },
        { href: "#!", icon: "streamline-logos:x-twitter-logo-solid" },
        { href: "#!", icon: "ion:logo-github" },
        { href: "#!", icon: "streamline-flex:dribble-logo-remix" },
    ];

    return (
        <>
            <BreadcrumbComp title="User Profile" items={BCrumb} />
            <div className="flex flex-col gap-6">
                <CardBox className="p-6 bg-white border border-fuchsia-200 rounded-2xl shadow-sm overflow-hidden">
                    <div className="flex flex-col sm:flex-row items-center gap-6 rounded-xl relative w-full words-break">
                        <div>
                            <Image
                                src={"/images/user.png"}
                                alt="image"
                                width={80}
                                height={80}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center sm:justify-between items-center w-full">
                            <div className="flex flex-col sm:text-left text-center gap-1.5">
                                <h5 className="text-2xl font-bold text-fuchsia-950">
                                    {personal.firstName} {personal.lastName}
                                </h5>
                                <div className="flex flex-wrap items-center gap-1 md:gap-3">
                                    <p className="text-xl text-fuchsia-500">
                                        {personal.position}
                                    </p>
                                    <div className="hidden xl:block h-4 w-px bg-fuchsia-200"></div>
                                    <p className="text-xl text-fuchsia-500">
                                        {address.location}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {socialLinks.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-fuchsia-200 bg-white shadow-sm hover:bg-fuchsia-50 hover:text-fuchsia-700 transition-all"
                                    >
                                        <Icon
                                            icon={item.icon}
                                            width="20"
                                            height="20"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardBox>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div className="w-full rounded-2xl border border-fuchsia-200 bg-white p-5 md:p-6 shadow-sm space-y-6">
                        <h5 className="text-xl font-semibold text-fuchsia-950">
                            Personal Information
                        </h5>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                            <div>
                                <p className="text-xs text-fuchsia-500">
                                    First Name
                                </p>
                                <p className="text-fuchsia-900 font-medium">
                                    {personal.firstName}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-fuchsia-500">
                                    Last Name
                                </p>
                                <p className="text-fuchsia-900 font-medium">
                                    {personal.lastName}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-fuchsia-500">
                                    Email
                                </p>
                                <p className="text-fuchsia-900 font-medium">
                                    {personal.email}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-fuchsia-500">
                                    Phone
                                </p>
                                <p className="text-fuchsia-900 font-medium">
                                    {personal.phone}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-fuchsia-500">
                                    Position
                                </p>
                                <p className="text-fuchsia-900 font-medium">
                                    {personal.position}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button
                                onClick={() => {
                                    setModalType("personal");
                                    setOpenModal(true);
                                }}
                                className="flex items-center gap-2 rounded-xl bg-fuchsia-900 px-4 py-2 text-white hover:bg-fuchsia-800 transition"
                            >
                                <Icon
                                    icon="ic:outline-edit"
                                    width="18"
                                    height="18"
                                />{" "}
                                Edit
                            </Button>
                        </div>
                    </div>

                    <div className="w-full rounded-2xl border border-fuchsia-200 bg-white p-5 md:p-6 shadow-sm space-y-6">
                        <h5 className="text-xl font-semibold text-fuchsia-950">
                            Address Details
                        </h5>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                            <div>
                                <p className="text-xl font-medium text-fuchsia-500">
                                    Location
                                </p>
                                <p className="text-fuchsia-900 font-medium">
                                    {address.location}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-fuchsia-500">
                                    Province / State
                                </p>
                                <p className="text-fuchsia-900 font-medium">
                                    {address.state}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-fuchsia-500">
                                    PIN Code
                                </p>
                                <p className="text-fuchsia-900 font-medium">
                                    {address.pin}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-fuchsia-500">ZIP</p>
                                <p className="text-fuchsia-900 font-medium">
                                    {address.zip}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-fuchsia-500">
                                    Federal Tax No.
                                </p>
                                <p className="text-fuchsia-900 font-medium">
                                    {address.taxNo}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button
                                onClick={() => {
                                    setModalType("address");
                                    setOpenModal(true);
                                }}
                                color={"primary"}
                                className="flex items-center gap-1.5 rounded-md"
                            >
                                <Icon
                                    icon="ic:outline-edit"
                                    width="18"
                                    height="18"
                                />{" "}
                                Edit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="mb-4">
                            {modalType === "personal"
                                ? "Edit Personal Information"
                                : "Edit Address Details"}
                        </DialogTitle>
                    </DialogHeader>

                    {modalType === "personal" ? (
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    placeholder="First Name"
                                    value={tempPersonal.firstName}
                                    onChange={(e) =>
                                        setTempPersonal({
                                            ...tempPersonal,
                                            firstName: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    placeholder="Last Name"
                                    value={tempPersonal.lastName}
                                    onChange={(e) =>
                                        setTempPersonal({
                                            ...tempPersonal,
                                            lastName: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="Email"
                                    value={tempPersonal.email}
                                    onChange={(e) =>
                                        setTempPersonal({
                                            ...tempPersonal,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    placeholder="Phone"
                                    value={tempPersonal.phone}
                                    onChange={(e) =>
                                        setTempPersonal({
                                            ...tempPersonal,
                                            phone: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="position">Position</Label>
                                <Input
                                    id="position"
                                    placeholder="Position"
                                    value={tempPersonal.position}
                                    onChange={(e) =>
                                        setTempPersonal({
                                            ...tempPersonal,
                                            position: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="facebook">Facebook URL</Label>
                                <Input
                                    id="facebook"
                                    placeholder="Facebook URL"
                                    value={tempPersonal.facebook}
                                    onChange={(e) =>
                                        setTempPersonal({
                                            ...tempPersonal,
                                            facebook: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="twitter">Twitter URL</Label>
                                <Input
                                    id="twitter"
                                    placeholder="Twitter URL"
                                    value={tempPersonal.twitter}
                                    onChange={(e) =>
                                        setTempPersonal({
                                            ...tempPersonal,
                                            twitter: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="github">GitHub URL</Label>
                                <Input
                                    id="github"
                                    placeholder="GitHub URL"
                                    value={tempPersonal.github}
                                    onChange={(e) =>
                                        setTempPersonal({
                                            ...tempPersonal,
                                            github: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="dribbble">Dribbble URL</Label>
                                <Input
                                    id="dribbble"
                                    placeholder="Dribbble URL"
                                    value={tempPersonal.dribbble}
                                    onChange={(e) =>
                                        setTempPersonal({
                                            ...tempPersonal,
                                            dribbble: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="location">Location</Label>
                                <Input
                                    id="location"
                                    placeholder="Location"
                                    value={tempAddress.location}
                                    onChange={(e) =>
                                        setTempAddress({
                                            ...tempAddress,
                                            location: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="state">Province / State</Label>
                                <Input
                                    id="state"
                                    placeholder="Province / State"
                                    value={tempAddress.state}
                                    onChange={(e) =>
                                        setTempAddress({
                                            ...tempAddress,
                                            state: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="pin">PIN Code</Label>
                                <Input
                                    id="pin"
                                    placeholder="PIN Code"
                                    value={tempAddress.pin}
                                    onChange={(e) =>
                                        setTempAddress({
                                            ...tempAddress,
                                            pin: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="zip">ZIP</Label>
                                <Input
                                    id="zip"
                                    placeholder="ZIP"
                                    value={tempAddress.zip}
                                    onChange={(e) =>
                                        setTempAddress({
                                            ...tempAddress,
                                            zip: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="taxNo">Federal Tax No.</Label>
                                <Input
                                    id="taxNo"
                                    placeholder="Federal Tax No."
                                    value={tempAddress.taxNo}
                                    onChange={(e) =>
                                        setTempAddress({
                                            ...tempAddress,
                                            taxNo: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    )}

                    <DialogFooter className="flex gap-2 mt-4">
                        <Button
                            color={"primary"}
                            className="rounded-md"
                            onClick={handleSave}
                        >
                            Save Changes
                        </Button>
                        <Button
                            color={"lighterror"}
                            className="rounded-md bg-lighterror dark:bg-darkerror text-error hover:bg-error hover:text-white"
                            onClick={() => setOpenModal(false)}
                        >
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
