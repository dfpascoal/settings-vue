
 Objetivo
Avaliar a implementação do projeto frente aos requisitos do desafio técnico.

 1) Configuração Inicial
- Vue 3 + Vite, TypeScript (strict), Tailwind CSS, PrimeVue com temas, Vue Router, TanStack Query, Storybook.
- `vite.config.ts`, `tsconfig.json`, `tailwind.config.js` e plugin do PrimeVue configurados.
- Temas do PrimeVue carregados dinamicamente.

 2) Rotas
- Desktop: `/settings` (home) e `/settings/:submenu` com sidebar fixa.
- Mobile: `/settings` mostra menu; ao selecionar item, navega para `/settings/[submenu]` com botão de voltar.
- Implementado em `src/router/index.ts` e `SettingsLayout.vue`.

 3) Logout + 4) Modal
- Botão “Sair” na `SettingsSidebar.vue`.
- Confirmação via DynamicDialog: pergunta, botões Cancelar/Confirmar, estados de loading/erro.
- Ação: `console.log`, `localStorage.clear()` e redirecionamento.

 5) Subpáginas
- `SettingsSubmenu.vue` com título dinâmico e componentes PrimeVue (Card, ToggleSwitch, Button).
- Páginas: `Account.vue`, `Help.vue`, `AccountStatus.vue`.

6) Tema Claro/Escuro
- Toggle funcional, persistência em `localStorage`, aplicação da classe `dark`.
- Observação: havia duplicidade; solução aplicada: unificação no composable `useTheme.ts`.

7) TanStack Query
- Configurado em `main.ts`.
- Composables `useUserProfile.ts` e `useUser.ts` com queries/mutações e delay simulado.
- MSW para mocks; uso em `SettingsHome.vue`; documentação própria.

8) Storybook
- Pelo menos 4 componentes documentados com variações.
- Configuração e scripts de execução e build.

Entregáveis
- Repositório com código completo e README detalhado.
- Aplicação funcional; recomendado validar `npm run build` e inspecionar o console em produção.

Pontos de Atenção
- Unificação do tema concluída.
- Testar build de produção, revisar console, garantir responsividade, checar clareza dos commits.

Conclusão
- Requisitos obrigatórios atendidos integralmente.
- Projeto apto para entrega.
- Próximos passos: `npm run build`, `npm run preview`, testes cross-browser, revisão final de logs.
