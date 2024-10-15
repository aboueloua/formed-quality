import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useLocale } from "next-intl";


const LanguageSwitcher = () => {
    const t = useTranslations();
    const router = useRouter();
    const locale = useLocale();

    const changeLanguage = (e) => {
        const locale = e.target.value;
        console.log(locale)
        router.push(locale);
      };
    return (
        <div class = "bg-[#121212] bg-opacity-100 margin-left: auto;">
            <select class = "bg-[#121212] bg-opacity-100" onChange={changeLanguage} defaultValue={router.locale}>
                <option value="en">English</option>
                <option value="fr">Français</option>
            </select>
        </div>
    )
}

export default LanguageSwitcher;