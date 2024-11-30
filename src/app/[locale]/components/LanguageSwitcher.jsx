import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from "next-intl";
import Image from "next/image";


const languages = [
    { code: "en", name: "English", flag: "/images/gb.png" },
    { code: "fr", name: "Français", flag: "/images/fr.png" },
];

const LanguageSwitcher = ({ className = "" }) => {
    const router = useRouter();
    const pathname = usePathname();

    const currentLocale = pathname.split("/")[1]; // Extract current locale from the URL

    const switchLanguage = (locale) => {
        const pathSegments = pathname.split("/");
        pathSegments[1] = locale; // Replace the locale in the URL path
        const newPath = pathSegments.join("/");
        router.push(newPath);
    };

    const currentLanguage = languages.find((lang) => lang.code === currentLocale);

    return (
        <div className={`relative flex items-center ${className}`}>
            {/* Dropdown */}
            <select
                value={currentLocale}
                onChange={(e) => switchLanguage(e.target.value)}
                className="appearance-none bg-transparent border-none cursor-pointer focus:outline-none flex items-center text-white"
            >
                {languages.map((lang) => (
                    <option
                        key={lang.code}
                        value={lang.code}
                        className="text-black bg-white" // Options in dropdown have white background, black text
                    >
                        {lang.code.toUpperCase()}
                    </option>
                ))}
            </select>

            {/* Selected Flag and Code */}
            {currentLanguage && (
                <div className="flex items-center ml-2">
                    <Image
                        src={currentLanguage.flag}
                        alt={`${currentLanguage.code} flag`}
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <span className="ml-2 text-white"></span>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;