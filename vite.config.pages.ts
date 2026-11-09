import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    base: "/Projet-CAS-Cheikh/",
    plugins: [react(), tailwindcss(), tsconfigPaths()],
    build: {
        outDir: "dist",
        emptyOutDir: true,
    },
});