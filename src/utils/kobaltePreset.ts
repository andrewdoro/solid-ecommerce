import type { Preset } from "unocss";

/**
 * @public
 */
export interface PrimitivesOptions {
  /**
   * @default 'ui'
   */
  prefix?: string;
  /**
   * @default 'open|checked|selected|active|disabled'
   */
  variants?: string;
  /**
   * @default 'data-headlessui-state'
   */
  selector?: string;
}

const presetPrimitives = (options: PrimitivesOptions = {}): Preset => {
  const {
    prefix = "ui",
    variants = "open|checked|selected|active|disabled",
    selector = "data-headlessui-state",
  } = options;

  return {
    name: "unocss-preset-primitives",
    variants: [
      (matcher: string) => {
        const regex = new RegExp(`^${prefix}(-not)?-(${variants})[:-]`);
        const match = matcher.match(regex);
        if (match) {
          return {
            matcher: matcher.slice(match[0].length),
            selector: (s: any) =>
              match[1] === "-not"
                ? `${s}[${selector}]:not([${selector}-${match[2]}])`
                : `${s}[${selector}-${match[2]}]`,
          };
        } else {
          return matcher;
        }
      },
    ],
  };
};

/**
 * @public
 */
export interface KobalteOptions {
  /**
   * @default 'ui'
   */
  prefix?: string;
}

const presetKobalte = (options: KobalteOptions = {}): Preset => {
  const { prefix = "ui" } = options;
  const variants =
    "valid|invalid|required|disabled|readonly|checked|indeterminate|selected|pressed|expanded|hover|focus|focus-visible|active";
  return presetPrimitives({ prefix, variants, selector: "data" });
};

export { presetKobalte };
export default presetPrimitives;
