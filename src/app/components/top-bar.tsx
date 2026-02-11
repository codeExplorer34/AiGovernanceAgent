import { Search, Moon, Sun, ChevronDown } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
<<<<<<< HEAD
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
=======
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
>>>>>>> 57f4e505e36fdaf9a12cd1c15c7823a25daf6aca
} from "./ui/dropdown-menu";
import { useTheme } from "./theme-provider";

interface TopBarProps {
  timeFilter: string;
  onTimeFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function TopBar({ timeFilter, onTimeFilterChange, searchQuery, onSearchChange }: TopBarProps) {
  const { theme, setTheme } = useTheme();

  const timeFilterOptions = [
    { value: "today", label: "Today" },
    { value: "7days", label: "Last 7 Days" },
    { value: "30days", label: "Last 30 Days" }
  ];

  const currentFilterLabel = timeFilterOptions.find(opt => opt.value === timeFilter)?.label || "Last 7 Days";

  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
<<<<<<< HEAD
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Governance</span>
          <span className="opacity-30">/</span>
          <span className="text-foreground font-medium">{currentFilterLabel}</span>
        </div>
      </div>
=======
>>>>>>> 57f4e505e36fdaf9a12cd1c15c7823a25daf6aca
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search AI events, policies, models..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              {currentFilterLabel}
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {timeFilterOptions.map((option) => (
<<<<<<< HEAD
              <DropdownMenuItem
=======
              <DropdownMenuItem 
>>>>>>> 57f4e505e36fdaf9a12cd1c15c7823a25daf6aca
                key={option.value}
                onClick={() => onTimeFilterChange(option.value)}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-blue-600 text-white text-xs">CO</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="text-sm">Compliance Officer</div>
                <div className="text-xs text-muted-foreground">admin@company.com</div>
              </div>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
