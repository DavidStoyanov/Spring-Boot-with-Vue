interface TutorialAdd {
    id: null | string | number,
    title: string,
    description: string | string[] | number
}

interface TutorialView {
    id: string | number,
    title: string,
    description: string | string[] | number
}

export type { TutorialAdd, TutorialView }