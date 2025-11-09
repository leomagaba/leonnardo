{** @type {import('tailwindcss').Config} */
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,    "noEmit": true,    "jsx": "react-jsx",    "strict": true,    "noUnusedLocals": true,    "noUnusedParameters": true,    "noFallthroughCasesInSwitch": true,    "forceConsistentCasingInFileNames": true  },  "include": ["src"],  "references": [    { "path": "./tsconfig.node.json" }  ]}
    "noEmit": true,
    "jsx": "react-jsx",il with forceConsistentCasingInFileNames enabled
    "strict": true,rom './components/button.tsx'  // Actual file: Button.tsx
    "noUnusedLocals": true,    "noUnusedParameters": true,    "noFallthroughCasesInSwitch": true,    "composite": true,    "allowSyntheticDefaultImports": true,    "outDir": "dist"  },  "include": ["src", "vite.config.ts"],  "references": [    { "path": "./tsconfig.node.json" }
  ]
}
