"use client";
import Image from 'next/image'
import React, { useTransition, useState } from 'react'
import { useTranslations } from 'next-intl';

const AboutSection = () => {
  const t = useTranslations('Index');
  const [tab, setTab] = useState("Nos atouts");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section id="about" className="py-16">
      {/* Outer container with white background, shadow, and padding */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="container mx-auto px-8">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-black">{t('aboutUs')}</h2>
          </div>
          
          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left side - Image */}
            <div className="flex justify-center items-center">
              <Image 
                src="/images/about_us.png"
                width={500}
                height={500}
                alt="About Us Image"
              />
            </div>

            {/* Right side - Text */}
            <div className="flex flex-col justify-center">
              <p className="text-black lg:text-lg">
                FORMED QUALITY {t('descAboutUS')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
