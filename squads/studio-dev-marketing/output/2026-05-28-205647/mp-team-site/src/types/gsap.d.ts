// Suppress TS errors from dynamic GSAP context type
declare namespace gsap {
  interface core {
    context(func: () => void, scope?: Element | null): { revert: () => void }
  }
}
