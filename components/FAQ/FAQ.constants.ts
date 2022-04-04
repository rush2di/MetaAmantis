const ANIMATION_VARIANTS_KEYS = {
  open: "open",
  closed: "closed",
};

const ANIMATION_VARIANTS = {
  [ANIMATION_VARIANTS_KEYS.open]: { rotate: -135 },
  [ANIMATION_VARIANTS_KEYS.closed]: { rotate: 0 },
};

const ANIMATION_TEXT_VARIANTS = {
  [ANIMATION_VARIANTS_KEYS.open]: {
    height: "auto",
    opacity: 1
  },
  [ANIMATION_VARIANTS_KEYS.closed]: {
    height: 0,
    opacity: 0
  },
};

export { ANIMATION_VARIANTS, ANIMATION_VARIANTS_KEYS, ANIMATION_TEXT_VARIANTS };
