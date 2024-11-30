"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const styles = {
  container: {
    textAlign: 'center',
  },
  button: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto',
  },
};

const ServiceCard = ({ imageUrl, title, href, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Image Section */}
      <div className="relative h-80 md:h-xl group">
        <Link href={href}>
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="contain"
            alt={title}
          />
        </Link>
        {/* Overlay for hover effect */}
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[white] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-6 px-4 text-black rounded-b-xl">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <button onClick={toggleExpand} style={styles.button} className="text-lg">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {isExpanded && <p>{description}</p>}
      </div>
    </div>
  );
};

export default ServiceCard;
