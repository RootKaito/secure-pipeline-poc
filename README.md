# Secure CI/CD Pipeline — POC (Gitleaks + SonarCloud + OWASP ZAP)

> Laboratório público e reproduzível que prova, na prática, um pipeline de code review
> seguro rodando de ponta a ponta contra uma aplicação propositalmente vulnerável
> (OWASP Juice Shop).

**Tutorial completo:** _(link para o site, publicado via GitHub Pages, entra aqui na Fase 5)_

## O que este repositório demonstra

Três gates de segurança bloqueando problemas **reais** — não simulados — em cada etapa
do ciclo de vida do código:

| Gate | Ferramenta | Onde roda | Status |
|---|---|---|---|
| Secret scanning | [Gitleaks](https://github.com/gitleaks/gitleaks) | pre-commit local + PR (GitHub Actions) | ⏳ pendente |
| SAST / Quality Gate | [SonarCloud](https://sonarcloud.io) | PR (GitHub Actions) | ⏳ pendente |
| DAST | [OWASP ZAP](https://www.zaproxy.org/) baseline scan | pós-deploy em staging (GitHub Actions) | ⏳ pendente |

## Estrutura do repositório

```
secure-pipeline-poc/
├── target-app/                   # OWASP Juice Shop (alvo vulnerável)
├── .github/workflows/            # pre-merge-gates.yml, pre-deploy-dast.yml
├── .gitleaks.toml                # config + allowlist do Gitleaks
├── sonar-project.properties      # config do SonarCloud
├── zap/                          # regras/exceções do ZAP
├── docs/                         # screenshots reais de cada gate bloqueando
└── site/                         # site de tutorial (capítulos, publicado via GitHub Pages)
```

## Escopo

Sem infraestrutura própria 24/7 — tudo roda sob demanda via GitHub Actions. Sem
cobertura de todas as vulnerabilidades do Juice Shop, só as suficientes para provar
cada gate. Ver [poc-secure-pipeline-spec.md] para a spec completa do projeto.
