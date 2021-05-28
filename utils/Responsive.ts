export type Responsive =
    | Partial<{
          xs: string | number;
          sm: string | number;
          md: string | number;
          lg: string | number;
          xl: string | number;
          xxl: string | number;
      }>
    | string
    | number;

export const bp = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
};

type BpKeys = (keyof typeof bp)[];

export const bpKeys = Object.keys(bp) as BpKeys;

export const mq = {
    sm: `@media (min-width: ${bp.sm}px)`,
    md: `@media (min-width: ${bp.md}px)`,
    lg: `@media (min-width: ${bp.lg}px)`,
    xl: `@media (min-width: ${bp.xl}px)`,
    xxl: `@media (min-width: ${bp.xxl}px)`,
};

export function getResponsiveQuries(
    input: Responsive,
    proprety: (value: string | number) => string
) {
    if (typeof input === "string" || typeof input === "number") {
        return proprety(input);
    }

    let resault = ``;

    if (input.xs) {
        resault += `
            ${proprety(input.xs)}
        `;
    }

    for (const key of bpKeys) {
        if (input[key] != undefined) {
            resault += `
                ${mq[key]} {
                    ${proprety(input[key] ?? "")}
                }
            `;
        }
    }

    return resault;
}
