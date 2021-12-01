import { css as cssImport } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";
import styledImport from "@emotion/styled";
import "classNamein.macro";

declare module "classNamein.macro" {
    // The styled and css imports
    const styled: typeof styledImport;
    const css: typeof cssImport;
}

declare module "react" {
    // The css prop
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        css?: CSSInterpolation;
    }
    // The inline svg css prop
    interface SVGProps<T> extends SVGProps<SVGSVGElement> {
        css?: CSSInterpolation;
    }
}
