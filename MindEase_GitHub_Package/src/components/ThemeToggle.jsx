import { Moon, Sun } from "lucide-react"
import useTheme from "@/hooks/useTheme"

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme()
  const dark = theme === "dark"

  return (
    <button type="button" onClick={toggleTheme}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-foreground/70 transition hover:text-primary ${className}`}>
      {dark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
    </button>
  )
}
