import type { RenderOptions } from "@testing-library/react"
import type { ReactElement, ReactNode } from "react"
import { BrowserRouter } from "react-router-dom"
import { render } from '@testing-library/react';

const AllProvider = ({ children }: { children: ReactNode }) => {

    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}

const CustomRender = (ui: ReactElement, option?: Omit<RenderOptions, "wrapper">) => render(ui, { wrapper: AllProvider, ...option });

export * from '@testing-library/react';
export { CustomRender as render }