"use client"
import React from "react";
import Image from "next/image";
import {useTranslations} from 'next-intl';


import { TypeAnimation } from 'react-type-animation';


    

const PresentationSection = () => {
    const t = useTranslations('Index');
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-3xl lg:text-5xl font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-950">
                            Formed Quality
                        </span>
                        <br></br>
                        <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Assistance & conseils',
                                    1000, // wait 1s before replacing
                                    'Contrôle qualité',
                                    1000,
                                    'Formation',
                                    1000,
                                    'Equipements Biomédicaux',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
                        FORMED QUALITY {t('title')}
                    </p>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[black] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src = "/images/[removal.ai]_944829fb-665c-4431-8b17-dee36c20a405-107_pf2019_galerie_1576769746-dd407f.png"
                        alt = "test image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}/>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default PresentationSection