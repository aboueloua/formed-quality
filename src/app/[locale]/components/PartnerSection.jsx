"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const partners = [
    {
        name: "Akdital",
        domain: "Equipements biomédicaux",
        logo: "/images/p1.jpeg",
    },
    {
        name: "Clinique cheikh MAELAININ",
        domain: "Contôle qualité",
        logo: "/images/p2.jpeg",
    },
    {
        name: "Oncorad group",
        domain: "Accompagnement en Radioprotection",
        logo: "/images/p3.jpeg",
    },
    {
        name: "centre Chorfi",
        domain: "Services hospitaliers",
        logo: "/images/p4.jpeg",
    },
];

const PartnersSection = () => {
    const t = useTranslations('Index');
    return (
        <section id="partners" className="py-16">
            {/* Separate background container for the partner section */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="container mx-auto px-8">
                    {/* Section Header */}
                    <h2 className="text-center text-4xl font-semibold mb-8 text-black">{t('NosPartenaires')}</h2>
                    <p className="text-center text-lg mb-12 text-black">
                        {t('partnerDesc')}.
                    </p>

                    {/* Partner Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-xl p-6 rounded-xl flex flex-col items-center text-center"
                            >
                                {/* Partner Logo */}
                                <div className="w-24 h-24 mb-4 overflow-hidden rounded-full border-4 border-cyan-500">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} Logo`}
                                        width={120}
                                        height={120}
                                        className="object-cover"
                                    />
                                </div>
                                {/* Partner Name */}
                                <h3 className="text-2xl font-medium mt-4 text-black">{partner.name}</h3>
                                {/* Partner Domain */}
                                <p className="text-black mt-2"></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
