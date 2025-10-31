declare interface RegisterInput {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
    provider: string
}

declare interface LoginInput {
    email: string;
    password: string;
    provider: string;
}

declare interface ErrorRegister {
    email: string[],
    password: string[],
    username: string[],
    password_security: string[],
    password_match: string[],
    confirm_password: string[],
}

declare interface ErrorResponse {
    message: string;
    errors?: {
        [field: string]: string[];
    };
    data?: {
        [field: string]: string[];
    };
    token?: {
        [field: string]: string[];
    };
}

declare interface AnswerAssesment {
    [key: string]: string
}

declare interface Roadmap {
    title: string
    description: string
}

declare interface Item {
    path: string
    prob: string
    image: string
}

declare interface Question {
    id: number
    text: string
    options: OptionText[]
}

declare type OptionText = string

declare type SelectedIndex = number | null

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
    export default component
}