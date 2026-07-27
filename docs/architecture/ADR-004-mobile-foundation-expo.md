# ADR-004: Expo mobile foundation in the existing repository

Status: Recommended
Jira: BAZ-64

## Context
The product needs iOS/Android access while sharing contracts and domain safeguards with the existing React web application. The team is small, backend contracts are still evolving, and direct provider access from clients is prohibited.

## Candidates
1. Responsive web/PWA only - smallest, but weak native secure storage, notifications and app-store path.
2. Expo managed app in the monorepo - shared TypeScript, native capabilities, reversible and low operations burden.
3. Separate bare React Native repository - maximum control, highest duplication and release burden.

## Decision
Use Expo SDK 57 with Expo Router in `apps/mobile`, React Native 0.86, strict TypeScript and BFF-only ports. Do not add native folders until a capability requires prebuild.

## Consequences
- one repository and shared contracts;
- no microfrontend or mobile-specific backend;
- lockfile and clean install required before merge;
- native module additions require a new ADR and security review;
- initial maturity remains generated until install, typecheck and device smoke pass.

## Rollback
Remove `apps/mobile` and workspace additions; web application and backend contracts remain unchanged.
