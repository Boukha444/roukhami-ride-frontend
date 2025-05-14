
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, changeLanguage, availableLanguages } = useLanguage();
  
  // Get the current language name
  const currentLanguage = availableLanguages.find(lang => lang.code === language)?.name;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 gap-1 px-2">
          <span className="text-xs font-medium">{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`flex items-center gap-2 ${language === lang.code ? 'font-medium text-roukhami-blue' : ''}`}
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
