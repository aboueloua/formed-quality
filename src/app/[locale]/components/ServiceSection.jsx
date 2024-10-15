import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
  {
    href: "#formation",
    image: "/images/f555.webp",
    title: "Formation",
    description : (
      <ul className='list-disc pl-2'>
          <li>Radioprotection des travailleurs en imagerie médicale.</li>  
          <li>Radioprotection des travailleurs en Radiothérapie.</li>
          <li>Radioprotection des travailleurs en cardiologie interventionnelle.</li>
          <li>Radioprotection en radiologie dentaire.</li>
          <li>Radioprotection des patients.</li>
          <li>Radioprotection industrielle.</li>
          <li>Formation des Personnes Compétentes en Radioprotection (PCR).</li>
          <li>Techniques des irradiations en imagerie médicale.</li>
          <li>Techniques des irradiations en radiothérapie.</li>
      </ul>
    ),
  },
  {
    href: "#equipements",
    image: "/images/f77.jpeg",
    title: "Equipements biomédicaux",
    description : (
      <ul className='list-disc pl-2'>
          <li>Commercialisation des accessoires de la radioprotection en Médecine
nucléaire, Radiothérapie, Radiologie.</li>  
          <li>Commercialisation des dispositifs biomédicaux.</li>
      </ul>
    ),
  },
  {
    href: "#ControleQualite",
    image: "/images/control.jpeg",
    title: "Contôle qualité",
    description : (
      <ul className='list-disc pl-2'>
          <li>Contrôle qualité des appariels de la radiologie médicale : Radiologie
Conventionnelle, Mammographie, Scanner.</li>  
          <li>Contrôle qualité des appariels de la médecine nucléaire : Activimètre, SPECT-
CT, PET.</li>
<li>Contrôle qualité des appariels de la radiothérapie : Accélérateur linéaire
médicale, Projecteur de la source et TPS.</li>
<li>Commissionning et configuration des TPS en Radiothérapie.</li>  
<li>Calibration absolue de l’accélérateur linéaire.</li>
      </ul>
    ),
  },
  {
    href: "#AccRadioprotection",
    image: "/images/acc2.png",
    title: "Accompagnement en Radioprotection",
    description : (
      <ul className='list-disc pl-2'>
        <li>Calcul des épaisseurs de blindage (Note de calcul).</li>
        <li>Rédaction des rapports de conformité.</li>
        <li>Les équipements de protection individuelle (EPI).</li>
        <li>Système de signalisation.</li>
        <li>Etablir le zonage radiologique.</li>
        <li>Contrôle du blindage et mise en service.</li>
        <li>Travaux de plombage des murs et des portes sur la base des calculs des
épaisseurs réalisées en Radiologie et médecine nucléaire.</li>
<li>Conception && calcul des épaisseurs des murs en Radiothérapie.</li>
<li>Conception && calcul des épaisseurs des murs en médecine nucléaire.</li>
        
      </ul>
    ),
  }
  
  

]

const ServiceSection = () => {
  return (
    <>
        <h2 id = "services" className="text-center text-4xl font-bold text-white mt-4 mb-4">
            Nos services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {
            services.map((service, index) => (
              <div key={index}>
                <ServiceCard imageUrl={service.image} title={service.title} href={service.href} description={service.description} />
              </div>
            ))
          }
          
        </div>
        
    </>
  )
}

export default ServiceSection