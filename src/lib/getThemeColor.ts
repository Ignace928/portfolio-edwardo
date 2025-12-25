// utils/getThemeColors.ts
export function getThemeColors() {
  const root = typeof window !== "undefined" ? document.documentElement : null;
  if (!root) return {};

  const styles = getComputedStyle(root);
  const themeVars = [
    "--background",
    "--foreground",
    "--primary",
    "--primary-foreground",
    "--secondary",
    "--secondary-foreground",
    "--accent",
    "--accent-foreground",
    "--destructive",
    "--border",
    "--input",
    "--ring",
    // ajoute ici toutes les variables dont tu as besoin
  ];

  const colors: Record<string, string> = {};
  themeVars.forEach((v) => {
    const value = styles.getPropertyValue(v).trim();
    if (value) colors[v.replace("--", "")] = value;
  });

  return colors;
}
