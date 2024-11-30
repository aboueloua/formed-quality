"use client";

import React from "react";
import Image from "next/image";
import {useTranslations} from 'next-intl';


const partners = [
    {
        name: "Partner A",
        domain: "Equipements biomédicaux",
        logo: "/partners/partner-a.png",
    },
    {
        name: "Partner B",
        domain: "Contôle qualité",
        logo: "/partners/partner-b.png",
    },
    {
        name: "Partner C",
        domain: "Accompagnement en Radioprotection",
        logo: "/partners/partner-c.png",
    },
];

const PartnersSection = () => {
    const t = useTranslations('Index');
    return (
        <section id ="partners" className="py-16">
            <div className="container mx-auto px-8">
                {/* Section Header */}
                <h2 className="text-center text-4xl font-semibold mb-8 text-white">{t('NosPartenaires')}</h2>
                <p className="text-center text-lg mb-12 text-gray-300">
                    {t('partnerDesc')}.
                </p>

                {/* Partner Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="bg-[#1e1e1e] p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                        >
                            {/* Partner Logo */}
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} Logo`}
                                width={120}
                                height={120}
                                className="rounded-full"
                            />
                            {/* Partner Name */}
                            <h3 className="text-2xl font-medium mt-4 text-white">{partner.name}</h3>
                            {/* Partner Domain */}
                            <p className="text-gray-400 mt-2">{t(partner.domain)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
