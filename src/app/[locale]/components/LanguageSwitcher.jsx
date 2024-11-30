import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const languages = [
    { code: "en", name: "EN", flag: "/images/gb.png" },
    { code: "fr", name: "FR", flag: "/images/fr.png" },
];

const LanguageSwitcher = ({ className = "" }) => {
    const router = useRouter();
    const pathname = usePathname();

    const currentLocale = pathname.split("/")[1]; // Extract current locale from the URL
    const currentLanguage = languages.find((lang) => lang.code === currentLocale) || languages[0];

    const switchLanguage = (locale) => {
        const pathSegments = pathname.split("/");
        pathSegments[1] = locale; // Replace the locale in the URL path
        const newPath = pathSegments.join("/");
        router.push(newPath);
    };

    return (
        <div className={`relative flex items-center ${className}`}>
            {/* Selected Flag and Language Name */}
            {currentLanguage && (
                <div className="flex items-center ml-2">
                    <Image
                        src={currentLanguage.flag}
                        alt={`${currentLanguage.name} flag`}
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <span className="ml-2 text-white"></span>
                </div>
            )}

            {/* Dropdown */}
            <select
                aria-label="Select language"
                value={currentLocale}
                onChange={(e) => switchLanguage(e.target.value)}
                className="appearance-none bg-black text-white border-none cursor-pointer focus:outline-none p-2 rounded"
            >
                {languages.map((lang) => (
                    <option
                        key={lang.code}
                        value={lang.code}
                        className="bg-black text-white hover:bg-gray-800" // Stylish options
                    >
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSwitcher;
